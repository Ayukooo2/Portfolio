// Récupération des modals
const portfolio = document.getElementById("modal1");
const certification = document.getElementById("modal2");
const university = document.getElementById("modal4");

// Récupération des boutons
const btnPortfolio = document.getElementById("btn-choix1");
const btnCertification = document.getElementById("btn-choix2");
const btnUniversity = document.getElementById("btn-choix4");

// Données des projets
const personalProjects = [
  {
    title: "OhMyCode",
    desc: "A web platform to explore coding projects.",
    details: "This project allows users to explore coding challenges, submit solutions, and learn collaboratively.",
    img: "./public/IMG_7267.webp",
  },
  {
    title: "Portfolio",
    desc: "My personal portfolio website.",
    details: "This portfolio showcases my skills, personal projects, and university projects.",
    img: "./public/Valentino.jpg",
  }
];

const universityProjects = [
  {
    title: "Mini Shell",
    desc: "2025 > Création d'un Shell en C",
    details: "en Travaux Dirigés : Développement d'un Shell en C interactif dans le terminal, avec des forks et gestion des PID.",
    img: "./public/imageProject/ShellC.png",
  },
  {
    title: "RTL - Rule The Labyrinth",
    desc: "2025 > Jeu codé en Java et FXML",
    details: "En groupe de 4 : Développement d'un labyrinthe en JAVA avec du FXML, respectant les principes SOLID et en MVC.",
    img: "./public/imageProject/RuleTheLabyrinth.png",
  },
  {
    title: "One man One Forest",
    desc: "2025 > Jeu de survie en Java dans le terminal",
    details: "En groupe de 5 : Développement d'un jeu de survie en JAVA purement dans le terminal, en respectant la méthodologie agile",
    img: "./public/IMG_7267.webp",
  },
  {
    title: "Ado Match",
    desc: "2025 > Application pour créer des groupes (d'ados) en Java et FXML",
    details: "En groupe de 3 : Développement d'une application pour apparier des adolescents, première approche de la sérialisation",
    img: "./public/imageProject/AdoMatch.png",
  },
  {
    title: "Manipuler données des JO",
    desc: "2025 > Premières utilisations des BDD",
    details: "En groupe de 2 : Projet d’initiation aux bases de données relationnelles avec Access et SQL, avec un fichier récupéré dés données des JO d’été 1988.",
    img: "./public/imageProject/HiverJO1988.png",
  },
  {
    title: "Installation VM",
    desc: "2024 > Mise en place d'une VM Linux",
    details: "En groupe de 4 : Mise en place d'une VM dans l’environnement Linux, gestion des utilisateurs, permissions, partition disques...",
    img: "./public/imageProject/InstallationReseau.png",
  },
  {
    title: "Ride With Spotify",
    desc: "2024 > Création de notre premier site web",
    details: "En groupe de 3 : Création d'une Site en HTML et CSS simulant une application de covoiturage pour une entreprise",
    img: "./public/imageProject/RideWithSpotify.png",
  },
  {
    title: "CompilFighter",
    desc: "2024 > Premier Projet universitaire",
    details: "En groupe de 2 : Réalisation d'un jeu tour par tour ludo-pédagogique en IJava (java simplifié).",
    img: "./public/imageProject/CompilFighter.png",
  }
];

