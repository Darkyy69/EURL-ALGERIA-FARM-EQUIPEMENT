// export interface ProductData {
//   name: string;
//   category: string;
//   description: string;
//   images: string[];
//   benefits?: string[];
//   technicalSpecs?: { [key: string]: string };
//   installationGuide?: string[];
// }

const productsData = {
  "animaux-vivant": {
    montbeliarde: {
      name: "Montbéliarde",
      link: "montbeliarde",
      category: "Animaux vivant",
      description:
        "La montbéliarde est une race bovine française issue du métissage de races autochtones franc-comtoises et de race venue de Suisse. C'est une race du rameau Pie rouge des montagnes, issue de métissage entre variétés franc-comtoises et suisses entre les xviiie et xixe siècles. C'est une race mixte : elle est une laitière reconnue, appréciée notamment pour la fabrication de fromages célèbres (comté, morbier, bleu de Gex ou encore Mont d'Or). Elle doit sa place de première laitière dans les appellations d'origine protégées françaises, à l'introduction dans les années 1990 de clause d'exclusion raciale visant les races dites étrangères comme la prim'Holstein, la jersiaise ou la brune des Alpes. Elle produit conjointement une viande de qualité.",
      images: [
        "/images/produits/animaux-vivant/montbeliarde/montbeliarde-1.jpg",
        "/images/produits/animaux-vivant/montbeliarde/montbeliarde-2.jpg",
        "/images/produits/animaux-vivant/montbeliarde/montbeliarde-3.jpeg",
        "/images/produits/animaux-vivant/montbeliarde/montbeliarde-4.jpg",
        "/images/produits/animaux-vivant/montbeliarde/montbeliarde-5.jpeg",
      ],
      benefits: [
        "Excellente production laitière",
        "Adaptée à la fabrication de fromages AOP",
        "Bonne production de viande",
        "Rusticité et longévité",
        "Facilité de vêlage",
      ],
    },
    "veau-engraissement": {
      name: "Veau d'engraissement",
      link: "veau-engraissement",
      category: "Animaux vivant",
      description:
        "Les vaches à viande sont des bovins élevés pour la production de viande, par opposition aux vaches laitières, utilisés pour la production laitière. La viande des bovins matures ou presque matures est surtout connue sous le nom de bœuf. Dans la production de viande bovine, il y a trois étapes principales: les opérations vache-veau, le fond et les opérations en parc d'engraissement. Le cycle de production des animaux commence dans les exploitations vache-veau; cette opération est conçue spécifiquement pour élever des vaches pour leur progéniture. De là, les veaux sont mis en arrière-plan pour un parc d'engraissement. Les animaux élevés spécifiquement pour le parc d'engraissement sont appelés bovins d'engraissement, le but de ces animaux étant d'être engraissés.",
      images: [
        "/images/produits/animaux-vivant/veau-engraissement/veau-engraissement-1.jpg",
        "/images/produits/animaux-vivant/veau-engraissement/veau-engraissement-2.jpg",
        "/images/produits/animaux-vivant/veau-engraissement/veau-engraissement-3.jpg",
      ],
      benefits: [
        "Production de viande de qualité",
        "Croissance rapide",
        "Rendement élevé en carcasse",
        "Adaptabilité à différents systèmes d'élevage",
      ],
    },
  },
  "refroidissement-transport-lait": {
    "mp-vertitank": {
      name: "MP Vertitank",
      link: "mp-vertitank",
      category: "Refroidissement et transport du lait",
      subTitle: "(MPV 50 - 2 500 l)",
      description: `La ligne MP Vertitank propose des cuves de 13 capacités différentes, couvrant toute la gamme de 50 l à 2 500 l, pour répondre aux besoins de toutes les exploitations laitières et des fromageries.

Les caractéristiques communes de tous les produits de la ligne MP Vertitank sont le refroidissement stable et l’économie maximale d’énergie.

Tous nos tanks à lait sont construits à base de matériaux de qualité alimentaire et sont conformes aux normes européennes et américaines, ISO5708 / EN13732 / 3A.

Ainsi, le refroidissement a lieu dans les délais propices pour éviter le développement de bactéries et l’augmentation de l’acidité (pH) du lait. L’agitation du lait est effectuée par un spécial à pales et réducteur au nombre de tours adéquats afin d’obtenir l’homogénéisation adéquate des lipides et un refroidissement uniforme, dans tout le volume du lait, sans formation de mousse.

La conception minutieuse des cuves assure pour l’exploitation laitière des avantages supplémentaires tels que l'économie d'espace, la simplicité d'opération, la facilité de déplacement, d'installation, de réparation et d'entretien.

Les dispositifs frigorifiques et les capacités des cuves ont été étudiées afin de répondre aux besoins d’exploitations d’élevage d’ovins et caprins et de petites exploitations d’élevage de vaches.

Les tanks à lait MP Vertitank ont prouvé leur valeur dans des milliers d’exploitations d’élevage et d’exploitations laitières, dans plus de 81 pays.`,
      images: [
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/01.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/02.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/03.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/05.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/06.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/07.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/08.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/09.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/10.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/11.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/12.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/13.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/14.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/15.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/16.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/17.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/18.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/19.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/20.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-vertitank/22.jpg",
      ],
      benefits: [
        "Refroidissement rapide et efficace",
        "Grande capacité de stockage",
        "Facilité de nettoyage",
        "Contrôle précis de la température",
      ],
      technicalSpecs: {
        Type: "Tank à lait ouvert",
        Capacité: "Variable selon les modèles",
        Matériau: "Acier inoxydable de qualité alimentaire",
        "Système de refroidissement": "Compresseur haute performance",
      },
      dimensionDescription: {
        small:
          "Les tanks à lait de 50 à 300 l conviennent principalement aux exploitations d'élevage de chèvres et de brebis et desservent la collecte du lait de 2 ou 4 traites.",
        large:
          "Les tanks à lait de 400 à 2 500 l conviennent aux petites salles de traite de vaches et aux grandes salles de traite de chèvres et de brebis.",
      },
      dimensionImages: {
        small:
          "/images/produits/refroidissement-transport-du-lait/mp-vertitank/vertitank_50-300.jpg",
        large:
          "/images/produits/refroidissement-transport-du-lait/mp-vertitank/vertitank_400-2500.jpg",
      },
      dimensions: {
        small: [
          {
            model: "MPV 50",
            A: 560,
            A1: 280,
            A2: 365,
            B: 520,
            B1: 280,
            B2: 365,
            H: 1350,
            h1: 820,
            h2: 1050,
            h3: 440,
          },
          {
            model: "MPV 100",
            A: 780,
            A1: 330,
            A2: 400,
            B: 680,
            B1: 410,
            B2: 500,
            H: 1660,
            h1: 980,
            h2: 1190,
            h3: 420,
          },
          {
            model: "MPV 200",
            A: 1030,
            A1: 530,
            A2: 610,
            B: 890,
            B1: 530,
            B2: 610,
            H: 1520,
            h1: 990,
            h2: 1220,
            h3: 420,
          },
          {
            model: "MPV 300",
            A: 1130,
            A1: 530,
            A2: 620,
            B: 990,
            B1: 530,
            B2: 610,
            H: 1700,
            h1: 1030,
            h2: 1250,
            h3: 420,
          },
        ],
        large: [
          {
            model: "MPV 400",
            A: 1600,
            A1: 950,
            A2: "-",
            B: 1090,
            B1: 670,
            H: 1445,
            h1: 1050,
            h2: 830,
            h3: 685,
            h4: 180,
          },
          {
            model: "MPV 500",
            A: 1600,
            A1: 950,
            A2: "-",
            B: 1090,
            B1: 670,
            H: 1620,
            h1: 1190,
            h2: 965,
            h3: 680,
            h4: 180,
          },
          {
            model: "MPV 600",
            A: 1600,
            A1: 950,
            A2: "-",
            B: 1090,
            B1: 670,
            H: 1765,
            h1: 1345,
            h2: 1120,
            h3: 750,
            h4: 180,
          },
          {
            model: "MPV 800",
            A: 1770,
            A1: 1310,
            A2: "-",
            B: 1290,
            B1: 925,
            H: 1910,
            h1: 1265,
            h2: 1040,
            h3: 685,
            h4: 192,
          },
          {
            model: "MPV 1000",
            A: 2050,
            A1: 1320,
            A2: 450,
            B: 1495,
            B1: 910,
            H: 1925,
            h1: 1250,
            h2: 1010,
            h3: 840,
            h4: 192,
          },
          {
            model: "MPV 1250",
            A: 2050,
            A1: 1320,
            A2: 450,
            B: 1495,
            B1: 940,
            H: 2090,
            h1: 1495,
            h2: 1150,
            h3: 840,
            h4: 192,
          },
          {
            model: "MPV 1500",
            A: 2275,
            A1: 1560,
            A2: 590,
            B: 1495,
            B1: 1140,
            H: 2200,
            h1: 1645,
            h2: 1304,
            h3: 818,
            h4: 192,
          },
          {
            model: "MPV 2000",
            A: 2320,
            A1: 1490,
            A2: 680,
            B: 1840,
            B1: 1130,
            H: 2200,
            h1: 1510,
            h2: 1200,
            h3: 880,
            h4: 192,
          },
          {
            model: "MPV 2500",
            A: 2520,
            A1: 1490,
            A2: 680,
            B: 1840,
            B1: 1130,
            H: 2390,
            h1: 1700,
            h2: 1390,
            h3: 1070,
            h4: 192,
          },
        ],
      },
      characteristics: {
        "Groupe frigorifique":
          "Le calcul minutieux de la puissance frigorifique de chaque tank permet de refroidir le lait dans le délai adéquat et selon les besoins du producteur. Les modèles de la série MP Veritank sont proposés en versions 2 ou traites, températures ambiantes normales ou élevées (tropical et supertropical), équipés de compresseurs de construction européenne ou américaine des maisons Tecumseh, Maneurop, Copeland ou Embraco, selon les exigences. Tous les groupes frigorifiques utilisent du fréon R404A, respectueux de l'environnement. Pour assurer le meilleur rendement et la protection, ils sont équipés d'une vanne électromagnétique et de pressostats séparés de pression haute et basse, d'un pressostat de commande de second ventilateur et de clapets anti-retour.",

        Évaporateur:
          "Les tanks sont équipés d'un évaporateur à expansion directe, soudé par technologie laser de pointe, et d'un fond doté de l'inclinaison adéquate pour assurer la vidange complète, conformément aux normes internationales (ISO 5708). L'installation de l'évaporateur dans la cuve, la conception, le choix des matériaux adéquats et la disposition des soudures en diamant (diamond weld pattern) assurent la dissipation immédiate de la chaleur du lait tout en évitant la formation de glace lorsque les quantités de lait sont réduites, en réduisant au minimum les pertes d'énergie et en réduisant à zéro les taux de fuites de liquide réfrigérant.",

        "Isolation thermique":
          "L'isolation du tank par mousse de polyuréthane bi-composant, respectueuse de l'environnement, permet de conserver le lait à la température souhaitée tout en assurant la consommation d'énergie la plus faible possible. L'épaisseur de l'isolation est de 45 mm au périmètre et d'environ 90 mm dans la partie inférieure du tank.",

        "Jauge à mesurer":
          "Afin de vérifier le niveau du lait et d'en calculer la quantité, tous les modèles de la ligne MP Vertitank sont équipés d'une jauge à mesurer inoxydable et d'un table de conversion en litres ou en galons.",

        "Nettoyage facile":
          "Le moteur, le panneau de commande électronique ainsi que la poignée de levage du capot du tank (modèles de plus 100 l) sont surélevés, pour permettre le nettoyage complet du capot et d'empêcher l'accumulation de saletés.",

        "Panneau de commande électronique":
          "Le panneau de commande électronique de réfrigération et d'agitation du lait dispose d'un écran bien lisible à 3 chiffres et permet d'opérer le tank à lait en toute facilité, en appuyant sur un seul bouton. Il est conçu sur la base de la commande électronique de Dixell – adaptée aux systèmes de réfrigération du lait – aux paramètres entièrement réglables et dotée d'une sonde de température (NTC) d'étanchéité IP68 et dont la résistance atteint les 110°C. Le panneau est certifié étanche selon IP65 et les circuits électroniques sont protégés contre l'infiltration d'eau ou de vapeurs d'eau.",

        "Capot perforé du groupe frigorifique":
          "Le capot perforé du groupe frigorifique empêche l'entrée de petits animaux et de saletés dans l'espace du groupe frigorifique du tank, pour en assurer la bonne opération. La facilité de retrait permet d'avoir directement accès au groupe frigorifique en vue des tâches d'entretien et de réparation. Un détail, et non des moindres : le support métallique perforé du tank à lait fait l'objet d'un brevet de la société (n° 1004080).",

        "Ressorts d'arrêt":
          "Afin de relever et de maintenir le capot du tank en position ouverte, celui-ci est équipé de ressorts inoxydables (1 à 4 ressorts, selon le modèle) qui offrent une résistance supérieure aux sollicitations de l'utilisation quotidienne (modèles de plus de 200 l).",

        "Entrée de lait": "", // This section was empty in the image
      },
    },
    "mp-powertank": {
      name: "MP Powertank",
      link: "mp-powertank",
      category: "Refroidissement et transport du lait",
      subTitle: "(MPP 1 500 - 14 000 l & MPPO 10 000 - 20 000 l)",
      description: `La ligne de tanks à lait MP Powertank est la solution idéale pour la réfrigération du lait d’exploitations laitières moyennes et grandes. Il s’agit de tanks à lait inoxydables de type horizontal équipés de trous d’homme et de système automatisé de lavage et de désinfection après chaque vidange.

Les tanks MP Powertank sont proposés en 18 capacités, de type rond, de 1 500 à 14 000 l et, de type elliptique, de 10 000 à 20 000 l. Tous les modèles sont construits de manière à ce que même les petites quantités de lait sont agitées afin d’empêcher la formation de glace.`,
      images: [
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/01.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/02.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/03.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/05.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/06.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/07.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/08.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/09.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/10.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/11.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/12.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/13.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/14.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/15.jpg",
        "/images/produits/refroidissement-transport-du-lait/mp-powertank/16.jpg",
      ],
      benefits: [
        "Système fermé pour une meilleure hygiène",
        "Efficacité énergétique améliorée",
        "Contrôle automatisé de la température",
        "Capacité de stockage optimisée",
      ],
      characteristics: {
        "Groupe frigorifique":
          "Les modèles de la ligne sont proposés en versions 2, 4 ou 6 traites et peuvent être équipés de 1, 2 ou 4 groupes frigorifiques qui offrent fiabilité et réfrigération puissante. Pour les modèles allant jusqu'à 5 000 l, il est possible d'installer le groupe frigorifique sur le tank. Ils sont proposés avec compresseurs Tecumseh, Maneurop ou Copeland. En vue de leur protection et pour un meilleur rendement, le circuit inclut : vanne électromagnétique, pressostats séparés pour la commande de pression basse et élevée du circuit de réfrigération, pressostat de commande de l'opération du second ventilateur, bouteille accumulatrice de fréon (receiver), soupape de sécurité de la bouteille, valve d'expansion thermique de puissance adéquate, interrupteur thermomagnétiques séparés pour le circuit de puissance du circuit de chacun des compresseurs et régulateur de tension.",
        Isolation:
          "Tous les modèles sont intégralement construits en acier inoxydable AISI 304 et disposent d'une excellente isolation thermique en mousse de polyuréthane qui assure que quelques minutes d'opération du dispositif frigorifique suffisent pour conserver le lait pré-refroidi.",
        "Égalisateur de pression externe, inoxydable":
          "Le filtre inoxydable des tanks empêche que l'air soit piégé à l'intérieur de la cuve au moment du remplissage et en facilité la vidange. Selon la taille du tank il y a un à trois filtres qui sont très faciles à retirer.",
        "Jauge à mesurer le volume":
          "Tous les modèles MP Powertank sont accompagnés d'un jauge à mesurer le volume, inoxydable, et d'un tableau de conversion en litres, pour calculer facilement la quantité de lait contenue.",
        "Moteur d'agitation":
          "Les tanks à lait MP Powertank sont équipés d'un puissant moteur de la maison française Sirem, tournant à 21-25 tours /minute, disposé sur un socle surélevé pour faciliter le nettoyage. Pour assurer l'agitation adéquate de la quantité de lait, les tanks de 8 000 à 20 000 l sont équipés de deux ou trois moteurs.",
        "Trou d'homme":
          "Le trou d'homme inoxydable des tanks offre un niveau supérieur d'étanchéité, sans application de bride. Le diamètre est de 400 mm, sur les modèles allant jusqu'à 3 000 l, et de 500 mm sur les modèles de plus de 4 000 l. Il est entièrement tournant et la conception intelligente permet de le maintenir ouvert.",
        Échelle:
          "Tous les modèles de plus 1 500 l sont équipés d'une échelle inox à marches antidérapantes afin de surveiller le contenu en lait via la trou d'homme dans la partie supérieure du tank.",
        "Entrée du lait":
          "Les tanks à lait MP Powertank disposent d'1 ou 2 entrées de lait, de 76 mm de diamètre. Afin de protéger le contenu du tank, elles sont fermées à l'aide d'un bouchon inox.",
        "Sortie du lait":
          "Sur les modèles allant jusqu'à 6 000 l, la sortie du lait est assurée par une vanne papillon inox de type DN80 ou SMS51. Pour les plus grands modèles, il a été choisi la vanne de type DN80 ou SMS76. Dans tous les cas, il est possible d'adapter la vanne aux besoins personnalisés.",
        "Capteur de température":
          "L'emplacement du capteur de température a été minutieusement choisi afin d'en permettre le remplacement facile, en cas de panne.",
        "Pieds réglables inoxydables":
          "Les tanks MP Powertank disposent de 4 à 12 pieds, selon le modèle. Tous les pieds sont réglables en hauteur, afin d'obtenir l'alignement parfait, y compris sur des sols à dénivellation.",
        "Vanne autonettoyante (optionnel)":
          "Pour faciliter l'utilisation du système de lavage des cuves, il est possible d'installer une vanne de type autonettoyant.",
        "Dispositif de jaugeage électronique (optionnel)":
          "Afin d'assurer le contrôle fiable de la quantité de lait se trouvant dans la cuve, il est possible d'équiper le tank d'un dispositif de jaugeage électronique, de précision supérieure, avec capteur-flotteur. Le panneau du système dispose d'un grand écran, bien lisible, à 5 chiffres, et de la possibilité d'afficher la quantité de lait en kg ou en litres.",
      },
      technicalSpecs: {
        Type: "Tank à lait fermé",
        Capacité: "Variable selon les modèles",
        Matériau: "Acier inoxydable de qualité alimentaire",
        "Système de refroidissement": "Technologie de refroidissement avancée",
      },
      dimensionDescription: {
        round:
          "Les tanks à lait de type rond MPP sont proposés en 12 modèles différents, dont les capacités vont de 1 500 à 14 000 l, dotés d'un ou deux groupes frigorifiques afin de répondre aux besoins de 2 à 6 traites.",
        elliptical:
          "Les tanks à lait de type elliptique MPP Oval sont proposés en 6 modèles différents dont la capacité va de 10000 à 20000 l. Ils sont indiqués pour de grandes exploitations laitières car, la grande surface de l'évaporateur permet de refroidir rapidement de grandes quantités de lait. En même temps, ils sont faciles à installer dans des espaces dont la hauteur est limitée. Selon les besoins, ils peuvent être équipés de plus de deux groupes frigorifiques.",
      },
      dimensionImages: {
        round:
          "/images/produits/refroidissement-transport-du-lait/mp-powertank/powertank_1000-20000.jpg",
        elliptical:
          "/images/produits/refroidissement-transport-du-lait/mp-powertank/powertank_10000-20000.jpg",
      },
      dimensions: {
        round: [
          {
            model: "MPP 1500",
            W: 1350,
            W1: 800,
            H2: 1590,
            H3: 1830,
            Hm: 620,
            H: 2290,
            L: 1550,
            L1: 950,
            A: 300,
            Legs: 4,
            Agitators: 1,
          },
          {
            model: "MPP 2000",
            W: 1350,
            W1: 800,
            H2: 1590,
            H3: 1830,
            Hm: 620,
            H: 2290,
            L: 2020,
            L1: 1010,
            A: 505,
            Legs: 4,
            Agitators: 1,
          },
          {
            model: "MPP 2500",
            W: 1350,
            W1: 800,
            H2: 1590,
            H3: 1780,
            Hm: 620,
            H: 2290,
            L: 2350,
            L1: 1450,
            A: 450,
            Legs: 4,
            Agitators: 1,
          },
          {
            model: "MPP 3000",
            W: 1350,
            W1: 800,
            H2: 1590,
            H3: 1780,
            Hm: 620,
            H: 2290,
            L: 2900,
            L1: 1400,
            A: 750,
            Legs: 4,
            Agitators: 1,
          },
          {
            model: "MPP 3500",
            W: 1350,
            W1: 800,
            H2: 1590,
            H3: 1780,
            Hm: 620,
            H: 2290,
            L: 3400,
            L1: 975,
            A: 725,
            Legs: 6,
            Agitators: 1,
          },
          {
            model: "MPP 4000",
            W: 1680,
            W1: 990,
            H2: 1870,
            H3: 2055,
            Hm: 720,
            H: 2520,
            L: 2370,
            L1: 1400,
            A: 485,
            Legs: 4,
            Agitators: 1,
          },
          {
            model: "MPP 5000",
            W: 1680,
            W1: 990,
            H2: 1870,
            H3: 2055,
            Hm: 720,
            H: 2520,
            L: 2900,
            L1: 1400,
            A: 750,
            Legs: 4,
            Agitators: 1,
          },
          {
            model: "MPP 6000",
            W: 1680,
            W1: 990,
            H2: 1870,
            H3: 2055,
            Hm: 720,
            H: 2520,
            L: 3500,
            L1: 1400,
            A: 350,
            Legs: 6,
            Agitators: 1,
          },
          {
            model: "MPP 8000",
            W: 1990,
            W1: 1090,
            H2: 2130,
            H3: 2315,
            Hm: 720,
            H: 2990,
            L: 3341,
            L1: 1200,
            A: 470,
            Legs: 6,
            Agitators: 2,
          },
          {
            model: "MPP 10000",
            W: 1990,
            W1: 1090,
            H2: 2130,
            H3: 2315,
            Hm: 720,
            H: 2990,
            L: 4160,
            L1: 1600,
            A: 480,
            Legs: 6,
            Agitators: 2,
          },
          {
            model: "MPP 12000",
            W: 2230,
            W1: 1450,
            H2: 2410,
            H3: 2595,
            Hm: 720,
            H: 3200,
            L: 3830,
            L1: 1340,
            A: 575,
            Legs: 6,
            Agitators: 2,
          },
          {
            model: "MPP 14000",
            W: 2230,
            W1: 1450,
            H2: 2410,
            H3: 2595,
            Hm: 720,
            H: 3200,
            L: 4500,
            L1: 1650,
            A: 600,
            Legs: 6,
            Agitators: 2,
          },
        ],
        elliptical: [
          {
            model: "MPPO 10000",
            W: 2300,
            W1: 1440,
            H1: 1900,
            H2: 2040,
            H3: 2230,
            Hm: 720,
            H: 2965,
            L: 3600,
            L1: 1400,
            A: 400,
            Legs: 6,
            Agitators: 2,
          },
          {
            model: "MPPO 12000",
            W: 2300,
            W1: 1440,
            H1: 1900,
            H2: 2040,
            H3: 2230,
            Hm: 720,
            H: 2965,
            L: 4430,
            L1: 1550,
            A: 665,
            Legs: 6,
            Agitators: 2,
          },
          {
            model: "MPPO 14000",
            W: 2300,
            W1: 1440,
            H1: 1900,
            H2: 2040,
            H3: 2230,
            Hm: 720,
            H: 2965,
            L: 4980,
            L1: 1550,
            A: 980,
            Legs: 6,
            Agitators: 2,
          },
          {
            model: "MPPO 16000",
            W: 2300,
            W1: 1440,
            H1: 1900,
            H2: 2040,
            H3: 2230,
            Hm: 720,
            H: 2965,
            L: 5790,
            L1: 1550,
            A: 700,
            Legs: 8,
            Agitators: 2,
          },
          {
            model: "MPPO 18000",
            W: 2300,
            W1: 1440,
            H1: 1900,
            H2: 2040,
            H3: 2230,
            Hm: 720,
            H: 2965,
            L: 6425,
            L1: 1500,
            A: 960,
            Legs: 8,
            Agitators: 3,
          },
          {
            model: "MPPO 20000",
            W: 2300,
            W1: 1440,
            H1: 1900,
            H2: 2040,
            H3: 2230,
            Hm: 720,
            H: 2965,
            L: 7200,
            L1: 1550,
            A: 500,
            Legs: 10,
            Agitators: 3,
          },
        ],
      },
    },
  },
  "systeme-traite": {
    "machine-a-traire": {
      name: "Machine à traire",
      link: "machine-a-traire",
      category: "Système de traite",
      description:
        "Notre machine à traire est conçue pour offrir une expérience de traite efficace et confortable, tant pour l'éleveur que pour les vaches.",
      images: ["/images/produits/systeme-de-traite/machine-a-traite.jpg"],
      benefits: [
        "Traite rapide et efficace",
        "Confort optimal pour les vaches",
        "Facilité d'utilisation pour l'éleveur",
        "Hygiène optimale",
      ],
      technicalSpecs: {
        "Quantité de récipients": "1",
        "Capacité du Récipient": "40 Lt",
        "Nombre de travailleurs": "1 personne",
        "Nombre de vaches a traire": "2",
        "Capacité de la Pompe à Vide": "200lt/min (Pompe à Huile)",
        "Unité de Traite": "2 Unités",
        "Capacité du Collecteur de Lait": "300 cc",
      },
    },
    "salle-de-traite-sortie-rapide-pour-vaches": {
      name: "Salle de traite Sortie rapide pour vaches",
      link: "salle-de-traite-sortie-rapide-pour-vaches",
      category: "Système de traite",
      description:
        "La salle de traite Sortie rapide pour vaches est conçue pour offrir une expérience de traite efficace et confortable, tant pour l'éleveur que pour les vaches.",
      images: ["/images/produits/systeme-de-traite/sortie-rapide-vache.jpg"],
      benefits: [
        "Traite rapide et efficace",
        "Confort optimal pour les vaches",
        "Facilité d'utilisation pour l'éleveur",
        "Hygiène optimale",
      ],
    },
    "salle-de-traite-en-epi-pour-vaches": {
      name: "Salle de traite en épi pour vaches",
      link: "salle-de-traite-en-epi-pour-vaches",
      category: "Système de traite",
      description:
        "La salle de traite en épi pour vaches est conçue pour offrir une expérience de traite efficace et confort pour les vaches.",
      images: ["/images/produits/systeme-de-traite/en-epie-vache.jpg"],
      benefits: [
        "Traite rapide et efficace",
        "Confort optimal pour les vaches",
        "Facilité d'utilisation pour l'éleveur",
        "Hygiène optimale",
      ],
    },
  },

  "equipement-elevage": {
    cornadis: {
      name: "Cornadis",
      link: "cornadis",
      category: "Equipement d'élevage",
      description:
        "Le cornadis est un équipement essentiel pour la gestion et le confort de votre troupeau. Il permet une contention sécurisée des animaux tout en facilitant les interventions de l'éleveur.",
      images: [
        "/images/produits/equipement-elevage/cornadis/cornadis-1.jpeg",
        "/images/produits/equipement-elevage/cornadis/cornadis-2.jpg",
      ],
      benefits: [
        "Contention sécurisée des animaux",
        "Facilite les interventions de l'éleveur",
        "Durabilité et robustesse",
        "Confort pour les animaux",
      ],
      technicalSpecs: {
        Matériau: "tubes galvanisé à chaud",
        "Mécanisme de verrouillage":
          "surfaces de travail recouvertes de plastique",
        Taille: "largeur 700 mm, hauteur 1175 mm",
        "Diamètres des tubes":
          "tube de support principale diamètre 60 mm, les autres tubes ont un diamètre de 42 mm et une épaisseur de paroi de 2,5 mm",
        "Verrouillage individuel": "Oui",
        "Mécanisme de verrouillage": "Oui",
        "Déplacement du cou": "Oui",
      },
    },
    "logettes-simples": {
      name: "Logettes Simples",
      link: "logettes-simples",
      category: "Equipement d'élevage",
      description:
        "Les Logettes sont conçues pour le confort de l'animal en tout aspect. Elles offrent aux animaux une existence confortable et un repos individuel en toute tranquillité. Elles permettent d'augmenter les activités de rumination des animaux.",
      images: [
        "/images/produits/equipement-elevage/logettes-simples/logettes-simples-1.jpg",
        "/images/produits/equipement-elevage/logettes-simples/logettes-simples-2.jpg",
        "/images/produits/equipement-elevage/logettes-simples/logettes-simples-3.jpg",
      ],
      benefits: [
        "Confort optimal pour les animaux",
        "Augmentation des activités de rumination",
        "Repos individuel en tranquillité",
        "Prévention des blessures",
      ],
      technicalSpecs: {
        Matière: "Tubes galvanisés à chaud",
        Dimensions: "1750 x 1200 mm",
        "Diamètre du tube": "60 mm",
        Epaisseur: "3 mm",
        Ajustement: "Pièce par pièce et ajustable",
        Installation: "Etablie sur un sol cimenté",
        Taille: "1750 x 1200 mm",
        "Barre au garrot": "galvanisée Ø 49 mm, longueur : 6 m",
      },
    },
    "logettes-double": {
      name: "Logettes Double",
      link: "logettes-double",
      category: "Equipement d'élevage",
      description: `Pour montage des épingles de logette en face à face.
Les Logette sont conçues pour le confort de l’animal en tout aspect.
Elles offrent aux animaux une existence confortable et un repos individuel en toute tranquillité. Elles permettent d’augmenter les activités de rumination des animaux.
Elles évitent également tout type de comportement de nature à les mettre en situation inconfortable ou pouvant les blesser. Elles possèdent une forme ergonomique convenable pour la rumination pendant les moments de repos.`,
      images: ["/images/produits/equipement-elevage/logettes-double/01.jpg"],
      benefits: [
        "Confort optimal pour les animaux",
        "Augmentation des activités de rumination",
        "Repos individuel en tranquillité",
        "Prévention des blessures",
      ],
      technicalSpecs: {
        Matière: "Tubes galvanisés à chaud",
        Dimensions: "1750 x 1200 mm",
        "Diamètre du tube": "60 mm",
        Epaisseur: "3 mm",
        Ajustement: "Pièce par pièce et ajustable",
        Installation: "Etablie sur un sol cimenté",
        Taille: "1750 x 1200 mm",
        "Barre au garrot": {
          Matériel: "galvanisée",
          Diamètre: "Ø 49 mm",
          Longueur: "6 m",
        },
      },
    },
    "racleur-en-v": {
      name: "Racleur en V",
      link: "racleur-en-v",
      category: "Equipement d'élevage",
      description: `Construction particulièrement robuste
Adaptation respectueuse des animaux pour une montée facile
Très bons résultats de nettoyage et ménageant la surface du chemin grâce aux lèvres en caoutchouc sous la glissière
Pousse dans une auge inférieure ou sur une zone de dégagement
Au retour, elle se replie pour ne pas emporter de déchets
Galvanisé à chaud
Certifié CE`,
      images: ["/images/produits/equipement-elevage/racleurs/v-1.jpg"],
    },

    "racleur-a-glissieres": {
      name: "Racleur à glissières",
      link: "racleur-a-glissieres",
      category: "Equipement d'élevage",
      description: `Très fiable, car les quantités excessives de paille tombent sur la glissière et sont évacuées lors du prochain processus de poussée ou par le stabilisateur
Pas de rail de guidage nécessaire grâce au stabilisateur supplémentaire
Très respectueux des animaux grâce à sa construction spéciale et à sa faible hauteur
Pousse dans une auge inférieure ou sur une zone de dégagement
Galvanisé à chaud
Certifié CE`,
      images: ["/images/produits/equipement-elevage/racleurs/g-1.jpg"],
    },

    "brosse-a-vaches": {
      name: "Brosse à vaches",
      link: "brosse-a-vaches",
      category: "Equipement d'élevage",
      description:
        "La brosse a été conçue pour augmenter la santé et la quantité de lait de la vache de manière significative. Les vaches son capables de produire plus de lait lorsqu’elles ne sont pas stressée. Après la vente, la durée de vie de nos produits industriels est de 10 (dix) ans. ",
      images: ["/images/produits/equipement-elevage/brosse-a-vaches/01.jpg"],
      benefits: [
        "Protéger la santé de la vache.",
        "Augmenter le confort de la grange.",
        "Le massage capillaire augmente la circulation sanguine.",
        "Agumente le rendement du troupeau de bovin.",
        "Permet aux vaches d’être relaxes et propres.",
        "Beaucoup de transpiration de la peau de l’animal.",
        "Augmente le taux d’utilisation des aliments.",
        "Augmente la qualité du corps de la vache.",
        "Augmente la production de viande et de lait à hauteur de 10%.",
      ],
      technicalSpecs: {
        //         "Caractéristicas et Démarrage Automatique ON/OFF",
        //  "Installation facile et rapide",
        //  "Basse consommation d’énergie",
        // "Facile à nettoyer",
        //  "Convenable pour 40-50 animaux",
        //  "L’habileté à tourner à 360°",
        //  "En cas de blocage de la queue de l’animal, le moteur s’arrête et recommence à fonctioner dans le sens contraire.",

        "Puissance du Moteur": "0.25KW",
        Courant: "1.23 A",
        Fréquence: "50 (60Hz optionnel)",
        "Voltage d’Opération": "220 - 230 V",
        "Vitesse du Moteur": "1425 Rpm",
        "Diamètre de la brosse": "435 ± 5 mm (Ø44X72 cm)",
      },
    },
  },
};

export function getProductData(category, product) {
  return productsData[category]?.[product];
}

export function getAllCategories() {
  return Object.keys(productsData);
}

export function getProductsByCategory(category) {
  return Object.values(productsData[category] || {});
}

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug, productSlug) {
  return products.find(
    (product) =>
      product.category === categorySlug && product.slug === productSlug
  );
}
