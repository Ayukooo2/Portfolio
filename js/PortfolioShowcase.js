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
    title: { fr: "Portfolio", en: "Portfolio" },
    desc: { 
      fr: "Mon site web portfolio personnel.", 
      en: "My personal portfolio website." 
    },
    details: { 
      fr: "Ce portfolio présente mes compétences, mes projets personnels et mes projets universitaires.", 
      en: "This portfolio showcases my skills, personal projects, and university projects." 
    },
    img: "./public/Valentino.jpg",
  },
  {
    title: { fr: "Gestion Fichiers", en: "Manipulating Files" },
    desc: { 
      fr: "2023 > Mon premier projet personnel en Python", 
      en: "2023 > My first personnal project in Python" 
    },
    details: { 
      fr: "Réalisé seul : Algorithme qui cherche dans une structure de dossiers définis si des fichiers semblent identique. Première approche au concept de fichiers", 
      en: "Completed solo: Algorithm that searches through a defined folder structure to identify identical files. First approach to file system concepts." 
    },
    img: "./public/imageProject/DebutImage.jpg",
  }
];

const universityProjects = [
  {
    title: { fr: "Mini Shell", en: "Mini Shell" },
    desc: { fr: "2025 > Création d'un Shell en C", en: "2025 > Creating a Shell in C" },
    details: { 
      fr: "En Travaux Dirigés : Développement d'un Shell en C interactif dans le terminal, avec des forks et gestion des PID.", 
      en: "In Tutorials: Development of an interactive C Shell in the terminal, with forks and PID management." 
    },
    img: "./public/imageProject/ShellC.png",
  },
  {
    title: { fr: "RTL - Rule The Labyrinth", en: "RTL - Rule The Labyrinth" },
    desc: { fr: "2025 > Jeu codé en Java et FXML", en: "2025 > Game coded in Java and FXML" },
    details: { 
      fr: "En groupe de 4 : Développement d'un labyrinthe en JAVA avec du FXML, respectant les principes SOLID et en MVC.", 
      en: "Group of 4: Development of a labyrinth in JAVA with FXML, respecting SOLID principles and MVC architecture." 
    },
    img: "./public/imageProject/RuleTheLabyrinth.png",
  },
  {
    title: { fr: "One man One Forest", en: "One man One Forest" },
    desc: { fr: "2025 > Jeu de survie en Java dans le terminal", en: "2025 > Survival game in Java in the terminal" },
    details: { 
      fr: "En groupe de 5 : Développement d'un jeu de survie en JAVA purement dans le terminal, en respectant la méthodologie agile.", 
      en: "Group of 5: Development of a survival game in pure JAVA in the terminal, following Agile methodology." 
    },
    img: "./public/IMG_7267.webp",
  },
  {
    title: { fr: "Ado Match", en: "Ado Match" },
    desc: { fr: "2025 > Application de création de groupes en Java", en: "2025 > Group creation application in Java" },
    details: { 
      fr: "En groupe de 3 : Développement d'une application pour apparier des adolescents, première approche de la sérialisation.", 
      en: "Group of 3: Development of an application to match teenagers, first approach to serialization." 
    },
    img: "./public/imageProject/AdoMatch.png",
  },
  {
    title: { fr: "Manipuler données des JO", en: "Olympic Games Data Management" },
    desc: { fr: "2025 > Premières utilisations des BDD", en: "2025 > First use of databases" },
    details: { 
      fr: "En groupe de 2 : Projet d’initiation aux bases de données relationnelles avec Access et SQL (JO d’été 1988).", 
      en: "Group of 2: Initiation project to relational databases with Access and SQL (1988 Summer Olympics data)." 
    },
    img: "./public/imageProject/HiverJO1988.png",
  },
  {
    title: { fr: "Installation VM", en: "VM Installation" },
    desc: { fr: "2024 > Mise en place d'une VM Linux", en: "2024 > Setting up a Linux VM" },
    details: { 
      fr: "En groupe de 4 : Mise en place d'une VM Linux, gestion des utilisateurs, permissions, partitionnement disques.", 
      en: "Group of 4: Setting up a Linux VM, user management, permissions, disk partitioning." 
    },
    img: "./public/imageProject/InstallationReseau.png",
  },
  {
    title: { fr: "Ride With Spotify", en: "Ride With Spotify" },
    desc: { fr: "2024 > Création de notre premier site web", en: "2024 > Creation of our first website" },
    details: { 
      fr: "En groupe de 3 : Création d'un site en HTML et CSS simulant une application de covoiturage.", 
      en: "Group of 3: Creation of an HTML and CSS site simulating a carpooling application." 
    },
    img: "./public/imageProject/RideWithSpotify.png",
  },
  {
    title: { fr: "CompilFighter", en: "CompilFighter" },
    desc: { fr: "2024 > Premier Projet universitaire", en: "2024 > First university project" },
    details: { 
      fr: "En groupe de 2 : Réalisation d'un jeu tour par tour ludo-pédagogique en IJava. (java simplifié)", 
      en: "Group of 2: Creation of an educational turn-based game in IJava. (simplified Java)" 
    },
    img: "./public/imageProject/CompilFighter.png",
  }
];