const certifications = [
  {
    title: "BAC Général",
    desc: "Baccalauréat général obtenu en 2024, avec les spécialités Mathématiques et NSI, apportant de solides bases en algorithmique et logique informatique.",
    img: "./public/imageProject/BacGeneral.png",
  },
  {
    title: "Java",
    desc: "Programmation orientée objet (POO), conception MVC, interfaces graphiques avec JavaFX et FXML, sérialisation, principes SOLID, bases de JEE, maitrice de JDPC, ainsi que la gestion des exceptions et collections.",
    img: "./public/imageProject/JavaLogo.avif",
  },
  {
    title: "SQL",
    desc: "Conception et gestion de bases de données relationnelles, requêtes complexes (SELECT, JOIN), insertions, mises à jour, suppression de données et intégration avec JDBC.",
    img: "./public/imageProject/SQLLogo.png",
  },
  {
    title: "C",
    desc: "Programmation bas niveau, gestion de la mémoire, pointeurs, processus et forks, PID, manipulation du système d’exploitation, compréhension du fonctionnement interne des programmes.",
    img: "./public/imageProject/CLogo.webp",
  },
  {
    title: "Markdown",
    desc: "Rédaction de documentation technique claire et structurée : README, rapports, guides d’installation et présentations de projets, avec une mise en forme lisible et professionnelle.",
    img: "./public/imageProject/MarkdownLogo.svg",
  },
  {
    title: "HTML",
    desc: "Bases du HTML pour structurer des pages web, intégrer du contenu (textes, images, liens) et comprendre le fonctionnement d’une page web.",
    img: "./public/imageProject/HTMLLogo.png",
  },
  {
    title: "CSS",
    desc: "Bases du CSS pour styliser des pages web, gérer les couleurs, les mises en page simples et adapter l’affichage selon la taille de l’écran.",
    img: "./public/imageProject/CSSLogo.avif",
  },
  {
    title: "Python",
    desc: "Bonnes connaissances en Python acquises précédemment, avec une solide compréhension de la logique de programmation, mais peu utilisées récemment.",
    img: "./public/imageProject/PythonLogo.jpg",
  }
];




// Crée une carte de projet avec modal interne pour détails et image
function createProjectCard(project, withView = true) {
  return `
    <div class="card">
      <div class="image">
        <img src="${project.img}" alt="${project.title}" />
      </div>
      <div class="content">
        <h3 class="title">${project.title}</h3>
        <p class="desc">${project.desc}</p>

        ${withView ? `<button class="action view-btn">View</button>` : ""}
      </div>

      ${
        withView
          ? `
      <div class="project-details-modal">
        <div class="details-content">
          <span class="close-details">&times;</span>
          <h3>${project.title}</h3>
          <img src="${project.img}" alt="${project.title}" style="width:100%; max-width:400px; border-radius:10px; margin: 20px 0;">
          <p>${project.details}</p>
        </div>
      </div>
      `
          : ""
      }
    </div>
  `;
}



// Injection des contenus dans les modals
function populateModals() {
  portfolio.innerHTML = `
    <div class="webProject">
      ${personalProjects.map(p => createProjectCard(p, true)).join("")}
    </div>
  `;

  university.innerHTML = `
    <div class="universityProject">
      ${universityProjects.map(p => createProjectCard(p, true)).join("")}
    </div>
  `;

  certification.innerHTML = `
    <div class="certificationContaineur">
      ${certifications.map(c => createProjectCard(c, false)).join("")}
    </div>
  `;

  // Events View
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const detailsModal = e.target
        .closest(".card")
        .querySelector(".project-details-modal");
      detailsModal.style.display = "flex";
    });
  });

  // Events Close
  document.querySelectorAll(".close-details").forEach((span) => {
    span.addEventListener("click", (e) => {
      e.target.closest(".project-details-modal").style.display = "none";
    });
  });
}


// Appel pour remplir les modals dès le chargement
populateModals();
showModal(university, btnUniversity, false);

// Fonction pour afficher un modal principal
function showModal(modalToShow, btnToHighlight, shouldScroll = true) {
  [portfolio, certification, university].forEach(modal => {
    modal.classList.remove("show");
    modal.style.opacity = "0";
  });

  modalToShow.classList.add("show");
  setTimeout(() => modalToShow.style.opacity = "1", 10);

  // 🔥 Scroll seulement si demandé
  if (shouldScroll) {
    const offset = btnPortfolio.offsetTop;
    window.scrollTo({ top: offset - 160, behavior: "smooth" });
  }

  [btnPortfolio, btnCertification, btnUniversity].forEach(btn => {
    btn.style.backgroundColor = "transparent";
  });
  btnToHighlight.style.backgroundColor = "rgba(107, 104, 128, 0.6)";
}


// Événements pour les boutons principaux
btnPortfolio.addEventListener("click", () => showModal(portfolio, btnPortfolio));
btnUniversity.addEventListener("click", () => showModal(university, btnUniversity));
btnCertification.addEventListener("click", () => showModal(certification, btnCertification));
btnSkills.addEventListener("click", () => showModal(skills, btnSkills));
