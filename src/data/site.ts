// Réglages généraux du site : à mettre à jour ici, pas dans les pages.
export const site = {
  name: 'Sport Paix Santé',
  shortName: 'SPS',
  tagline: "L'éducation pour la paix au cœur de nos actions",
  description:
    "Sport Paix Santé (SPS) est une association loi 1901 basée à Toulouse qui relie sport et santé et promeut l'éducation à une culture de paix, en entreprise, à l'école et dans les clubs.",
  email: 'contact.sportpaixsante@gmail.com',
  city: 'Toulouse',
  foundingYear: 2024,
  // Lien du formulaire de don HelloAsso (page « widget » de la campagne).
  // Laisser vide tant que la campagne n'est pas créée : la page don affiche alors un lien e-mail.
  helloAssoWidgetUrl: '',
  helloAssoPageUrl: '',
  linkedin: '',
  legal: {
    siren: '995 325 123',
    rna: 'W313039318',
    // Adresse du siège : à confirmer avant publication (adresse personnelle d'un membre).
    address: '',
    publicationDirector: '',
    // Hébergeur du site : nom, adresse et téléphone, obligatoires dans les mentions légales.
    host: '',
  },
};

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/nos-actions', label: 'Nos actions' },
  { href: '/notre-histoire', label: "L'association" },
  { href: '/contact', label: 'Contact' },
];
