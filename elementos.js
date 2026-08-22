window.ELEMENTOS = [
  {
    id: "na",
    nome: "Sódio",
    simbolo: "Na",
    numeroAtomico: 11,

    protons: 11,
    eletrons: 11,

    // Isótopo inicial:
    neutrons: 12,
    numeroMassa: 23,
    isotopoReferencia: "²³Na",

    camadas: [2, 8, 1],
    distribuicao: "2–8–1",
    configuracaoCondensada: "[Ne] 3s¹",

    // Nesta primeira etapa do laboratório de isótopos,
    // o usuário só pode navegar entre estes três casos reais.
    isotopos: [
      {
        massa: 22,
        neutrons: 11,
        simboloNuclear: "²²Na",
        nome: "Sódio-22",
        estabilidade: "Radioativo",
        meiaVida: "2,602 anos",
        observacao: "Radioisótopo do sódio."
      },
      {
        massa: 23,
        neutrons: 12,
        simboloNuclear: "²³Na",
        nome: "Sódio-23",
        estabilidade: "Estável",
        meiaVida: "Estável — não possui meia-vida radioativa",
        observacao: "É o isótopo estável do sódio."
      },
      {
        massa: 24,
        neutrons: 13,
        simboloNuclear: "²⁴Na",
        nome: "Sódio-24",
        estabilidade: "Radioativo",
        meiaVida: "aprox. 15 horas",
        observacao: "Radioisótopo de meia-vida curta."
      }
    ]
  }
];
