const booksText = {

  en: {
    title: "Books",
    originally_published_by: "Originally published by",
    out_now: "Out now",
    new_release: "New release!",
    coming_soon: "Coming soon!",
    reviews_title: "Media",
    books: [
      {
        title: "The Hand of the Hand",
        author: "Laura Vazquez",
        translation_publisher: "Ugly Duckling Presse",
        translation_year: "2025",
        pub_date: "2025-05-02",
        original_publisher: "Cheyne Éditeur",
        cover_image_url:
          "https://globaluserfiles.com/media/108961_3ebf0072c2e66ced883fa39d7e761ff42c9f5033.jpeg/v1/w_800,h_0,dpr_2/la-main-de-la-main.webp",
        order_url: "https://uglyducklingpresse.org/",
        original_year: "2014",
      },
      {
        title: "The Dream of a Common Language",
        author: "Adrienne Rich",
        translation_publisher: "L'Arche",
        translation_year: "2025",
        pub_date: "2025-01-15",
        original_publisher: "W. W. Norton & Co.",
        cover_image_url:
          "https://www.arche-editeur.com/storage/app/uploads/public/134/604/98f/thumb__320_500_0_0_auto.jpg",
        order_url: "https://www.arche-editeur.com/livre/le-reve-dun-langage-commun-747",
        original_year: "1978",
        reviews: [
          {
            text: "Review in Le Monde",
            url: "https://www.lemonde.fr/livres/article/2025/02/10/le-reve-d-un-langage-commun-l-intime-tres-politique-d-adrienne-rich_6539727_3260.html",
          },
          {
            text: "Feature on Le Book Club podcast (France Culture)",
            url: "https://www.radiofrance.fr/franceculture/podcasts/le-book-club/la-poesie-d-adrienne-rich-en-vers-et-contre-tous-7220363"
          },
          {
            text: "Review in Libération",
            url: "https://www.liberation.fr/culture/livres/le-reve-dun-langage-commun-un-recueil-au-feminin-pluriel-dadrienne-rich-20250221_UJR6HQJ2PFEOLMOO5FGBMEH2BE/"
          },
          {
            text: "Review on Maze Média",
            url: "https://maze.fr/2025/01/le-reve-dun-langage-commun-recueil-amoureux/",
          },
          {
            text: "Preview on AOC Média",
            url: "https://aoc.media/fiction/2025/01/04/le-reve-dun-langage-commun/",
          },
          {
            text: "Preview in Revue Cunni Lingus",
            url: "https://qunnilingus.wixsite.com/cnnlngs/adrienne-rich",
          }
        ]
      },
      {
        title: "Elegy Department Spring: Candy Sonnets 1",
        author: "Kay Gabriel",
        translation_publisher: "How to Become",
        translation_year: "2025",
        pub_date: "2025-02-15",
        original_publisher: "BOAAT Press",
        cover_image_url:
          "/assets/candy_sonnets.png",
        order_url: "",
        original_year: "2017",
      },
      {
        title: "What I Knew",
        author: "Eleni Sikelianos",
        translation_publisher: "L'Usage",
        translation_year: "2023",
        original_publisher: "Nightboat Books",
        cover_image_url:
          "https://editionslusage.fr/wp-content/uploads/2022/12/Ce_que_j-ai-connu1024x768.jpg",
        order_url: "https://editionslusage.fr/livres/ce-que-jai-connu/",
        original_year: "2019",
        reviews: [
          {
            text: "Adrien Meignan, La vie sans principe",
            url: "https://laviesansprincipe.wordpress.com/2023/04/07/ce-que-jai-connu-eleni-sikelianos/",
          },
          {
            text: "Pierre Vinclair, Sitaudis",
            url: "https://www.sitaudis.fr/Parutions/eleni-sikelianos-ce-que-j-ai-connu-1673498430.php",
          },
          {
            text: "Miriam Ould-Aroussi, Fragile",
            url: "https://fragile-revue.fr/la-lettre/sikelianos/",
          },
          {
            text: "Alban Kacher, Poesibao",
            url: "https://www.poesibao.fr/eleni-sikelianos-ce-que-jai-connu-lu-par-alban-kacher/",
          },
        ],
      },
      {
        title: "The Happy End/All Welcome",
        author: "Mónica de la Torre",
        translation_publisher: "Joca Seria",
        translation_year: "2022",
        original_publisher: "Ugly Duckling Presse",
        cover_image_url:
          "data:image/jpeg;base64,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",
        order_url: "http://www.jocaseria.fr/Livres/Fiche%20livre/happyend.html",
        original_year: "2017",
        reviews: [
          {
            text: "Adrien Meignan, in Un dernier livre avant la fin du monde",
            url: "https://www.undernierlivre.net/monica-de-la-torre-the-happy-end-bienvenue-a-tous/",
          },
          {
            text: "Lily Robert-Foley, in En attendant Nadeau",
            url: "https://www.en-attendant-nadeau.fr/2023/01/18/de-la-torre-traduction-illimitee/",
          },
        ],
      },
    ],
  },
  fr: {
    title: "Livres",
    originally_published_by: "Édition originale publiée par",
    out_now: "Maintenant en librairie",
    coming_soon: "Bientôt en librairie",
    new_release: "Nouveauté !",
    reviews_title: "Presse",
    books: [
      {
        title: "La Main de la main",
        author: "Laura Vazquez",
        translation_publisher: "Ugly Duckling Presse",
        translation_year: "2025",
        original_publisher: "Cheyne Éditeur",
        pub_date: "2025-05-02",
        cover_image_url:
          "https://globaluserfiles.com/media/108961_3ebf0072c2e66ced883fa39d7e761ff42c9f5033.jpeg/v1/w_800,h_0,dpr_2/la-main-de-la-main.webp",
        order_url: "https://uglyducklingpresse.org/",
        original_year: "2014",
      },
      {
        title: "Le Rêve d'un Langage Commun",
        author: "Adrienne Rich",
        translation_publisher: "L'Arche",
        translation_year: "2025",
        original_publisher: "W. W. Norton & Co.",
        pub_date: "2025-01-15",
        cover_image_url:
          "https://www.arche-editeur.com/storage/app/uploads/public/134/604/98f/thumb__320_500_0_0_auto.jpg",
        order_url: "https://www.arche-editeur.com/livre/le-reve-dun-langage-commun-747",
        original_year: "1978",
        reviews: [
          {
            text: "Article dans Le Monde",
            url: "https://www.lemonde.fr/livres/article/2025/02/10/le-reve-d-un-langage-commun-l-intime-tres-politique-d-adrienne-rich_6539727_3260.html",
          },
          {
            text: "Émission Le Book Club de France Culture: avec Lénaïg Cariou et Claire Star Finch",
            url: "https://www.radiofrance.fr/franceculture/podcasts/le-book-club/la-poesie-d-adrienne-rich-en-vers-et-contre-tous-7220363"
          },
          {
            text: "Article dans Libération",
            url: "https://www.liberation.fr/culture/livres/le-reve-dun-langage-commun-un-recueil-au-feminin-pluriel-dadrienne-rich-20250221_UJR6HQJ2PFEOLMOO5FGBMEH2BE/"
          },
          {
            text: "Article sur Maze Média",
            url: "https://maze.fr/2025/01/le-reve-dun-langage-commun-recueil-amoureux/",
          },
          {
            text: "Extraits en avant-première sur AOC Média",
            url: "https://aoc.media/fiction/2025/01/04/le-reve-dun-langage-commun/",
          },
          {
            text: "Extraits en avant-première dans la revue Cunni Lingus",
            url: "https://qunnilingus.wixsite.com/cnnlngs/adrienne-rich",
          }
        ]
      },
      {
        title: "Printemps Rayon Elégie. Sonnets pour Candy",
        author: "Kay Gabriel",
        translation_publisher: "How to Become",
        translation_year: "2025",
        pub_date: "2025-02-15",
        original_publisher: "BOAAT Press",
        cover_image_url:
          "/assets/candy_sonnets.png",
        original_year: "2017",
      },
      {
        title: "Ce que j'ai connu",
        author: "Eleni Sikelianos",
        translation_publisher: "L'Usage",
        translation_year: "2023",
        original_publisher: "Nightboat Books",
        cover_image_url:
          "https://editionslusage.fr/wp-content/uploads/2022/12/Ce_que_j-ai-connu1024x768.jpg",
        order_url: "https://editionslusage.fr/livres/ce-que-jai-connu/",
        original_year: "2019",
        reviews: [
          {
            text: "Adrien Meignan, La vie sans principe",
            url: "https://laviesansprincipe.wordpress.com/2023/04/07/ce-que-jai-connu-eleni-sikelianos/",
          },
          {
            text: "Pierre Vinclair, Sitaudis",
            url: "https://www.sitaudis.fr/Parutions/eleni-sikelianos-ce-que-j-ai-connu-1673498430.php",
          },
          {
            text: "Miriam Ould-Aroussi, Fragile",
            url: "https://fragile-revue.fr/la-lettre/sikelianos/",
          },
          {
            text: "Alban Kacher, Poesibao",
            url: "https://www.poesibao.fr/eleni-sikelianos-ce-que-jai-connu-lu-par-alban-kacher/",
          },
        ],
      },
      {
        title: "The Happy End / Bienvenue à tous",
        author: "Mónica de la Torre",
        translation_publisher: "Joca Seria",
        translation_year: "2022",
        original_publisher: "Ugly Duckling Presse",
        cover_image_url:
          "data:image/jpeg;base64,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",
        order_url: "http://www.jocaseria.fr/Livres/Fiche%20livre/happyend.html",
        original_year: "2017",
        reviews: [
          {
            text: "Adrien Meignan, sur le site : Un dernier livre avant la fin du monde",
            url: "https://www.undernierlivre.net/monica-de-la-torre-the-happy-end-bienvenue-a-tous/",
          },
          {
            text: "Lily Robert-Foley, in En attendant Nadeau",
            url: "https://www.en-attendant-nadeau.fr/2023/01/18/de-la-torre-traduction-illimitee/",
          },
        ],
      },
    ],
  },
};

export default booksText;
