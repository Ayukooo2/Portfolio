// Modal elements
const personalModal = document.getElementById("personalProjectsModal");
const certificationsModal = document.getElementById("certificationsModal");
const universityModal = document.getElementById("universityProjectsModal");

// Tab button elements
const btnPersonal = document.getElementById("btn-personal-tab");
const btnCertifications = document.getElementById("btn-certificates-tab");
const btnUniversity = document.getElementById("btn-university-tab");

// Project data
const personalProjects = [
  {
    title: { fr: "Portfolio", en: "Portfolio" },
    desc: {
      fr: "Site web portfolio personnel.",
      en: "Personal portfolio website."
    },
    details: {
      fr: "Conception et développement complet d'un portfolio bilingue (FR/EN) déployé sur GitHub Pages.",
      en: "Full design and development of a bilingual (FR/EN) portfolio deployed on GitHub Pages."
    },
    context: {
      fr: "Projet personnel – Site vitrine",
      en: "Personal project – Portfolio website"
    },
    teamType: { fr: "Individuel", en: "Solo" },
    role: {
      fr: "Conception de l'architecture HTML/CSS, développement des animations JavaScript, mise en place du système d'internationalisation (i18n) bilingue, et déploiement continu via GitHub Pages.",
      en: "Designed the HTML/CSS architecture, developed JavaScript animations, built the bilingual i18n system, and set up continuous deployment via GitHub Pages."
    },
    hardSkills: {
      fr: ["HTML5", "CSS3", "JavaScript vanilla", "Responsive design", "Animations CSS/JS", "Git & GitHub Pages", "i18n"],
      en: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive design", "CSS/JS animations", "Git & GitHub Pages", "i18n"]
    },
    softSkills: {
      fr: ["Autonomie", "Sens de l'esthétique", "Organisation", "Rigueur", "Gestion de projet solo"],
      en: ["Autonomy", "Aesthetic sense", "Organisation", "Thoroughness", "Solo project management"]
    },
    reflection: {
      fr: "Ce portfolio m'a permis de consolider mes compétences front-end et de concevoir une architecture propre sans framework. J'ai appris à gérer la complexité d'un projet de A à Z, du design jusqu'au déploiement. Si c'était à refaire, j'adopterais dès le départ une convention de nommage stricte et je travaillerais avec des composants réutilisables.",
      en: "This portfolio strengthened my front-end skills and taught me how to architect a clean project without a framework. I learned to manage a project end-to-end, from design to deployment. If I were to redo it, I would adopt a strict naming convention from the start and work with reusable components."
    },
    img: "./public/IMG_7267.webp",
  },
  {
    title: { fr: "Gestion Fichiers", en: "File Manager" },
    desc: {
      fr: "2023 > Premier projet personnel en Python.",
      en: "2023 > My first personal project in Python."
    },
    details: {
      fr: "Algorithme de détection de fichiers doublons dans une arborescence de dossiers.",
      en: "Algorithm to detect duplicate files across a folder tree structure."
    },
    context: {
      fr: "Projet personnel – Initiation à la programmation",
      en: "Personal project – Introduction to programming"
    },
    teamType: { fr: "Individuel", en: "Solo" },
    role: {
      fr: "Développement de l'algorithme de parcours récursif de l'arborescence et de la logique de comparaison des fichiers (taille, nom).",
      en: "Developed the recursive folder traversal algorithm and the file comparison logic (size, name)."
    },
    hardSkills: {
      fr: ["Python", "Manipulation de fichiers", "Récursivité", "Algorithmes de recherche"],
      en: ["Python", "File manipulation", "Recursion", "Search algorithms"]
    },
    softSkills: {
      fr: ["Curiosité", "Autonomie", "Résolution de problèmes", "Persévérance"],
      en: ["Curiosity", "Autonomy", "Problem-solving", "Perseverance"]
    },
    reflection: {
      fr: "Premier contact avec Python et le concept de fichiers système. Ce projet m'a donné le goût de la programmation en me montrant qu'on peut rapidement créer un outil utile. J'ai appris à décomposer un problème en sous-problèmes et à penser en termes d'algorithme avant de coder.",
      en: "First contact with Python and file system concepts. This project sparked my passion for programming by showing how quickly you can build a useful tool. I learned to break a problem into sub-problems and think algorithmically before coding."
    },
    img: "./public/imageProject/DebutImage.jpg",
  }
];

