const CHAVE_TREINOS = "gymflow:treinos";
let idTreinoEmEdicao = null;
let exercicioSelecionado = null;
let idTreinoSendoEditado = null;
let idTreinoEmModoEdicao = null;
let idExercicioSendoEditado = null;
let gruposFichaEmEdicao = [];
let backupTreinoAntesEdicao = null;
let termoBuscaTreinos = "";
let temporizadorAviso;

function obterTreinos() {
  const dadosSalvos = localStorage.getItem(CHAVE_TREINOS);

  if (!dadosSalvos) {
    return [];
  }

  try {
    const treinos = JSON.parse(dadosSalvos);
    return Array.isArray(treinos) ? treinos : [];
  } catch {
    console.warn("Não foi possível ler os treinos salvos neste dispositivo.");
    return [];
  }
}

function salvarTreinos(treinos) {
  localStorage.setItem(CHAVE_TREINOS, JSON.stringify(treinos));
}

function mostrarAviso(mensagem) {
  const aviso = document.querySelector("#aviso-app");
  if (!aviso) return;

  clearTimeout(temporizadorAviso);

  aviso.classList.remove("saindo");
  aviso.textContent = mensagem;
  aviso.hidden = false;

  temporizadorAviso = setTimeout(() => {
    aviso.classList.add("saindo");

    setTimeout(() => {
      aviso.hidden = true;
      aviso.classList.remove("saindo");
    }, 250);
  }, 3500);
}

function mostrarConfirmacao({
  titulo = "Confirmar ação",
  mensagem,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
}) {
  return new Promise((resolve) => {
    const modal = document.querySelector("#modal-confirmacao");
    const tituloElemento = document.querySelector("#titulo-confirmacao");
    const mensagemElemento = document.querySelector("#mensagem-confirmacao");
    const botaoConfirmar = document.querySelector("#confirmar-acao");
    const botaoCancelar = document.querySelector("#cancelar-confirmacao");
    const botaoFechar = document.querySelector("#fechar-confirmacao");

    if (!modal) {
      resolve(false);
      return;
    }

    tituloElemento.textContent = titulo;
    mensagemElemento.textContent = mensagem;
    botaoConfirmar.textContent = textoConfirmar;
    botaoCancelar.textContent = textoCancelar;

    const finalizar = (resultado) => {
      modal.close();
      resolve(resultado);
    };

    botaoConfirmar.onclick = () => finalizar(true);
    botaoCancelar.onclick = () => finalizar(false);
    botaoFechar.onclick = () => finalizar(false);

    modal.showModal();
  });
}