const certifications = [
  {
    title: { fr: "BAC Général", en: "High School Diploma" },
    desc: { 
      fr: "Baccalauréat général obtenu en 2024, avec les spécialités Mathématiques et NSI (+ Physique Chimie) au lycée Charlotte Perriand à Genech.", 
      en: "General Baccalaureate obtained in 2024, with Mathematics and Computer Science specialties (+ physics) at Lycée Charlotte Perrian in Genech." 
    },
    img: "./public/imageProject/BacGeneral.png",
  },
  {
    title: { fr: "Java", en: "Java" },
    desc: { 
      fr: "Programmation orientée objet (POO), conception MVC, interfaces graphiques avec JavaFX, principes SOLID, et maîtrise de JDBC.", 
      en: "Object-Oriented Programming (OOP), MVC design, JavaFX graphical interfaces, SOLID principles, and JDBC proficiency." 
    },
    img: "./public/imageProject/JavaLogo.avif",
  },
  {
    title: { fr: "SQL", en: "SQL" },
    desc: { 
      fr: "Conception et gestion de bases de données relationnelles, requêtes complexes (SELECT, JOIN) et intégration avec JDBC.", 
      en: "Design and management of relational databases, complex queries (SELECT, JOIN), and JDBC integration." 
    },
    img: "./public/imageProject/SQLLogo.png",
  },
  {
    title: { fr: "C", en: "C" },
    desc: { 
      fr: "Programmation bas niveau, gestion de la mémoire, pointeurs, processus et forks, et manipulation du système d’exploitation.", 
      en: "Low-level programming, memory management, pointers, processes and forks, and operating system manipulation." 
    },
    img: "./public/imageProject/CLogo.webp",
  },
  {
    title: { fr: "Markdown", en: "Markdown" },
    desc: { 
      fr: "Rédaction de documentation technique claire et structurée : README, rapports et guides d’installation professionnels.", 
      en: "Writing clear and structured technical documentation: READMEs, reports, and professional installation guides." 
    },
    img: "./public/imageProject/MarkdownLogo.svg",
  },
  {
    title: { fr: "HTML", en: "HTML" },
    desc: { 
      fr: "Structuration de pages web, intégration de contenu (textes, images, liens) et compréhension sémantique du web.", 
      en: "Web page structuring, content integration (text, images, links), and semantic web understanding." 
    },
    img: "./public/imageProject/HTMLLogo.png",
  },
  {
    title: { fr: "CSS", en: "CSS" },
    desc: { 
      fr: "Stylisation de pages web, gestion des couleurs, mises en page (Flexbox/Grid) et design adaptatif (responsive).", 
      en: "Web page styling, color management, layouts (Flexbox/Grid), and responsive design." 
    },
    img: "./public/imageProject/CSSLogo.avif",
  },
  {
    title: { fr: "Python", en: "Python" },
    desc: { 
      fr: "Bonnes connaissances acquises précédemment, incluant la logique de programmation et le traitement de données simple.", 
      en: "Good knowledge previously acquired, including programming logic and simple data processing." 
    },
    img: "./public/imageProject/PythonLogo.jpg",
  }
];


const languageSelector = document.getElementById("language-selector");

languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  populateModals(selectedLang);
});

// Chargement initial
populateModals("fr");

// Crée une carte de projet avec modal interne pour détails et image
function createProjectCard(project, withView = true, lang = "fr") {
  return `
    <div class="card">
      <div class="image">
        <img src="${project.img}" alt="${project.title[lang]}" />
      </div>
      <div class="content">
        <h3 class="title">${project.title[lang]}</h3>
        <p class="desc">${project.desc[lang]}</p>
        ${withView ? `<button class="action view-btn">${lang === 'fr' ? 'Voir' : 'View'}</button>` : ""}
      </div>
      ${withView ? `
      <div class="project-details-modal">
        <div class="details-content">
          <span class="close-details">&times;</span>
          <h3>${project.title[lang]}</h3>
          <img src="${project.img}" alt="${project.title[lang]}" style="width:100%; max-width:400px; border-radius:10px; margin: 20px 0;">
          <p>${project.details[lang]}</p>
        </div>
      </div>` : ""}
    </div>
  `;
}



// Injection des contenus dans les modals
function populateModals(lang = "fr") {
  portfolio.innerHTML = `
    <div class="webProject">
      ${personalProjects.map(p => createProjectCard(p, true, lang)).join("")}
    </div>
  `;

  university.innerHTML = `
    <div class="universityProject">
      ${universityProjects.map(p => createProjectCard(p, true, lang)).join("")}
    </div>
  `;

  certification.innerHTML = `
    <div class="certificationContaineur">
      ${certifications.map(c => createProjectCard(c, false, lang)).join("")}
    </div>
  `;

  // Ré-attacher les événements (indispensable car le HTML a été écrasé)
  attachModalEvents();
}

// Exportez la logique des événements dans une fonction séparée
function attachModalEvents() {
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.onclick = (e) => { // Utilisez .onclick pour éviter les doublons d'écouteurs
      const detailsModal = e.target.closest(".card").querySelector(".project-details-modal");
      detailsModal.style.display = "flex";
    };
  });

  document.querySelectorAll(".close-details").forEach((span) => {
    span.onclick = (e) => {
      e.target.closest(".project-details-modal").style.display = "none";
    };
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
    // 1. On récupère la position de l'élément par rapport au viewport + le scroll actuel
    const elementPosition = btnPortfolio.getBoundingClientRect().top + window.pageYOffset;
    
    // 2. On soustrait la marge voulue (ici 160px pour passer sous le header)
    const offsetPosition = elementPosition - 168;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
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