const universityProjects = [
  {
    title: { fr: "Warsteroids : La Menace Dinosaure", en: "Warsteroids: The Dinosaur Menace" },
    desc: {
      fr: "2025 > Jeu multijoueur en temps réel – SAÉ S4",
      en: "2025 > Real-time multiplayer game – SAÉ S4"
    },
    details: {
      fr: "Shoot 'em up spatial multijoueur développé en TypeScript/Node.js avec Socket.io. Le joueur contrôle un dinosaure, détruit des ennemis et tente d'obtenir le meilleur score.",
      en: "Multiplayer space shoot 'em up built with TypeScript/Node.js and Socket.io. The player controls a dinosaur, destroys enemies, and aims for the highest score."
    },
    context: {
      fr: "SAÉ S4 – IUT Informatique, Université de Lille",
      en: "SAÉ S4 – IUT Computer Science, Université de Lille"
    },
    teamType: { fr: "Groupe de 3 – Les Papas Pingouin", en: "Group of 3 – Les Papas Pingouin" },
    role: {
      fr: "Développement de la logique de jeu (Canvas API), implémentation de la communication temps réel avec Socket.io, contribution à l'architecture client-serveur TypeScript/Node.js, et développement du Mode Histoire (4 missions).",
      en: "Developed the game logic (Canvas API), implemented real-time communication with Socket.io, contributed to the TypeScript/Node.js client-server architecture, and developed the Story Mode (4 missions)."
    },
    hardSkills: {
      fr: ["TypeScript", "Node.js", "Socket.io", "Canvas API", "HTML5", "CSS3", "Architecture client-serveur", "Tests unitaires"],
      en: ["TypeScript", "Node.js", "Socket.io", "Canvas API", "HTML5", "CSS3", "Client-server architecture", "Unit testing"]
    },
    softSkills: {
      fr: ["Travail en équipe", "Communication technique", "Gestion de projet", "Adaptabilité", "Résolution de problèmes"],
      en: ["Teamwork", "Technical communication", "Project management", "Adaptability", "Problem-solving"]
    },
    reflection: {
      fr: "Ce projet a été le plus ambitieux de ma formation. La migration d'un jeu solo vers une architecture multijoueur m'a forcé à comprendre les enjeux de la synchronisation en temps réel. La principale difficulté a été de séparer le code existant entre /client, /server et /common. J'ai appris l'importance de concevoir une architecture solide dès le départ et le gain de temps que cela procure sur le long terme.",
      en: "This was the most ambitious project of my degree. Migrating a solo game to a multiplayer architecture forced me to understand real-time synchronisation challenges. The main difficulty was splitting the existing code between /client, /server, and /common. I learned the importance of designing a solid architecture from the start and the long-term time savings it brings."
    },
    img: "./public/WarSteroids.png",
  },
  {
    title: { fr: "Mini Shell", en: "Mini Shell" },
    desc: {
      fr: "2025 > Création d'un Shell interactif en C.",
      en: "2025 > Creating an interactive Shell in C."
    },
    details: {
      fr: "Shell interactif développé en C dans le terminal, avec gestion des processus via fork/exec et des signaux Unix.",
      en: "Interactive shell developed in C within the terminal, with process management via fork/exec and Unix signals."
    },
    context: {
      fr: "TP – Module Systèmes & Réseaux, S2",
      en: "Lab – Systems & Networks module, S2"
    },
    teamType: { fr: "Individuel (Travaux Dirigés)", en: "Solo (Tutorial)" },
    role: {
      fr: "Développement complet du shell : parsing des commandes utilisateur, gestion des processus avec fork/exec, gestion des PID et des signaux, et implémentation des commandes built-in.",
      en: "Full shell development: user command parsing, process management with fork/exec, PID and signal handling, and built-in command implementation."
    },
    hardSkills: {
      fr: ["Langage C", "Programmation système", "fork/exec", "Gestion de processus", "Signaux Unix", "Pointeurs", "Gestion mémoire"],
      en: ["C language", "System programming", "fork/exec", "Process management", "Unix signals", "Pointers", "Memory management"]
    },
    softSkills: {
      fr: ["Rigueur", "Débogage méthodique", "Persévérance", "Autonomie"],
      en: ["Thoroughness", "Methodical debugging", "Perseverance", "Autonomy"]
    },
    reflection: {
      fr: "Développer un shell en C m'a confronté à la programmation bas niveau pour la première fois. La gestion des processus et des signaux Unix m'a permis de comprendre comment un système d'exploitation fonctionne réellement. Ces notions sont fondamentales et m'ont donné une meilleure compréhension des langages de haut niveau que j'utilise au quotidien.",
      en: "Building a shell in C was my first experience with low-level programming. Managing processes and Unix signals gave me a real understanding of how an operating system works under the hood. These fundamentals have improved my understanding of the high-level languages I use daily."
    },
    img: "./public/imageProject/ShellC.png",
  },
  {
    title: { fr: "RTL - Rule The Labyrinth", en: "RTL - Rule The Labyrinth" },
    desc: {
      fr: "2025 > Jeu de labyrinthe en Java avec JavaFX.",
      en: "2025 > Labyrinth game in Java with JavaFX."
    },
    details: {
      fr: "Jeu de labyrinthe développé en Java/FXML en groupe, respectant les principes SOLID et l'architecture MVC.",
      en: "Labyrinth game developed in Java/FXML as a group, following SOLID principles and MVC architecture."
    },
    context: {
      fr: "SAÉ S2 – Module Développement Orienté Objet",
      en: "SAÉ S2 – Object-Oriented Development module"
    },
    teamType: { fr: "Groupe de 4", en: "Group of 4" },
    role: {
      fr: "Développement de la logique de génération du labyrinthe, intégration de l'interface graphique JavaFX/FXML, et participation à la mise en place de l'architecture MVC et des patterns SOLID.",
      en: "Developed the labyrinth generation logic, integrated the JavaFX/FXML graphical interface, and contributed to the MVC architecture and SOLID patterns implementation."
    },
    hardSkills: {
      fr: ["Java", "JavaFX", "FXML", "Principes SOLID", "Architecture MVC", "Génération procédurale", "Tests unitaires"],
      en: ["Java", "JavaFX", "FXML", "SOLID principles", "MVC architecture", "Procedural generation", "Unit testing"]
    },
    softSkills: {
      fr: ["Travail en équipe", "Revue de code", "Communication technique", "Respect des conventions"],
      en: ["Teamwork", "Code review", "Technical communication", "Convention adherence"]
    },
    reflection: {
      fr: "Ce projet m'a initié aux bonnes pratiques du développement orienté objet à travers les principes SOLID. L'architecture MVC a rendu le code plus maintenable et m'a montré pourquoi la séparation des responsabilités est essentielle. La collaboration en groupe m'a aussi appris l'importance d'une communication claire sur les choix d'architecture dès le début.",
      en: "This project introduced me to good OOP practices through SOLID principles. The MVC architecture made the code more maintainable and showed me why separation of concerns is essential. Working in a group also taught me the importance of clear early communication on architectural decisions."
    },
    img: "./public/imageProject/RuleTheLabyrinth.png",
  },
  {
    title: { fr: "One Man One Forest", en: "One Man One Forest" },
    desc: {
      fr: "2025 > Jeu de survie Java en méthode Agile.",
      en: "2025 > Java survival game using Agile methodology."
    },
    details: {
      fr: "Jeu de survie en Java purement dans le terminal, développé en groupe de 5 avec la méthodologie Agile (Scrum).",
      en: "Pure terminal Java survival game developed in a group of 5 using Agile methodology (Scrum)."
    },
    context: {
      fr: "SAÉ S2 – Développement d'une application Java",
      en: "SAÉ S2 – Java application development"
    },
    teamType: { fr: "Groupe de 5 – Méthodologie Agile (Scrum)", en: "Group of 5 – Agile (Scrum) methodology" },
    role: {
      fr: "Développement des mécaniques de survie (gestion des ressources, interactions environnementales), participation active aux sprints Agile, rédaction des user stories et tests des fonctionnalités livrées.",
      en: "Developed survival mechanics (resource management, environmental interactions), actively participated in Agile sprints, wrote user stories, and tested delivered features."
    },
    hardSkills: {
      fr: ["Java", "Programmation orientée objet", "Interfaces CLI (terminal)", "Méthode Agile / Scrum", "Tests unitaires"],
      en: ["Java", "Object-oriented programming", "CLI interfaces (terminal)", "Agile / Scrum methodology", "Unit testing"]
    },
    softSkills: {
      fr: ["Travail en équipe", "Planification", "Gestion du temps", "Adaptation au changement", "Communication"],
      en: ["Teamwork", "Planning", "Time management", "Adaptability", "Communication"]
    },
    reflection: {
      fr: "Ma première expérience avec la méthode Agile. Travailler en sprints avec un groupe de 5 m'a appris à estimer la charge de travail, prioriser les fonctionnalités et livrer régulièrement. Le développement en terminal pur a exigé une grande précision dans la conception des interactions, car aucune interface graphique ne pouvait masquer les manquements.",
      en: "My first experience with Agile methodology. Working in sprints with a group of 5 taught me to estimate workloads, prioritise features, and deliver consistently. Pure terminal development demanded great precision in designing interactions, as no graphical interface could hide shortcomings."
    },
    img: "./public/1man1Forest.png",
  },
  {
    title: { fr: "Ado Match", en: "Ado Match" },
    desc: {
      fr: "2025 > Application d'appariement d'adolescents en Java.",
      en: "2025 > Teenager matching application in Java."
    },
    details: {
      fr: "Application Java permettant d'apparier des adolescents selon des critères définis, avec persistance des données par sérialisation.",
      en: "Java application to match teenagers according to defined criteria, with data persistence through serialisation."
    },
    context: {
      fr: "SAÉ S1 – Module Développement",
      en: "SAÉ S1 – Development module"
    },
    teamType: { fr: "Groupe de 3", en: "Group of 3" },
    role: {
      fr: "Développement de l'algorithme d'appariement, implémentation de la sérialisation/désérialisation Java pour la persistance des profils, et contribution à la conception des classes métier.",
      en: "Developed the matching algorithm, implemented Java serialisation/deserialisation for profile persistence, and contributed to the business class design."
    },
    hardSkills: {
      fr: ["Java", "Sérialisation Java", "Algorithmes de matching", "POO", "Conception de classes"],
      en: ["Java", "Java serialisation", "Matching algorithms", "OOP", "Class design"]
    },
    softSkills: {
      fr: ["Travail en équipe", "Répartition des tâches", "Communication", "Rigueur"],
      en: ["Teamwork", "Task distribution", "Communication", "Thoroughness"]
    },
    reflection: {
      fr: "Première approche de la sérialisation Java, un concept fondamental pour la persistance des données. Ce projet m'a fait prendre conscience de l'importance de concevoir les structures de données et l'algorithme avant de commencer à coder, une habitude que j'ai conservée depuis.",
      en: "First approach to Java serialisation, a fundamental concept for data persistence. This project made me realise the importance of designing data structures and the algorithm before starting to code — a habit I have kept ever since."
    },
    img: "./public/imageProject/AdoMatch.png",
  },
  {
    title: { fr: "Données des JO 1988", en: "1988 Olympic Games Data" },
    desc: {
      fr: "2025 > Initiation aux bases de données relationnelles (SQL/Access).",
      en: "2025 > Introduction to relational databases (SQL/Access)."
    },
    details: {
      fr: "Projet d'initiation aux bases de données relationnelles avec Access et SQL, sur les données des JO d'été 1988.",
      en: "Introduction project to relational databases with Access and SQL, using 1988 Summer Olympics data."
    },
    context: {
      fr: "SAÉ S2 – Module Bases de Données",
      en: "SAÉ S2 – Database module"
    },
    teamType: { fr: "Groupe de 2", en: "Group of 2" },
    role: {
      fr: "Conception du schéma entité-relation, rédaction des requêtes SQL complexes (JOIN, agrégations, sous-requêtes) et création des formulaires Access.",
      en: "Designed the entity-relationship schema, wrote complex SQL queries (JOIN, aggregations, sub-queries), and built Access forms."
    },
    hardSkills: {
      fr: ["SQL", "Microsoft Access", "Bases de données relationnelles", "Modélisation entité-relation", "Requêtes JOIN", "Agrégations SQL"],
      en: ["SQL", "Microsoft Access", "Relational databases", "Entity-relationship modelling", "JOIN queries", "SQL aggregations"]
    },
    softSkills: {
      fr: ["Analyse des besoins", "Rigueur", "Travail en binôme", "Pensée analytique"],
      en: ["Requirements analysis", "Thoroughness", "Pair work", "Analytical thinking"]
    },
    reflection: {
      fr: "Ce projet m'a ouvert les portes des bases de données relationnelles. Modéliser les données des JO m'a appris à réfléchir à la structure des données avant même d'écrire une requête. C'est ma première confrontation avec la gestion de données à grande échelle, une compétence que j'ai approfondie avec JDBC dans les projets Java suivants.",
      en: "This project opened the door to relational databases for me. Modelling Olympic data taught me to think about data structure before writing a single query. It was my first encounter with large-scale data management, a skill I deepened with JDBC in subsequent Java projects."
    },
    img: "./public/imageProject/HiverJO1988.png",
  },
  {
    title: { fr: "Installation VM", en: "VM Installation" },
    desc: {
      fr: "2024 > Mise en place d'une VM Linux.",
      en: "2024 > Setting up a Linux VM."
    },
    details: {
      fr: "Configuration complète d'une machine virtuelle Linux : gestion des utilisateurs, permissions, partitionnement disque et documentation technique.",
      en: "Full configuration of a Linux virtual machine: user management, permissions, disk partitioning, and technical documentation."
    },
    context: {
      fr: "SAÉ S1 – Module Systèmes & Réseaux",
      en: "SAÉ S1 – Systems & Networks module"
    },
    teamType: { fr: "Groupe de 4", en: "Group of 4" },
    role: {
      fr: "Configuration de la VM Linux (Ubuntu), gestion des utilisateurs et des droits, partitionnement des disques, et rédaction de la documentation technique du déploiement.",
      en: "Configured the Linux VM (Ubuntu), managed users and permissions, partitioned disks, and wrote the technical deployment documentation."
    },
    hardSkills: {
      fr: ["Linux / Ubuntu", "Administration système", "Gestion des utilisateurs & permissions", "Partitionnement disque", "Bash", "Virtualisation"],
      en: ["Linux / Ubuntu", "System administration", "User & permission management", "Disk partitioning", "Bash", "Virtualisation"]
    },
    softSkills: {
      fr: ["Rigueur", "Rédaction de documentation", "Travail en équipe", "Méthode"],
      en: ["Thoroughness", "Technical writing", "Teamwork", "Methodical approach"]
    },
    reflection: {
      fr: "Ce projet m'a initié à l'administration système Linux, un environnement fondamental dans le développement professionnel. Comprendre la gestion des permissions et des utilisateurs m'a donné une meilleure vision de la sécurité des systèmes. La rédaction de la documentation technique m'a également appris l'importance de laisser des traces claires pour les futurs intervenants.",
      en: "This project introduced me to Linux system administration, a fundamental environment in professional development. Understanding user and permission management gave me a better view of system security. Writing technical documentation also taught me the importance of leaving clear records for future team members."
    },
    img: "./public/imageProject/InstallationReseau.png",
  },
  {
    title: { fr: "Ride With Spotify", en: "Ride With Spotify" },
    desc: {
      fr: "2024 > Premier site web en HTML/CSS.",
      en: "2024 > First website in HTML/CSS."
    },
    details: {
      fr: "Site simulant une application de covoiturage, développé en HTML/CSS pur en groupe de 3 lors du premier semestre.",
      en: "Site simulating a carpooling application, built in pure HTML/CSS in a group of 3 during the first semester."
    },
    context: {
      fr: "SAÉ S1 – Module Développement Web",
      en: "SAÉ S1 – Web Development module"
    },
    teamType: { fr: "Groupe de 3", en: "Group of 3" },
    role: {
      fr: "Maquettage des pages principales, développement de l'interface CSS (mise en page Flexbox, design responsive) et intégration des éléments HTML sémantiques.",
      en: "Wireframed the main pages, developed the CSS interface (Flexbox layout, responsive design), and integrated semantic HTML elements."
    },
    hardSkills: {
      fr: ["HTML5 sémantique", "CSS3", "Flexbox", "Design responsive", "Maquettage"],
      en: ["Semantic HTML5", "CSS3", "Flexbox", "Responsive design", "Wireframing"]
    },
    softSkills: {
      fr: ["Créativité", "Travail en équipe", "Sens de l'esthétique", "Gestion des délais"],
      en: ["Creativity", "Teamwork", "Aesthetic sense", "Deadline management"]
    },
    reflection: {
      fr: "Mon premier projet web en groupe, et le début de ma passion pour le développement front-end. Ce site m'a appris les bases de la mise en page avec Flexbox et l'importance d'un design cohérent. C'est ici que j'ai réalisé que transformer une maquette en site fonctionnel procure une vraie satisfaction.",
      en: "My first group web project, and the start of my passion for front-end development. This site taught me the foundations of layout with Flexbox and the importance of consistent design. It is where I realised the satisfaction of turning a wireframe into a working website."
    },
    img: "./public/imageProject/RideWithSpotify.png",
  },
  {
    title: { fr: "CompilFighter", en: "CompilFighter" },
    desc: {
      fr: "2024 > Premier projet universitaire en informatique.",
      en: "2024 > First university computer science project."
    },
    details: {
      fr: "Jeu de combat tour par tour ludo-pédagogique développé en IJava (Java simplifié).",
      en: "Educational turn-based combat game developed in IJava (simplified Java)."
    },
    context: {
      fr: "SAÉ S1 – Premier projet informatique universitaire",
      en: "SAÉ S1 – First university computer science project"
    },
    teamType: { fr: "Groupe de 2", en: "Group of 2" },
    role: {
      fr: "Co-développement du moteur de combat tour par tour, conception des mécaniques de jeu pédagogiques, implémentation des règles de combat et tests des scénarios de jeu.",
      en: "Co-developed the turn-based combat engine, designed the educational game mechanics, implemented combat rules, and tested game scenarios."
    },
    hardSkills: {
      fr: ["IJava (Java simplifié)", "Logique de programmation", "Structures de contrôle", "Bases de la POO"],
      en: ["IJava (simplified Java)", "Programming logic", "Control structures", "OOP fundamentals"]
    },
    softSkills: {
      fr: ["Pair programming", "Curiosité", "Persévérance", "Communication", "Résolution de problèmes"],
      en: ["Pair programming", "Curiosity", "Perseverance", "Communication", "Problem-solving"]
    },
    reflection: {
      fr: "Mon tout premier projet universitaire en informatique. Développer un jeu en IJava m'a permis d'appliquer pour la première fois les concepts théoriques vus en cours. Concevoir un système de combat équilibré et ludique a été un vrai défi créatif qui m'a montré que la programmation n'est pas seulement technique : elle demande aussi de la créativité et de l'empathie pour l'utilisateur.",
      en: "My very first university project in computer science. Building a game in IJava let me apply theoretical concepts for the first time. Designing a balanced, fun combat system was a real creative challenge that showed me programming is not purely technical — it also demands creativity and empathy for the user."
    },
    img: "./public/imageProject/CompilFighter.png",
  }
];

