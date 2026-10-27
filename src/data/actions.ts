export type Action = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  items: { title: string; text: string }[];
};

export const actions: Action[] = [
  {
    slug: 'entreprises',
    title: 'En entreprise',
    short: 'Team building, formation des managers, tables rondes, plans anti-sédentarité.',
    lead: 'Recréer du lien, du mouvement et de l’écoute au travail.',
    items: [
      { title: 'Team building', text: 'Sessions de cohésion d’équipe d’environ 1 h 30, fondées sur l’activité physique et la coopération.' },
      { title: 'Formation des encadrants', text: 'Interventions auprès des managers et responsables hiérarchiques.' },
      { title: 'Tables rondes', text: 'Temps d’échange avec l’ensemble des salariés, de 1 h 30 à 2 h.' },
      { title: 'Plan anti-sédentarité', text: 'Prévention des troubles musculo-squelettiques et lutte contre la sédentarité au bureau.' },
    ],
  },
  {
    slug: 'ecoles',
    title: 'Écoles & centres sociaux',
    short: 'Interventions auprès des élèves, jeux d’équipe et tournois sur le thème de la paix.',
    lead: 'Soutenir l’équilibre des jeunes par la pratique sportive.',
    items: [
      { title: 'Auprès des élèves et des jeunes', text: 'Cohésion et bien-être sportif, questions-réponses, jeux d’équipe avec points ou objectifs, prévention des mauvais comportements.' },
      { title: 'Auprès des équipes éducatives', text: 'Échanges avec les enseignants et les professionnels des centres sociaux (éducateurs spécialisés, psychologues…) pour repenser la place du sport dans la vie des jeunes.' },
      { title: 'Entre établissements', text: 'Rencontres sportives inter-établissements et journées de tournois sur le thème de la paix.' },
    ],
  },
  {
    slug: 'clubs',
    title: 'Clubs & associations sportives',
    short: 'Accompagnement des éducateurs et activités d’entraide pour les jeunes joueurs.',
    lead: 'Repenser l’équilibre entre jeu et compétition pour renforcer la cohésion des groupes.',
    items: [
      { title: 'Auprès des éducateurs sportifs', text: 'Accompagnement vers une communication plus saine et aide à la mise en pratique dans leur groupe.' },
      { title: 'Auprès des jeunes joueurs', text: 'Interventions d’une heure fondées sur l’entraide et la création de liens, avec retour d’expérience.' },
      { title: 'Sur mesure', text: 'Un panel d’activités et des programmes adaptés aux besoins de chaque club ou association.' },
    ],
  },
];
