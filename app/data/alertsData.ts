export interface AlertItem {
  id: number;
  title: string;
  bullets: string[];
}

export const alertItems: AlertItem[] = [
  {
    id: 1,
    title: "Situação Atual no País",
    bullets: [
      "A Coreia do Sul mantém um **nível de segurança elevado**, com circulação normal em áreas urbanas e turísticas.",
      "Não há alertas gerais ativos, mas recomenda-se **atenção reforçada** em zonas muito movimentadas, especialmente durante fins de semana e feriados.",
      "As autoridades locais mantêm monitorização contínua.",
    ],
  },
  {
    id: 2,
    title: "Condições Meteorológicas Importantes",
    bullets: [
      "**Forte descida das temperaturas** prevista para os próximos dias, especialmente em Seul e Gangwon.",
      "Possibilidade de **queda de neve leve** durante a noite. Recomenda-se **roupa térmica e atenção ao piso escorregadio** em zonas montanhosas.",
      "Alguns trilhos de montanha podem estar temporariamente fechados devido a **vento forte**.",
    ],
  },
  {
    id: 3,
    title: "Transportes Públicos",
    bullets: [
      "A **Linha 2 do metro de Seul** poderá ter **pequenos atrasos** devido a trabalhos noturnos de manutenção.",
      "Serviço KTX a funcionar normalmente, com pequenas alterações horárias no fim de semana.",
      "Algumas linhas de autocarro regionais entre Busan e Gyeongju poderão operar com horários reduzidos.",
    ],
  },
  {
    id: 4,
    title: "Avisos Governamentais",
    bullets: [
      "As autoridades coreanas recomendam que turistas se mantenham atentos aos avisos locais durante eventos de grande dimensão ou festividades.",
      "É aconselhável registar o itinerário na aplicação oficial **Safe Korea**, que envia **notificações automáticas em caso de emergência** meteorológica ou sísmica.",
      "Não há restrições de circulação para viajantes.",
    ],
  },
  {
    id: 5,
    title: "Notas Sanitárias e de Saúde Pública",
    bullets: [
      "Aumento sazonal de casos de **gripe** durante o inverno; recomendado **uso de máscara em espaços muito lotados**.",
      "Água potável disponível em redes públicas urbanas.",
      "Recomenda-se **seguro de viagem** que cubra cuidados médicos.",
      "Nenhum requisito especial de vacinação para entrada no país.",
    ],
  },
];