const certifications = [
  {
    title: { fr: "BAC Général", en: "High School Diploma" },
    desc: {
      fr: "Baccalauréat général – Spécialités Maths & NSI – 2024",
      en: "General Baccalaureate – Maths & Computer Science – 2024"
    },
    img: "./public/imageProject/BacGeneral.png",
  },
  {
    title: { fr: "Java", en: "Java" },
    desc: {
      fr: "POO, MVC, JavaFX, principes SOLID, JDBC.",
      en: "OOP, MVC, JavaFX, SOLID principles, JDBC."
    },
    img: "./public/imageProject/JavaLogo.avif",
  },
  {
    title: { fr: "SQL", en: "SQL" },
    desc: {
      fr: "BDD relationnelles, requêtes complexes (SELECT, JOIN), intégration JDBC.",
      en: "Relational databases, complex queries (SELECT, JOIN), JDBC integration."
    },
    img: "./public/imageProject/SQLLogo.png",
  },
  {
    title: { fr: "C", en: "C" },
    desc: {
      fr: "Programmation bas niveau, pointeurs, processus, forks, OS.",
      en: "Low-level programming, pointers, processes, forks, OS interaction."
    },
    img: "./public/imageProject/CLogo.webp",
  },
  {
    title: { fr: "TypeScript / Node.js", en: "TypeScript / Node.js" },
    desc: {
      fr: "Architecture client-serveur, Socket.io, typage statique.",
      en: "Client-server architecture, Socket.io, static typing."
    },
    img: "./public/imageProject/MarkdownLogo.svg",
  },
  {
    title: { fr: "HTML", en: "HTML" },
    desc: {
      fr: "Structuration sémantique, accessibilité, intégration de contenu.",
      en: "Semantic structuring, accessibility, content integration."
    },
    img: "./public/imageProject/HTMLLogo.png",
  },
  {
    title: { fr: "CSS", en: "CSS" },
    desc: {
      fr: "Flexbox, Grid, animations, responsive design.",
      en: "Flexbox, Grid, animations, responsive design."
    },
    img: "./public/imageProject/CSSLogo.avif",
  },
  {
    title: { fr: "Python", en: "Python" },
    desc: {
      fr: "Logique de programmation, traitement de données, manipulation de fichiers.",
      en: "Programming logic, data processing, file manipulation."
    },
    img: "./public/imageProject/PythonLogo.jpg",
  }
];


