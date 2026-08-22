window.ELEMENTOS = [
  {
    id: "na",
    nome: "Sódio",
    simbolo: "Na",
    numeroAtomico: 11,

    protons: 11,
    eletrons: 11,

    neutrons: 12,
    numeroMassa: 23,
    isotopoReferencia: "²³Na",

    camadas: [2, 8, 1],
    distribuicao: "2–8–1",
    configuracaoCondensada: "[Ne] 3s¹",

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
    ],

    estadosEletronicos: [
      {
        eletrons: 10,
        carga: 1,
        simbolo: "Na⁺",
        nome: "Cátion sódio",
        classificacao: "Cátion",
        camadas: [2, 8],
        distribuicao: "2–8",
        observacao: "O sódio perdeu 1 elétron. Como possui 11 prótons e 10 elétrons, sua carga resultante é +1."
      },
      {
        eletrons: 11,
        carga: 0,
        simbolo: "Na",
        nome: "Átomo neutro de sódio",
        classificacao: "Átomo neutro",
        camadas: [2, 8, 1],
        distribuicao: "2–8–1",
        observacao: "O número de prótons e elétrons é igual. Portanto, a carga elétrica resultante é zero."
      }
    ]
  },

  {
    id: "cl",
    nome: "Cloro",
    simbolo: "Cl",
    numeroAtomico: 17,

    // Para esta etapa, o Cloro é apenas o segundo elemento do teste de comparação.
    protons: 17,
    neutrons: 18,
    eletrons: 17,
    numeroMassa: 35,
    isotopoReferencia: "³⁵Cl",

    camadas: [2, 8, 7],
    distribuicao: "2–8–7",
    configuracaoCondensada: "[Ne] 3s² 3p⁵"
  }
];
