export const categories = [
  {
    name: "Animaux vivant",
    slug: "animaux-vivant",
    description:
      "Découvrez notre sélection d'animaux vivants pour votre exploitation agricole.",
  },
  {
    name: "Refroidissement et transport du lait",
    slug: "refroidissement-transport-lait",
    description:
      "Équipements de pointe pour le refroidissement et le transport du lait.",
  },
  {
    name: "Système de traite",
    slug: "systeme-traite",
    description: "Solutions innovantes pour optimiser votre système de traite.",
  },
  {
    name: "Equipement d'élevage",
    slug: "equipement-elevage",
    description:
      "Matériel d'élevage de qualité pour le confort et la productivité de vos animaux.",
  },
];

export const products = [
  {
    name: "Montbéliarde",
    slug: "montbeliarde",
    category: "animaux-vivant",
    shortDescription:
      "Race bovine française reconnue pour ses qualités laitières et sa viande.",
    description: `La montbéliarde est une race bovine française issue du métissage de races autochtones franc-comtoises et de race venue de Suisse. C'est une race du rameau Pie rouge des montagnes, issue de métissage entre variétés franc-comtoises et suisses entre les xviiie et xixe siècles.

C'est une race mixte : elle est une laitière reconnue, appréciée notamment pour la fabrication de fromages célèbres (comté, morbier, bleu de Gex ou encore Mont d'Or). Elle doit sa place de première laitière dans les appellations d'origine protégées françaises, à l'introduction dans les années 1990 de clause d'exclusion raciale visant les races dites étrangères comme la prim'Holstein, la jersiaise ou la brune des Alpes. Elle produit conjointement une viande de qualité.`,
    image: "/images/montbeliarde.jpg",
  },
  {
    name: "MP Vertitank",
    slug: "mp-vertitank",
    category: "refroidissement-transport-lait",
    shortDescription:
      "Tank à lait de type ouvert pour un refroidissement efficace.",
    description:
      "Le MP Vertitank est un tank à lait de type ouvert conçu pour un refroidissement rapide et efficace du lait. Il offre une grande capacité de stockage et une facilité d'entretien.",
    image: "/images/mp-vertitank.jpg",
  },
  {
    name: "Machine à traire",
    slug: "machine-a-traire",
    category: "systeme-traite",
    shortDescription:
      "Machine à traire performante pour une traite efficace et confortable.",
    description:
      "Notre machine à traire est conçue pour offrir une expérience de traite efficace et confortable, tant pour l'éleveur que pour les vaches.",
    image: "/images/machine-a-traire.jpg",
    technicalInfo: {
      "Quantité de récipients": "1",
      "Capacité du Récipient": "40 Lt",
      "Nombre de travailleurs": "1 personne",
      "Nombre de vaches a traire": "2",
      "Capacité de la Pompe à Vide": "200lt/min (Pompe à Huile)",
      "Unité de Traite": "2 Unités",
      "Capacité du Collecteur de Lait": "300 cc",
    },
  },
  {
    name: "Cornadis",
    slug: "cornadis",
    category: "equipement-elevage",
    shortDescription:
      "Système de contention sécurisé et confortable pour vos bovins.",
    description:
      "Le cornadis est un équipement essentiel pour la gestion et le confort de votre troupeau. Il permet une contention sécurisée des animaux tout en facilitant les interventions de l'éleveur.",
    image: "/images/cornadis.jpg",
    technicalInfo: {
      Matériau: "tubes galvanisé à chaud",
      "Mécanisme de verrouillage":
        "surfaces de travail recouvertes de plastique",
      Taille: "largeur 700 mm, hauteur 1175 mm",
      "Diamètres des tubes":
        "tube de support principale diamètre 60 mm, les autres tubes ont un diamètre de 42 mm et une épaisseur de paroi de 2,5 mm",
      "Verrouillage individuel": "Oui",
      "Déplacement du cou": "Oui",
    },
  },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((product) => product.category === categorySlug);
}

export function getProduct(categorySlug, productSlug) {
  return products.find(
    (product) =>
      product.category === categorySlug && product.slug === productSlug
  );
}