const languageSelector = document.getElementById("language-selector");

languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  populateModals(selectedLang);
});

populateModals("fr");

function createProjectCard(project, withView = true, lang = "fr") {
  const l = lang === "fr" ? {
    view: "Voir",
    context: "Contexte",
    team: "Organisation",
    role: "Mon rôle",
    hardSkills: "Compétences techniques",
    softSkills: "Compétences transversales",
    reflection: "Analyse réflexive"
  } : {
    view: "View",
    context: "Context",
    team: "Team",
    role: "My role",
    hardSkills: "Technical skills",
    softSkills: "Transferable skills",
    reflection: "Reflective analysis"
  };

  const detailsModal = withView ? `
    <div class="project-details-modal">
      <div class="details-content">
        <span class="close-details">&times;</span>
        <h3>${project.title[lang]}</h3>
        <img src="${project.img}" alt="${project.title[lang]}">
        <p class="details-intro">${project.details[lang]}</p>

        ${project.context ? `
        <div class="details-meta">
          <span class="details-badge">${project.context[lang]}</span>
          ${project.teamType ? `<span class="details-badge">${project.teamType[lang]}</span>` : ""}
        </div>` : ""}

        ${project.role ? `
        <div class="details-section">
          <h4>${l.role}</h4>
          <p>${project.role[lang]}</p>
        </div>` : ""}

        ${project.hardSkills ? `
        <div class="details-section">
          <h4>${l.hardSkills}</h4>
          <div class="skills-tags">
            ${project.hardSkills[lang].map(s => `<span class="skill-tag hard">${s}</span>`).join("")}
          </div>
        </div>` : ""}

        ${project.softSkills ? `
        <div class="details-section">
          <h4>${l.softSkills}</h4>
          <div class="skills-tags">
            ${project.softSkills[lang].map(s => `<span class="skill-tag soft">${s}</span>`).join("")}
          </div>
        </div>` : ""}

        ${project.reflection ? `
        <div class="details-section">
          <h4>${l.reflection}</h4>
          <p>${project.reflection[lang]}</p>
        </div>` : ""}
      </div>
    </div>` : "";

  return `
    <div class="card">
      <div class="image">
        <img src="${project.img}" alt="${project.title[lang]}" />
      </div>
      <div class="content">
        <h3 class="title">${project.title[lang]}</h3>
        <p class="desc">${project.desc[lang]}</p>
        ${withView ? `<button class="action view-btn">${l.view}</button>` : ""}
      </div>
      ${detailsModal}
    </div>
  `;
}