function gerarIdTreino() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `treino-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function atualizarQuantidade(quantidade) {
  const contador = document.querySelector("#quantidade-fichas");

  if (!contador) {
    return;
  }

  if (quantidade === 0) {
    contador.textContent = "Nenhuma ficha";
    return;
  }

  contador.textContent = `${quantidade} ${quantidade === 1 ? "ficha" : "fichas"}`;
}

function criarCardTreino(treino, indice) {
  const item = document.createElement("li");
  const botao = document.createElement("button");
  const icone = document.createElement("span");
  const informacoes = document.createElement("span");
  const titulo = document.createElement("span");
  const descricao = document.createElement("span");
  const quantidadeExercicios = document.createElement("span");
  const seta = document.createElement("span");
  const detalhes = document.createElement("div");
  const tituloExercicios = document.createElement("h4");
  const listaExercicios = document.createElement("ul");
  const botaoAdicionar = document.createElement("button");
  const acoesTreino = document.createElement("div");
  const botaoEditar = document.createElement("button");
  const botaoEditarTreino = document.createElement("button");
  const controlesEdicao = document.createElement("div");

  const exercicios = Array.isArray(treino.exercicios) ? treino.exercicios : [];
  const totalExercicios = exercicios.length;
  const idDetalhes = `detalhes-treino-${indice}`;

  item.className = "item-treino";

  botao.className = "card-treino";
  botao.type = "button";
  botao.dataset.treinoId = treino.id;
  botao.setAttribute("aria-expanded", "false");
  botao.setAttribute("aria-controls", idDetalhes);

  icone.className = "icone-treino";
  icone.setAttribute("aria-hidden", "true");
  icone.textContent = "🏋️";

  informacoes.className = "info-treino";

  titulo.className = "titulo-treino";
  descricao.className = "descricao-treino";
  quantidadeExercicios.className = "quantidade-exercicios";
  titulo.textContent = treino.nome || "Treino sem nome";
  descricao.textContent = treino.descricao || "Sem descrição";
  quantidadeExercicios.textContent = `${totalExercicios} ${totalExercicios === 1 ? "exercício" : "exercícios"}`;

  seta.className = "seta";
  seta.setAttribute("aria-hidden", "true");
  seta.textContent = ">";

  informacoes.append(titulo, descricao, quantidadeExercicios);
  botao.append(icone, informacoes, seta);

  detalhes.className = "detalhes-treino";
  detalhes.id = idDetalhes;
  detalhes.hidden = true;

  tituloExercicios.textContent = "Exercícios";
  listaExercicios.className = "lista-exercicios";

  if (totalExercicios === 0) {
    const exercicioVazio = document.createElement("li");
    exercicioVazio.className = "exercicio-vazio";
    exercicioVazio.textContent = "Nenhum exercício adicionado ainda.";
    listaExercicios.append(exercicioVazio);
  } else {
    exercicios.forEach((exercicio, indiceExercicio) => {
      const linha = document.createElement("li");
      const nome = document.createElement("strong");
      const configuracao = document.createElement("span");
      const controles = document.createElement("div");
      const moverCima = document.createElement("button");
      const moverBaixo = document.createElement("button");
      const editarExercicio = document.createElement("button");
      const excluirExercicio = document.createElement("button");

      nome.textContent = exercicio.nome || "Exercício sem nome";
      const detalhesExercicio = [
        `${exercicio.series || 0} séries × ${exercicio.repeticoes || 0} repetições`,
        exercicio.carga !== null && exercicio.carga !== undefined
          ? `${exercicio.carga} kg`
          : null,
        exercicio.descanso ? `${exercicio.descanso}s de descanso` : null,
      ].filter(Boolean);

      configuracao.textContent = detalhesExercicio.join(" · ");

      linha.className = "item-exercicio";
      controles.className = "controles-exercicio";
      moverCima.type = "button";
      moverCima.textContent = "↑";
      moverCima.title = "Mover exercício para cima";
      moverCima.disabled = indiceExercicio === 0;
      moverCima.addEventListener("click", () =>
        moverExercicio(treino.id, indiceExercicio, -1),
      );
      moverBaixo.type = "button";
      moverBaixo.textContent = "↓";
      moverBaixo.title = "Mover exercício para baixo";
      moverBaixo.disabled = indiceExercicio === exercicios.length - 1;
      moverBaixo.addEventListener("click", () =>
        moverExercicio(treino.id, indiceExercicio, 1),
      );
      editarExercicio.type = "button";
      editarExercicio.textContent = "Editar";
      editarExercicio.addEventListener("click", () =>
        abrirModalEditarExercicio(treino.id, exercicio.id),
      );
      excluirExercicio.type = "button";
      excluirExercicio.className = "botao-excluir";
      excluirExercicio.textContent = "Excluir";
      excluirExercicio.addEventListener("click", () =>
        excluirExercicioDoTreino(treino.id, exercicio.id),
      );

      controles.append(
        moverCima,
        moverBaixo,
        editarExercicio,
        excluirExercicio,
      );
      linha.append(nome, configuracao, controles);
      listaExercicios.append(linha);
    });
  }

  botaoAdicionar.className = "botao-adicionar-exercicio";
  botaoAdicionar.type = "button";
  botaoAdicionar.textContent = "+ Adicionar exercício";
  botaoAdicionar.addEventListener("click", () =>
    abrirModalAdicionarExercicio(treino.id),
  );

  acoesTreino.className = "acoes-treino";

  botaoEditar.className = "botao-acao-treino";
  botaoEditar.type = "button";
  botaoEditar.textContent = "Editar ficha";
  botaoEditar.addEventListener("click", () => {
    if (idTreinoEmModoEdicao === treino.id) {
      cancelarEdicaoTreino(treino.id);
    } else {
      abrirModalEditarTreino(treino.id);
    }
  });

  botaoEditarTreino.className = "botao-acao-treino";
  botaoEditarTreino.type = "button";
  botaoEditarTreino.textContent = "Editar treino";
  botaoEditarTreino.addEventListener("click", () =>
    alternarModoEdicaoTreino(treino.id),
  );

  controlesEdicao.className = "controles-edicao-treino";
  controlesEdicao.append(botaoAdicionar);
  acoesTreino.append(botaoEditar, botaoEditarTreino);
  detalhes.append(
    tituloExercicios,
    listaExercicios,
    controlesEdicao,
    acoesTreino,
  );

  if (idTreinoEmModoEdicao === treino.id) {
    detalhes.classList.add("modo-edicao");
    botaoEditar.textContent = "Cancelar";
    botaoEditarTreino.textContent = "Salvar";
  }
  item.append(botao, detalhes);

  botao.addEventListener("click", () => {
    const seraAberto = botao.getAttribute("aria-expanded") === "false";

    document
      .querySelectorAll(".card-treino[aria-expanded='true']")
      .forEach((outroBotao) => {
        outroBotao.setAttribute("aria-expanded", "false");
        outroBotao.classList.remove("esta-aberto");
        document.getElementById(
          outroBotao.getAttribute("aria-controls"),
        ).hidden = true;
      });

    botao.setAttribute("aria-expanded", String(seraAberto));
    botao.classList.toggle("esta-aberto", seraAberto);
    detalhes.hidden = !seraAberto;
  });

  return item;
}

function criarEstadoVazio(
  mensagemTexto = "Você ainda não criou nenhuma ficha. Crie seu primeiro treino para começar.",
) {
  const item = document.createElement("li");
  const mensagem = document.createElement("p");

  item.className = "estado-vazio";
  mensagem.textContent = mensagemTexto;

  item.append(mensagem);
  return item;
}

function renderizarTreinos() {
  const lista = document.querySelector("#lista-treinos");

  if (!lista) {
    return;
  }

  const treinos = obterTreinos();
  const termoNormalizado = termoBuscaTreinos.toLocaleLowerCase("pt-BR").trim();
  const treinosFiltrados = treinos.filter(
    (treino) =>
      !termoNormalizado ||
      treino.nome?.toLocaleLowerCase("pt-BR").includes(termoNormalizado) ||
      treino.descricao?.toLocaleLowerCase("pt-BR").includes(termoNormalizado),
  );
  lista.replaceChildren();

  if (treinosFiltrados.length === 0) {
    lista.append(
      criarEstadoVazio(
        termoNormalizado
          ? "Nenhuma ficha encontrada para esta busca."
          : undefined,
      ),
    );
  } else {
    treinosFiltrados.forEach((treino, indice) => {
      lista.append(criarCardTreino(treino, indice));
    });
  }

  atualizarQuantidade(treinos.length);
}

function abrirModalNovoTreino() {
  const modal = document.querySelector("#modal-novo-treino");
  const campoNome = document.querySelector("#nome-treino");
  const formulario = document.querySelector("#form-novo-treino");

  if (!modal) {
    return;
  }

  idTreinoSendoEditado = null;
  formulario.reset();
  gruposFichaEmEdicao = [];
  preencherGruposFicha();
  renderizarGruposFicha();
  document.querySelector("#titulo-modal").textContent = "Criar treino";
  formulario.querySelector("button[type='submit']").textContent = "Criar ficha";
  document.querySelector("#excluir-ficha-modal").hidden = true;
  modal.showModal();
  campoNome?.focus();
}

function fecharModalNovoTreino() {
  const modal = document.querySelector("#modal-novo-treino");
  modal?.close();
  idTreinoSendoEditado = null;
}

function abrirModalEditarTreino(idTreino) {
  const treino = obterTreinos().find(({ id }) => id === idTreino);
  const modal = document.querySelector("#modal-novo-treino");
  const formulario = document.querySelector("#form-novo-treino");

  if (!treino || !modal) {
    return;
  }

  idTreinoSendoEditado = idTreino;
  document.querySelector("#titulo-modal").textContent = "Editar ficha";
  formulario.querySelector("button[type='submit']").textContent =
    "Salvar alterações";
  document.querySelector("#nome-treino").value = treino.nome;
  gruposFichaEmEdicao = treino.gruposMusculares?.length
    ? [...treino.gruposMusculares]
    : treino.descricao.split(", ").filter(Boolean);
  preencherGruposFicha();
  renderizarGruposFicha();
  document.querySelector("#excluir-ficha-modal").hidden = false;
  modal.showModal();
  document.querySelector("#nome-treino").focus();
}

function preencherGruposFicha() {
  const seletor = document.querySelector("#grupo-ficha");
  seletor.replaceChildren(criarOpcao("", "Escolha um grupo muscular"));

  window.ESTRUTURA_MUSCULAR.forEach((regiao) => {
    regiao.grupos.forEach((grupo) => {
      seletor.append(criarOpcao(grupo.nome, `${regiao.nome} — ${grupo.nome}`));
    });
  });
}

function adicionarGrupoFicha(grupo) {
  const nome = grupo.trim();
  if (!nome || gruposFichaEmEdicao.includes(nome)) {
    return;
  }

  gruposFichaEmEdicao.push(nome);
  renderizarGruposFicha();
}

function renderizarGruposFicha() {
  const lista = document.querySelector("#lista-grupos-ficha");
  lista.replaceChildren();

  gruposFichaEmEdicao.forEach((grupo) => {
    const tag = document.createElement("span");
    const remover = document.createElement("button");

    tag.className = "tag-grupo";
    tag.textContent = grupo;
    remover.className = "remover-grupo";
    remover.type = "button";
    remover.setAttribute("aria-label", `Remover ${grupo}`);
    remover.textContent = "×";
    remover.addEventListener("click", () => {
      gruposFichaEmEdicao = gruposFichaEmEdicao.filter(
        (item) => item !== grupo,
      );
      renderizarGruposFicha();
    });

    tag.append(remover);
    lista.append(tag);
  });
}

async function excluirTreino(idTreino) {
  const treino = obterTreinos().find(({ id }) => id === idTreino);

  if (!treino) {
    return;
  }

  const confirmou = await mostrarConfirmacao({
    titulo: "Excluir ficha",
    mensagem: `Excluir a ficha “${treino.nome}”? Esta ação não pode ser desfeita.`,
    textoConfirmar: "Excluir",
  });

  if (!confirmou) {
    return;
  }

  salvarTreinos(obterTreinos().filter(({ id }) => id !== idTreino));
  renderizarTreinos();
}

function abrirTreino(idTreino) {
  const botao = document.querySelector(
    `.card-treino[data-treino-id="${idTreino}"]`,
  );

  if (botao?.getAttribute("aria-expanded") === "false") {
    botao.click();
  }
}

function alternarModoEdicaoTreino(idTreino) {
  if (idTreinoEmModoEdicao === idTreino) {
    salvarEdicaoTreino(idTreino);
    return;
  }

  const treino = obterTreinos().find(({ id }) => id === idTreino);
  backupTreinoAntesEdicao = JSON.parse(JSON.stringify(treino));
  idTreinoEmModoEdicao = idTreino;
  renderizarTreinos();
  abrirTreino(idTreino);
}

function salvarEdicaoTreino(idTreino) {
  idTreinoEmModoEdicao = null;
  backupTreinoAntesEdicao = null;
  renderizarTreinos();
  abrirTreino(idTreino);
}

function cancelarEdicaoTreino(idTreino) {
  if (backupTreinoAntesEdicao?.id === idTreino) {
    const treinos = obterTreinos().map((treino) =>
      treino.id === idTreino ? backupTreinoAntesEdicao : treino,
    );
    salvarTreinos(treinos);
  }

  idTreinoEmModoEdicao = null;
  backupTreinoAntesEdicao = null;
  renderizarTreinos();
  abrirTreino(idTreino);
}

function moverExercicio(idTreino, indiceAtual, direcao) {
  const treinos = obterTreinos();
  const treino = treinos.find(({ id }) => id === idTreino);
  const novoIndice = indiceAtual + direcao;

  if (!treino || novoIndice < 0 || novoIndice >= treino.exercicios.length) {
    return;
  }

  [treino.exercicios[indiceAtual], treino.exercicios[novoIndice]] = [
    treino.exercicios[novoIndice],
    treino.exercicios[indiceAtual],
  ];

  salvarTreinos(treinos);
  idTreinoEmModoEdicao = idTreino;
  renderizarTreinos();
  abrirTreino(idTreino);
}

async function excluirExercicioDoTreino(idTreino, idExercicio) {
  const treinos = obterTreinos();
  const treino = treinos.find(({ id }) => id === idTreino);
  const exercicio = treino?.exercicios.find(({ id }) => id === idExercicio);

  if (!exercicio) {
    return;
  }

  const confirmou = await mostrarConfirmacao({
    titulo: "Excluir exercício",
    mensagem: `Excluir o exercício “${exercicio.nome}”? Esta ação não pode ser desfeita.`,
    textoConfirmar: "Excluir",
  });

  if (!confirmou) {
    return;
  }

  treino.exercicios = treino.exercicios.filter(
    ({ id }) => id !== idExercicio,
  );

  salvarTreinos(treinos);
  idTreinoEmModoEdicao = idTreino;
  renderizarTreinos();
  abrirTreino(idTreino);
}

function configurarFormularioNovoTreino() {
  const botaoCriar = document.querySelector("#criar-treino");
  const botaoCancelar = document.querySelector("#cancelar-novo-treino");
  const formulario = document.querySelector("#form-novo-treino");
  const seletorGrupo = document.querySelector("#grupo-ficha");
  const botaoAdicionarGrupo = document.querySelector("#adicionar-grupo-ficha");
  const campoGrupoPersonalizado = document.querySelector(
    "#grupo-personalizado-ficha",
  );
  const botaoAdicionarPersonalizado = document.querySelector(
    "#adicionar-grupo-personalizado",
  );
  const botaoExcluirFicha = document.querySelector("#excluir-ficha-modal");

  botaoCriar?.addEventListener("click", abrirModalNovoTreino);
  botaoCancelar?.addEventListener("click", fecharModalNovoTreino);
  botaoAdicionarGrupo.addEventListener("click", () => {
    adicionarGrupoFicha(seletorGrupo.value);
    seletorGrupo.value = "";
  });
  botaoAdicionarPersonalizado.addEventListener("click", () => {
    adicionarGrupoFicha(campoGrupoPersonalizado.value);
    campoGrupoPersonalizado.value = "";
  });
  botaoExcluirFicha.addEventListener("click", () => {
    if (!idTreinoSendoEditado) {
      return;
    }

    const idTreino = idTreinoSendoEditado;
    fecharModalNovoTreino();
    excluirTreino(idTreino);
  });

  formulario?.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dados = new FormData(formulario);
    const nome = dados.get("nome")?.trim();
    const descricao =
      gruposFichaEmEdicao.join(", ") || "Sem grupos musculares definidos";

    if (!nome) {
      return;
    }

    const treinos = obterTreinos();

    if (idTreinoSendoEditado) {
      const treino = treinos.find(({ id }) => id === idTreinoSendoEditado);
      treino.nome = nome;
      treino.descricao = descricao;
      treino.gruposMusculares = [...gruposFichaEmEdicao];
      salvarTreinos(treinos);
      formulario.reset();
      fecharModalNovoTreino();
      renderizarTreinos();
      abrirTreino(treino.id);
      return;
    }

    const novoTreino = {
      id: gerarIdTreino(),
      nome,
      descricao,
      gruposMusculares: [...gruposFichaEmEdicao],
      exercicios: [],
      criadoEm: new Date().toISOString(),
    };

    treinos.push(novoTreino);
    salvarTreinos(treinos);
    formulario.reset();
    fecharModalNovoTreino();
    renderizarTreinos();
  });
}

function criarOpcao(valor, texto) {
  const opcao = document.createElement("option");
  opcao.value = valor;
  opcao.textContent = texto;
  return opcao;
}

function limparSelecaoExercicio() {
  exercicioSelecionado = null;
  document.querySelector("#configuracao-exercicio").hidden = true;
  document.querySelector("#salvar-exercicio").disabled = true;
}

function preencherRegioes() {
  const filtroRegiao = document.querySelector("#filtro-regiao");
  filtroRegiao.replaceChildren(criarOpcao("", "Todas as regiões"));

  window.ESTRUTURA_MUSCULAR.forEach((regiao) => {
    filtroRegiao.append(criarOpcao(regiao.id, regiao.nome));
  });
}

function preencherGrupos() {
  const filtroRegiao = document.querySelector("#filtro-regiao");
  const filtroGrupo = document.querySelector("#filtro-grupo");
  const filtroFoco = document.querySelector("#filtro-foco");
  const regiao = window.ESTRUTURA_MUSCULAR.find(
    ({ id }) => id === filtroRegiao.value,
  );

  filtroGrupo.replaceChildren(criarOpcao("", "Todos os grupos"));
  filtroFoco.replaceChildren(criarOpcao("", "Todos os focos"));
  filtroGrupo.disabled = !regiao;
  filtroFoco.disabled = true;

  regiao?.grupos.forEach((grupo) => {
    filtroGrupo.append(criarOpcao(grupo.id, grupo.nome));
  });
}

function preencherFocos() {
  const filtroRegiao = document.querySelector("#filtro-regiao");
  const filtroGrupo = document.querySelector("#filtro-grupo");
  const filtroFoco = document.querySelector("#filtro-foco");
  const regiao = window.ESTRUTURA_MUSCULAR.find(
    ({ id }) => id === filtroRegiao.value,
  );
  const grupo = regiao?.grupos.find(({ id }) => id === filtroGrupo.value);

  filtroFoco.replaceChildren(criarOpcao("", "Todos os focos"));
  filtroFoco.disabled = !grupo;

  grupo?.focos.forEach((foco) => {
    filtroFoco.append(criarOpcao(foco, foco));
  });
}

function obterExerciciosFiltrados() {
  const regiao = document.querySelector("#filtro-regiao").value;
  const grupo = document.querySelector("#filtro-grupo").value;
  const foco = document.querySelector("#filtro-foco").value;
  const busca = document
    .querySelector("#buscar-exercicio")
    .value.trim()
    .toLocaleLowerCase("pt-BR");

  return window.CATALOGO_EXERCICIOS.filter(
    (exercicio) =>
      (!regiao || exercicio.regiao === regiao) &&
      (!grupo || exercicio.grupo === grupo) &&
      (!foco || exercicio.foco === foco) &&
      (!busca || exercicio.nome.toLocaleLowerCase("pt-BR").includes(busca)),
  );
}

function selecionarExercicio(exercicio) {
  exercicioSelecionado = exercicio;
  document.querySelector("#exercicio-selecionado").textContent =
    `Selecionado: ${exercicio.nome}`;
  document.querySelector("#configuracao-exercicio").hidden = false;
  document.querySelector("#salvar-exercicio").disabled = false;
  renderizarOpcoesExercicios();
}

function renderizarOpcoesExercicios() {
  const lista = document.querySelector("#lista-opcoes-exercicios");
  const exercicios = obterExerciciosFiltrados();
  lista.replaceChildren();

  if (exercicios.length === 0) {
    const mensagem = document.createElement("p");
    mensagem.className = "sem-resultados";
    mensagem.textContent =
      "Nenhum exercício encontrado. Você pode criar um personalizado.";
    lista.append(mensagem);
    return;
  }

  exercicios.forEach((exercicio) => {
    const botao = document.createElement("button");
    const nome = document.createElement("strong");
    const classificacao = document.createElement("span");

    botao.type = "button";
    botao.className = "opcao-exercicio";
    botao.classList.toggle(
      "esta-selecionado",
      exercicioSelecionado?.id === exercicio.id,
    );
    nome.textContent = exercicio.nome;
    classificacao.textContent = exercicio.foco;

    botao.append(nome, classificacao);
    botao.addEventListener("click", () => selecionarExercicio(exercicio));
    lista.append(botao);
  });
}

function abrirModalAdicionarExercicio(idTreino) {
  const modal = document.querySelector("#modal-adicionar-exercicio");
  const formulario = document.querySelector("#form-adicionar-exercicio");

  idTreinoEmEdicao = idTreino;
  idExercicioSendoEditado = null;
  exercicioSelecionado = null;
  formulario.reset();
  document.querySelector("#salvar-exercicio").textContent = "Adicionar à ficha";
  document.querySelector("#campo-exercicio-personalizado").hidden = true;
  preencherRegioes();
  preencherGrupos();
  limparSelecaoExercicio();
  renderizarOpcoesExercicios();
  modal.showModal();
  document.querySelector("#filtro-regiao").focus();
}

function abrirModalEditarExercicio(idTreino, idExercicio) {
  const treino = obterTreinos().find(({ id }) => id === idTreino);
  const exercicio = treino?.exercicios.find(({ id }) => id === idExercicio);

  if (!exercicio) {
    return;
  }

  abrirModalAdicionarExercicio(idTreino);
  idExercicioSendoEditado = idExercicio;
  document.querySelector("#salvar-exercicio").textContent = "Salvar alterações";

  if (exercicio.personalizado) {
    document.querySelector("#campo-exercicio-personalizado").hidden = false;
    document.querySelector("#nome-exercicio-personalizado").value =
      exercicio.nome;
    exercicioSelecionado = {
      id: "personalizado",
      nome: exercicio.nome,
      personalizado: true,
    };
  } else {
    exercicioSelecionado = window.CATALOGO_EXERCICIOS.find(
      ({ id }) => id === exercicio.catalogoId,
    ) || {
      id: exercicio.catalogoId || exercicio.id,
      nome: exercicio.nome,
      regiao: exercicio.regiao,
      grupo: exercicio.grupo,
      foco: exercicio.foco,
    };
  }

  document.querySelector("#series-exercicio").value = exercicio.series;
  document.querySelector("#repeticoes-exercicio").value = exercicio.repeticoes;
  document.querySelector("#carga-exercicio").value = exercicio.carga ?? "";
  document.querySelector("#descanso-exercicio").value =
    exercicio.descanso ?? 60;
  selecionarExercicio(exercicioSelecionado);
}

function fecharModalAdicionarExercicio() {
  document.querySelector("#modal-adicionar-exercicio")?.close();
  idTreinoEmEdicao = null;
  idExercicioSendoEditado = null;
}

function configurarModalExercicio() {
  const filtroRegiao = document.querySelector("#filtro-regiao");
  const filtroGrupo = document.querySelector("#filtro-grupo");
  const filtroFoco = document.querySelector("#filtro-foco");
  const busca = document.querySelector("#buscar-exercicio");
  const botaoPersonalizado = document.querySelector(
    "#usar-exercicio-personalizado",
  );
  const campoPersonalizado = document.querySelector(
    "#campo-exercicio-personalizado",
  );
  const nomePersonalizado = document.querySelector(
    "#nome-exercicio-personalizado",
  );
  const cancelar = document.querySelector("#cancelar-exercicio");
  const formulario = document.querySelector("#form-adicionar-exercicio");

  filtroRegiao.addEventListener("change", () => {
    preencherGrupos();
    limparSelecaoExercicio();
    renderizarOpcoesExercicios();
  });

  filtroGrupo.addEventListener("change", () => {
    preencherFocos();
    limparSelecaoExercicio();
    renderizarOpcoesExercicios();
  });

  filtroFoco.addEventListener("change", () => {
    limparSelecaoExercicio();
    renderizarOpcoesExercicios();
  });

  busca.addEventListener("input", () => {
    limparSelecaoExercicio();
    renderizarOpcoesExercicios();
  });

  botaoPersonalizado.addEventListener("click", () => {
    campoPersonalizado.hidden = !campoPersonalizado.hidden;
    if (!campoPersonalizado.hidden) {
      nomePersonalizado.focus();
    }
  });

  nomePersonalizado.addEventListener("input", () => {
    const nome = nomePersonalizado.value.trim();
    if (!nome) {
      limparSelecaoExercicio();
      return;
    }

    selecionarExercicio({ id: "personalizado", nome, personalizado: true });
  });

  cancelar.addEventListener("click", fecharModalAdicionarExercicio);

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!idTreinoEmEdicao || !exercicioSelecionado) {
      return;
    }

    const treino = obterTreinos().find(({ id }) => id === idTreinoEmEdicao);
    if (!treino) {
      return;
    }

    const series = Number(document.querySelector("#series-exercicio").value);
    const repeticoes = Number(
      document.querySelector("#repeticoes-exercicio").value,
    );
    const carga = document.querySelector("#carga-exercicio").value;
    const descanso = Number(
      document.querySelector("#descanso-exercicio").value,
    );

    const dadosExercicio = {
      nome: exercicioSelecionado.nome,
      catalogoId: exercicioSelecionado.personalizado
        ? null
        : exercicioSelecionado.id,
      personalizado: Boolean(exercicioSelecionado.personalizado),
      regiao: exercicioSelecionado.regiao || null,
      grupo: exercicioSelecionado.grupo || null,
      foco: exercicioSelecionado.foco || null,
      series,
      repeticoes,
      carga: carga === "" ? null : Number(carga),
      descanso,
    };

    if (idExercicioSendoEditado) {
      const exercicio = treino.exercicios.find(
        ({ id }) => id === idExercicioSendoEditado,
      );
      Object.assign(exercicio, dadosExercicio);
    } else {
      treino.exercicios.push({ id: gerarIdTreino(), ...dadosExercicio });
    }

    const treinos = obterTreinos().map((item) =>
      item.id === treino.id ? treino : item,
    );
    salvarTreinos(treinos);
    fecharModalAdicionarExercicio();
    renderizarTreinos();
    idTreinoEmModoEdicao = treino.id;
    abrirTreino(treino.id);
  });
}

function baixarArquivo(nome, conteudo, tipo) {
  const arquivo = new Blob([conteudo], { type: tipo });
  const url = URL.createObjectURL(arquivo);
  const link = document.createElement("a");
  link.href = url;
  link.download = nome;
  link.click();
  URL.revokeObjectURL(url);
}

function exportarBackup() {
  const backup = {
    app: "GymFlow",
    versao: 1,
    exportadoEm: new Date().toISOString(),
    treinos: obterTreinos(),
  };

  baixarArquivo(
    "gymflow-backup.json",
    JSON.stringify(backup, null, 2),
    "application/json",
  );
  mostrarAviso("Backup exportado com sucesso.");
}

async function importarBackup(arquivo) {
  if (!arquivo) return;

  try {
    const dados = JSON.parse(await arquivo.text());
    const treinosImportados = Array.isArray(dados) ? dados : dados.treinos;

    if (
      !Array.isArray(treinosImportados) ||
      !treinosImportados.every(
        (treino) => treino && typeof treino.nome === "string",
      )
    ) {
      throw new Error("Formato inválido");
    }

    const confirmou = await mostrarConfirmacao({
      titulo: "Importar backup",
      mensagem:
        "Importar este backup substituirá as fichas atuais deste dispositivo. Deseja continuar?",
      textoConfirmar: "Importar",
    });

    if (!confirmou) {
      return;
    }

    const treinosNormalizados = treinosImportados.map((treino) => ({
      ...treino,
      id: treino.id || gerarIdTreino(),
      exercicios: Array.isArray(treino.exercicios) ? treino.exercicios : [],
      gruposMusculares: Array.isArray(treino.gruposMusculares)
        ? treino.gruposMusculares
        : [],
    }));

    salvarTreinos(treinosNormalizados);
    termoBuscaTreinos = "";
    document.querySelector("#buscar-treino").value = "";
    renderizarTreinos();
    mostrarAviso("Backup importado com sucesso.");
  } catch {
    mostrarAviso("Não foi possível importar este arquivo de backup.");
  }
}

function configurarBuscaEBackups() {
  const busca = document.querySelector("#buscar-treino");
  const botaoExportar = document.querySelector("#exportar-backup");
  const botaoImportar = document.querySelector("#importar-backup");
  const arquivoBackup = document.querySelector("#arquivo-backup");

  busca.addEventListener("input", () => {
    termoBuscaTreinos = busca.value;
    renderizarTreinos();
  });
  botaoExportar.addEventListener("click", exportarBackup);
  botaoImportar.addEventListener("click", () => arquivoBackup.click());
  arquivoBackup.addEventListener("change", async () => {
    await importarBackup(arquivoBackup.files[0]);
    arquivoBackup.value = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarTreinos();
  configurarFormularioNovoTreino();
  configurarModalExercicio();
  configurarBuscaEBackups();
});

// Funções que serão reutilizadas quando criarmos a tela de novo treino.
window.GymFlow = {
  chaveTreinos: CHAVE_TREINOS,
  obterTreinos,
  salvarTreinos,
  renderizarTreinos,
};
