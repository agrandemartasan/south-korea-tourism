import { type LocalizedString } from "@/utils/localize";

export interface AlertItem {
  id: number;
  title: LocalizedString;
  bullets: LocalizedString[];
}

export const alertItems: AlertItem[] = [
  {
    id: 1,
    title: { pt: "Situação Atual no País", en: "Current Country Situation" },
    bullets: [
      {
        pt: "A Coreia do Sul mantém um **nível de segurança elevado**, com circulação normal em áreas urbanas e turísticas.",
        en: "South Korea maintains a **high security level**, with normal circulation in urban and tourist areas."
      },
      {
        pt: "Não há alertas gerais ativos, mas recomenda-se **atenção reforçada** em zonas muito movimentadas, especialmente durante fins de semana e feriados.",
        en: "There are no general active alerts, but **heightened attention** is recommended in very busy areas, especially during weekends and public holidays."
      },
      {
        pt: "As autoridades locais mantêm monitorização contínua.",
        en: "Local authorities maintain continuous monitoring."
      },
    ],
  },
  {
    id: 2,
    title: { pt: "Condições Meteorológicas Importantes", en: "Important Weather Conditions" },
    bullets: [
      {
        pt: "**Forte descida das temperaturas** prevista para os próximos dias, especialmente em Seul e Gangwon.",
        en: "**Sharp temperature drop** expected in the coming days, especially in Seoul and Gangwon."
      },
      {
        pt: "Possibilidade de **queda de neve leve** durante a noite. Recomenda-se **roupa térmica e atenção ao piso escorregadio** em zonas montanhosas.",
        en: "Possibility of **light snowfall** overnight. **Thermal clothing and caution on slippery ground** in mountainous areas is recommended."
      },
      {
        pt: "Alguns trilhos de montanha podem estar temporariamente fechados devido a **vento forte**.",
        en: "Some mountain trails may be temporarily closed due to **strong winds**."
      },
    ],
  },
  {
    id: 3,
    title: { pt: "Transportes Públicos", en: "Public Transport" },
    bullets: [
      {
        pt: "A **Linha 2 do metro de Seul** poderá ter **pequenos atrasos** devido a trabalhos noturnos de manutenção.",
        en: "**Seoul Metro Line 2** may have **minor delays** due to overnight maintenance works."
      },
      {
        pt: "Serviço KTX a funcionar normalmente, com pequenas alterações horárias no fim de semana.",
        en: "KTX service operating normally, with minor timetable changes at the weekend."
      },
      {
        pt: "Algumas linhas de autocarro regionais entre Busan e Gyeongju poderão operar com horários reduzidos.",
        en: "Some regional bus lines between Busan and Gyeongju may operate with reduced schedules."
      },
    ],
  },
  {
    id: 4,
    title: { pt: "Avisos Governamentais", en: "Government Warnings" },
    bullets: [
      {
        pt: "As autoridades coreanas recomendam que turistas se mantenham atentos aos avisos locais durante eventos de grande dimensão ou festividades.",
        en: "Korean authorities recommend that tourists remain attentive to local warnings during large-scale events or festivities."
      },
      {
        pt: "É aconselhável registar o itinerário na aplicação oficial **Safe Korea**, que envia **notificações automáticas em caso de emergência** meteorológica ou sísmica.",
        en: "It is advisable to register your itinerary on the official **Safe Korea** app, which sends **automatic notifications in case of weather or seismic emergencies**."
      },
      {
        pt: "Não há restrições de circulação para viajantes.",
        en: "There are no movement restrictions for travellers."
      },
    ],
  },
  {
    id: 5,
    title: { pt: "Notas Sanitárias e de Saúde Pública", en: "Health and Public Health Notes" },
    bullets: [
      {
        pt: "Aumento sazonal de casos de **gripe** durante o inverno; recomendado **uso de máscara em espaços muito lotados**.",
        en: "Seasonal increase in **flu** cases during winter; **wearing a mask in very crowded spaces** is recommended."
      },
      {
        pt: "Água potável disponível em redes públicas urbanas.",
        en: "Drinking water available in urban public networks."
      },
      {
        pt: "Recomenda-se **seguro de viagem** que cubra cuidados médicos.",
        en: "**Travel insurance** covering medical care is recommended."
      },
      {
        pt: "Nenhum requisito especial de vacinação para entrada no país.",
        en: "No special vaccination requirements to enter the country."
      },
    ],
  },
];