function populateModals(lang = "fr") {
  personalModal.innerHTML = `
    <div class="personal-projects-grid">
      ${personalProjects.map(p => createProjectCard(p, true, lang)).join("")}
    </div>
  `;

  universityModal.innerHTML = `
    <div class="university-projects-grid">
      ${universityProjects.map(p => createProjectCard(p, true, lang)).join("")}
    </div>
  `;

  certificationsModal.innerHTML = `
    <div class="certifications-grid">
      ${certifications.map(c => createProjectCard(c, false, lang)).join("")}
    </div>
  `;

  attachModalEvents();
}

function attachModalEvents() {
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.onclick = (e) => {
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

function showModal(modalToShow, btnToHighlight, shouldScroll = true) {
  [personalModal, certificationsModal, universityModal].forEach(modal => {
    modal.classList.remove("show");
    modal.style.opacity = "0";
  });

  modalToShow.classList.add("show");
  setTimeout(() => modalToShow.style.opacity = "1", 10);

  if (shouldScroll) {
    const elementPosition = btnPersonal.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - 168;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

  [btnPersonal, btnCertifications, btnUniversity].forEach(btn => {
    btn.style.backgroundColor = "transparent";
  });
  btnToHighlight.style.backgroundColor = "rgba(107, 104, 128, 0.6)";
}

populateModals();
showModal(universityModal, btnUniversity, false);

btnPersonal.addEventListener("click", () => showModal(personalModal, btnPersonal));
btnUniversity.addEventListener("click", () => showModal(universityModal, btnUniversity));
btnCertifications.addEventListener("click", () => showModal(certificationsModal, btnCertifications));
