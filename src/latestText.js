const latestText = {
  en: {
    actu: "Latest",
    past: "Past events",
    events: [
      { text: "January 15, 2025: Publication of Le Rêve d'un langage commun, our translation of The Dream of a Common Language by Adrienne Rich, with L'Arche Éditeur"},

      { text: "January 22, 2025: Event for Le Rêve d'un langage commun at the Université Grenoble Alpes library"},
      { text: "January 24, 2025: Reading event: \"Nos matrimoines : écrivaines états-uniennes\", Librairie les Modernes, Grenoble"},
      { text: "February 2025: Publication of Printemps Rayon Elégie. Sonnets pour Candy., our translation of Elegy Department Spring: Candy Sonnets 1 by Kay Gabriel, with Éditions How to Become"},
      { text: "May 1, 2025: Publication of The Hand of the Hand, our translation of La Main de la main by Laura Vazquez, with Ugly Duckling Presse"},
      { text: "May 2, 2025: Readings from The Hand of the Hand at Ugly Duckling Presse Spring Group Launch"},
      {
        text: "Monday, November 6th: Workshop by Shira Abramovich at Simmons College"
      },
      {
        text: "Friday, October 13th: Reading with Laura Vazquez at Les Inaccoutumes festival, presented by La Ménagerie de Verre",
        url: "https://menageriedeverre.com/files/cp-inaccoutumes.pdf",
      },
      {
        text: "May 15, 2023: Workshop by Lénaïg Cariou at Centre Bloch Berlin on translating gender with Adrienne Rich",
        url: "https://cmb.hu-berlin.de/en/calendar/event/elise-huchet-forum-marc-bloch-politiques-de-la-traduction",
      },
      {
        text: "March 2023: Interview with Limited Connection Collective (fr)",
        url: "https://laviesansprincipe.wordpress.com/2023/03/08/interview-avec-le-collectif-connexion-limitee-limited-connection/",
      },
      {
        text: "Fall 2022: Our translation of four poems by Laura Vazquez appear in the latest issue of Asymptote!",
        url: "https://www.asymptotejournal.com/poetry/the-hand-of-the-hand-laura-vazquez/",
      },
      {
        text: "Thursday, March 30th - Reading and Q&A with Eleni Sikelianos and Lénaïg Cariou at Festival Littérature au Centre, in Clermont-Ferrand",
      },
      {
        text: "Saturday, March 25th, 6:30pm - Reading by Eleni Sikelianos and her translators at Librairie EXC, in Paris",
      },
      {
        text: "Friday, January 27, 2023 - Book launch of Ce que j'ai connu, our translation of What I knew by Eleni Sikelianos, at L'Atelier, in Paris: reading and Q&A with the translators",
      },
      {
        text: "March 19, 2022: Camille Blanc and Lénaïg Cariou read with Jean-François Puff and Sylvain Prudhomme at the Centre International de Poésie Marseille",
        url: "https://cipmarseille.fr/evenement_fiche.php?id=1459",
      },
      {
        text: 'April 7, 2021: Our very own Lénaïg Cariou is among the organizers of the conference "Femmes poètes, poètes femmes, poétesses… questions de terminologie" at the Séminaire de l’Université de Chicago',
        url: "https://poetesses.hypotheses.org/",
      },
      {
        text: "January 2021: Translation of Adrienne Rich's 'The Burning of Paper Instead of Children' appears in Revue Jef Klak",
        url: "https://www.jefklak.org/",
      },
      {
        text: "November 2020: Translation of Mónica de la Torre's '$6.82' appears in Revue Fragile",
        url: "https://fragile-revue.fr/la-lettre/6-82/",
      },
    ],
  },
  fr: {
    actu: "Actualité",
    past: "Évènements passés",
    events: [
      { text: '15 janvier 2025: Sortie du Rêve d\'un langage commun, notre traduction de The Dream of a Common Language d\'Adrienne Rich, chez L\'Arche Éditeur'},
      { text: "22 janvier 2025 : Rencontre autour du Rêve d'un langage commun à la BU de l'Université Grenoble Alpes"},
      { text: "24 janvier 2025 : Nuit de la lecture : \"Nos matrimoines : écrivaines états-uniennes\", Librairie les Modernes, Grenoble"},
      { text: "Février 2025: Parution de Printemps Rayon Elégie. Sonnets pour Candy., notre traduction de Elegy Department Spring: Candy Sonnets 1 by Kay Gabriel, chez How to Become"},
      { text: "1 mai 2025: Parution de The Hand of the Hand, notre traduction de La Main de la main de Laura Vazquez, chez Ugly Duckling Presse"},
      { text: "2 mai 2025: Lectures et lancement pour The Hand of the Hand en groupe chez Ugly Duckling Presse"},
      {
        text: "Lundi 6 novembre: Atelier de traduction avec Shira Abramovich à Simmons College"
      },
      {
        text: "Vendredi 13 octobre: Lecture avec Laura Vazquez au festival Les Inaccoutumes, presenté par La Ménagerie de Verre",
        url: "https://menageriedeverre.com/files/cp-inaccoutumes.pdf",
      },
      {
        text: "15 mai 2023: Atelier mené par Lénaïg Cariou au Centre Bloch Berlin sur le sujet « Traduire le genre avec Adrienne Rich »",
        url: "https://cmb.hu-berlin.de/en/calendar/event/elise-huchet-forum-marc-bloch-politiques-de-la-traduction",
      },
      {
        text: "Mars 2023: Interview avec le collectif Connexion Limitée / Limited Connection",
        url: "https://laviesansprincipe.wordpress.com/2023/03/08/interview-avec-le-collectif-connexion-limitee-limited-connection/",
      },
      {
        text: "Automne 2022: Nos traductions de quatre poèmes de Laura Vazquez dans la revue Asymptote!",
        url: "https://www.asymptotejournal.com/poetry/the-hand-of-the-hand-laura-vazquez/",
      },
      {
        text: "Jeudi 30 mars - Lecture et entretien d'Eleni Sikelianos et Lénaïg Cariou au Festival Littérature au Centre, à Clermont-Ferrand",
      },
      {
        text: "Samedi 25 mars, 18h30 - Lecture d'Eleni Sikelianos et de ses traductrices à la librairie EXC, à Paris",
      },
      {
        text: "Vendredi 27 janvier 2023, 20h - Soirée de lancement de Ce que j'ai connu d'Eleni Sikelianos à la librairie L'Atelier, à Paris: lecture et entretien avec les traductrices",
      },
      {
        text: "19 Mars 2022: Camille Blanc et Lénaïg Cariou participent à une rencontre-lecture au Centre International de Poésie Marseille",
        url: "https://cipmarseille.fr/evenement_fiche.php?id=1459",
      },
      {
        text: "7 Avril 2021: Lénaïg Cariou organise la conférence « Femmes poètes, poètes femmes, poétesses… questions de terminologie » au Séminaire de l’Université de Chicago",
        url: "https://poetesses.hypotheses.org/",
      },
      {
        text: "Janvier 2021: Notre traduction de 'Brûler du papier plutôt que des enfants' d'Adrienne Rich dans la Revue Jef Klak",
        url: "https://www.jefklak.org/",
      },
      {
        text: "Décembre 2020: Notre traduction à contraintes de '$6.82' de Mónica de la Torre dans la Revue Fragile",
        url: "https://fragile-revue.fr/la-lettre/6-82/",
      },
    ],
  },
};

export default latestText;
