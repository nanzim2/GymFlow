const CATALOGO_EXERCICIOS = [
  // =========================
  // PEITO
  // =========================

  {
    id: "supino-reto-barra",
    nome: "Supino reto com barra",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção esternocostal (média)",
  },
  {
    id: "supino-reto-halteres",
    nome: "Supino reto com halteres",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção esternocostal (média)",
  },
  {
    id: "supino-inclinado-barra",
    nome: "Supino inclinado com barra",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção clavicular (superior)",
  },
  {
    id: "supino-inclinado-halteres",
    nome: "Supino inclinado com halteres",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção clavicular (superior)",
  },
  {
    id: "supino-declinado-barra",
    nome: "Supino declinado com barra",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção abdominal (inferior)",
  },
  {
    id: "supino-declinado-halteres",
    nome: "Supino declinado com halteres",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção abdominal (inferior)",
  },
  {
    id: "crucifixo-halteres",
    nome: "Crucifixo com halteres",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção esternocostal (média)",
  },
  {
    id: "crucifixo-inclinado-halteres",
    nome: "Crucifixo inclinado com halteres",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção clavicular (superior)",
  },
  {
    id: "crossover-alto",
    nome: "Crossover de cima para baixo",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção abdominal (inferior)",
  },
  {
    id: "crossover-medio",
    nome: "Crossover na altura do peito",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção esternocostal (média)",
  },
  {
    id: "crossover-baixo",
    nome: "Crossover de baixo para cima",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção clavicular (superior)",
  },
  {
    id: "peck-deck",
    nome: "Peck deck",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção esternocostal (média)",
  },
  {
    id: "flexao-bracos",
    nome: "Flexão de braços",
    regiao: "superiores",
    grupo: "peito",
    foco: "Porção esternocostal (média)",
  },

  // =========================
  // COSTAS
  // =========================

  {
    id: "puxada-frontal",
    nome: "Puxada frontal",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "puxada-supinada",
    nome: "Puxada frontal supinada",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "puxada-neutra",
    nome: "Puxada frontal pegada neutra",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "barra-fixa",
    nome: "Barra fixa",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "barra-fixa-supinada",
    nome: "Barra fixa supinada",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "remada-baixa",
    nome: "Remada baixa",
    regiao: "superiores",
    grupo: "costas",
    foco: "Romboides e redondos",
  },
  {
    id: "remada-curvada-barra",
    nome: "Remada curvada com barra",
    regiao: "superiores",
    grupo: "costas",
    foco: "Romboides e redondos",
  },
  {
    id: "remada-unilateral-halter",
    nome: "Remada unilateral com halter",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "remada-cavalinho",
    nome: "Remada cavalinho",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "remada-maquina",
    nome: "Remada na máquina",
    regiao: "superiores",
    grupo: "costas",
    foco: "Romboides e redondos",
  },
  {
    id: "pulldown",
    nome: "Pulldown na polia",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "pullover-polia",
    nome: "Pullover na polia",
    regiao: "superiores",
    grupo: "costas",
    foco: "Latíssimo do dorso",
  },
  {
    id: "encolhimento-halteres",
    nome: "Encolhimento com halteres",
    regiao: "superiores",
    grupo: "costas",
    foco: "Trapézio superior",
  },
  {
    id: "encolhimento-barra",
    nome: "Encolhimento com barra",
    regiao: "superiores",
    grupo: "costas",
    foco: "Trapézio superior",
  },
  {
    id: "extensao-lombar",
    nome: "Extensão lombar",
    regiao: "superiores",
    grupo: "costas",
    foco: "Eretores da espinha",
  },

  // =========================
  // OMBROS
  // =========================

  {
    id: "desenvolvimento-halteres",
    nome: "Desenvolvimento com halteres",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide anterior",
  },
  {
    id: "desenvolvimento-barra",
    nome: "Desenvolvimento com barra",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide anterior",
  },
  {
    id: "desenvolvimento-maquina",
    nome: "Desenvolvimento na máquina",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide anterior",
  },
  {
    id: "desenvolvimento-arnold",
    nome: "Desenvolvimento Arnold",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide anterior",
  },
  {
    id: "elevacao-lateral",
    nome: "Elevação lateral com halteres",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide lateral",
  },
  {
    id: "elevacao-lateral-polia",
    nome: "Elevação lateral na polia",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide lateral",
  },
  {
    id: "elevacao-lateral-maquina",
    nome: "Elevação lateral na máquina",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide lateral",
  },
  {
    id: "elevacao-frontal-halteres",
    nome: "Elevação frontal com halteres",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide anterior",
  },
  {
    id: "elevacao-frontal-polia",
    nome: "Elevação frontal na polia",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide anterior",
  },
  {
    id: "crucifixo-invertido",
    nome: "Crucifixo invertido",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide posterior",
  },
  {
    id: "crucifixo-invertido-maquina",
    nome: "Crucifixo invertido na máquina",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide posterior",
  },
  {
    id: "face-pull",
    nome: "Face pull",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide posterior",
  },
  {
    id: "remada-alta",
    nome: "Remada alta",
    regiao: "superiores",
    grupo: "ombros",
    foco: "Deltoide lateral",
  },

  // =========================
  // BÍCEPS E TRÍCEPS
  // =========================

  {
    id: "rosca-direta",
    nome: "Rosca direta",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Bíceps braquial - cabeça longa",
  },
  {
    id: "rosca-direta-polia",
    nome: "Rosca direta na polia",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Bíceps braquial - cabeça longa",
  },
  {
    id: "rosca-alternada",
    nome: "Rosca alternada com halteres",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Bíceps braquial - cabeça longa",
  },
  {
    id: "rosca-inclinada",
    nome: "Rosca inclinada com halteres",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Bíceps braquial - cabeça longa",
  },
  {
    id: "rosca-scott",
    nome: "Rosca Scott",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Bíceps braquial - cabeça curta",
  },
  {
    id: "rosca-scott-maquina",
    nome: "Rosca Scott na máquina",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Bíceps braquial - cabeça curta",
  },
  {
    id: "rosca-concentrada",
    nome: "Rosca concentrada",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Bíceps braquial - cabeça curta",
  },
  {
    id: "rosca-martelo",
    nome: "Rosca martelo",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Braquial",
  },
  {
    id: "rosca-martelo-corda",
    nome: "Rosca martelo com corda",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Braquial",
  },
  {
    id: "rosca-inversa",
    nome: "Rosca inversa",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Braquial",
  },
  {
    id: "triceps-pulley",
    nome: "Tríceps pulley",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça lateral",
  },
  {
    id: "triceps-pulley-corda",
    nome: "Tríceps pulley com corda",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça lateral",
  },
  {
    id: "triceps-frances",
    nome: "Tríceps francês",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça longa",
  },
  {
    id: "triceps-testa",
    nome: "Tríceps testa",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça longa",
  },
  {
    id: "triceps-unilateral-polia",
    nome: "Tríceps unilateral na polia",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça lateral",
  },
  {
    id: "triceps-coice",
    nome: "Tríceps coice",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça lateral",
  },
  {
    id: "supino-fechado",
    nome: "Supino fechado",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça medial",
  },
  {
    id: "mergulho-paralelas",
    nome: "Mergulho nas paralelas",
    regiao: "superiores",
    grupo: "bracos",
    foco: "Tríceps braquial - cabeça lateral",
  },

  // =========================
  // ANTEBRAÇO
  // =========================

  {
    id: "flexao-punho",
    nome: "Flexão de punho",
    regiao: "superiores",
    grupo: "antebraco",
    foco: "Flexores do punho",
  },
  {
    id: "extensao-punho",
    nome: "Extensão de punho",
    regiao: "superiores",
    grupo: "antebraco",
    foco: "Extensores do punho",
  },
  {
    id: "rosca-punho-inversa",
    nome: "Rosca de punho inversa",
    regiao: "superiores",
    grupo: "antebraco",
    foco: "Extensores do punho",
  },

  // =========================
  // QUADRÍCEPS
  // =========================

  {
    id: "agachamento-livre",
    nome: "Agachamento livre",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Vasto lateral",
  },
  {
    id: "agachamento-smith",
    nome: "Agachamento no Smith",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Vasto lateral",
  },
  {
    id: "agachamento-hack",
    nome: "Agachamento Hack",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Vasto lateral",
  },
  {
    id: "agachamento-bulgaro",
    nome: "Agachamento búlgaro",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Vasto medial",
  },
  {
    id: "leg-press",
    nome: "Leg press",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Vasto lateral",
  },
  {
    id: "leg-press-horizontal",
    nome: "Leg press horizontal",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Vasto lateral",
  },
  {
    id: "cadeira-extensora",
    nome: "Cadeira extensora",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Vasto medial",
  },
  {
    id: "afundo",
    nome: "Afundo",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Reto femoral",
  },
  {
    id: "passada",
    nome: "Passada",
    regiao: "inferiores-tronco",
    grupo: "quadriceps",
    foco: "Reto femoral",
  },

  // =========================
  // POSTERIORES DE COXA
  // =========================

  {
    id: "stiff",
    nome: "Stiff",
    regiao: "inferiores-tronco",
    grupo: "posteriores",
    foco: "Bíceps femoral",
  },
  {
    id: "stiff-halteres",
    nome: "Stiff com halteres",
    regiao: "inferiores-tronco",
    grupo: "posteriores",
    foco: "Bíceps femoral",
  },
  {
    id: "terra-romeno",
    nome: "Levantamento terra romeno",
    regiao: "inferiores-tronco",
    grupo: "posteriores",
    foco: "Bíceps femoral",
  },
  {
    id: "mesa-flexora",
    nome: "Mesa flexora",
    regiao: "inferiores-tronco",
    grupo: "posteriores",
    foco: "Semitendíneo",
  },
  {
    id: "cadeira-flexora",
    nome: "Cadeira flexora",
    regiao: "inferiores-tronco",
    grupo: "posteriores",
    foco: "Semimembranáceo",
  },
  {
    id: "flexora-em-pe",
    nome: "Flexora em pé",
    regiao: "inferiores-tronco",
    grupo: "posteriores",
    foco: "Bíceps femoral",
  },
  {
    id: "good-morning",
    nome: "Good morning",
    regiao: "inferiores-tronco",
    grupo: "posteriores",
    foco: "Bíceps femoral",
  },

  // =========================
  // GLÚTEOS
  // =========================

  {
    id: "elevacao-pelvica",
    nome: "Elevação pélvica",
    regiao: "inferiores-tronco",
    grupo: "gluteos",
    foco: "Glúteo máximo",
  },
  {
    id: "hip-thrust",
    nome: "Hip thrust",
    regiao: "inferiores-tronco",
    grupo: "gluteos",
    foco: "Glúteo máximo",
  },
  {
    id: "abducao-maquina",
    nome: "Abdução na máquina",
    regiao: "inferiores-tronco",
    grupo: "gluteos",
    foco: "Glúteo médio e mínimo",
  },
  {
    id: "abducao-polia",
    nome: "Abdução na polia",
    regiao: "inferiores-tronco",
    grupo: "gluteos",
    foco: "Glúteo médio e mínimo",
  },
  {
    id: "coice-polia",
    nome: "Coice na polia",
    regiao: "inferiores-tronco",
    grupo: "gluteos",
    foco: "Glúteo máximo",
  },
  {
    id: "agachamento-sumo",
    nome: "Agachamento sumô",
    regiao: "inferiores-tronco",
    grupo: "gluteos",
    foco: "Glúteo máximo",
  },

  // =========================
  // PANTURRILHAS
  // =========================

  {
    id: "panturrilha-em-pe",
    nome: "Panturrilha em pé",
    regiao: "inferiores-tronco",
    grupo: "panturrilhas",
    foco: "Gastrocnêmio",
  },
  {
    id: "panturrilha-sentado",
    nome: "Panturrilha sentado",
    regiao: "inferiores-tronco",
    grupo: "panturrilhas",
    foco: "Sóleo",
  },
  {
    id: "panturrilha-leg-press",
    nome: "Panturrilha no leg press",
    regiao: "inferiores-tronco",
    grupo: "panturrilhas",
    foco: "Gastrocnêmio",
  },
  {
    id: "panturrilha-unilateral",
    nome: "Panturrilha unilateral",
    regiao: "inferiores-tronco",
    grupo: "panturrilhas",
    foco: "Gastrocnêmio",
  },

  // =========================
  // CORE
  // =========================

  {
    id: "abdominal-crunch",
    nome: "Abdominal crunch",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Reto abdominal",
  },
  {
    id: "abdominal-maquina",
    nome: "Abdominal na máquina",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Reto abdominal",
  },
  {
    id: "abdominal-polia",
    nome: "Abdominal na polia",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Reto abdominal",
  },
  {
    id: "elevacao-pernas",
    nome: "Elevação de pernas",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Reto abdominal",
  },
  {
    id: "elevacao-joelhos",
    nome: "Elevação de joelhos",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Reto abdominal",
  },
  {
    id: "prancha",
    nome: "Prancha",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Transverso do abdômen",
  },
  {
    id: "prancha-lateral",
    nome: "Prancha lateral",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Oblíquos",
  },
  {
    id: "abdominal-bicicleta",
    nome: "Abdominal bicicleta",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Oblíquos",
  },
  {
    id: "ab-wheel",
    nome: "Ab wheel",
    regiao: "inferiores-tronco",
    grupo: "core",
    foco: "Transverso do abdômen",
  },
];

window.CATALOGO_EXERCICIOS = CATALOGO_EXERCICIOS;
window.ESTRUTURA_MUSCULAR = ESTRUTURA_MUSCULAR;