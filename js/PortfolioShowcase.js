// Récupération des modals
const portfolio = document.getElementById("modal1");
const certification = document.getElementById("modal2");
const skills = document.getElementById("modal3");
const university = document.getElementById("modal4");

// Récupération des boutons
const btnPortfolio = document.getElementById("btn-choix1");
const btnCertification = document.getElementById("btn-choix2");
const btnSkills = document.getElementById("btn-choix3");
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
    title: "University Project 1",
    desc: "Project for university assignment",
    details: "Built as part of a team to develop a web application using HTML, CSS, and JavaScript.",
    img: "./public/IMG_7267.webp",
  }
];

const certifications = [
  {
    title: "Web Development Certificate",
    desc: "Completed online course",
    details: "Certificate earned for completing a full-stack web development program.",
    img: "./public/IMG_7267.webp",
  }
];

const skillsList = [
  { name: "HTML", color: "#e86026" },
  { name: "CSS", color: "#0f6cac" },
  { name: "JavaScript", color: "#f4dd1b" },
  { name: "Git", color: "#ed4b26" }
];

// Crée une carte de projet avec modal interne pour détails et image
function createProjectCard(project) {
  return `
    <div class="card">
      <div class="image">
        <img src="${project.img}" alt="${project.title}" />
      </div>
      <div class="content">
        <h3 class="title">${project.title}</h3>
        <p class="desc">${project.desc}</p>
        <button class="action view-btn">View</button>
      </div>
      <div class="project-details-modal">
        <div class="details-content">
          <span class="close-details">&times;</span>
          <h3>${project.title}</h3>
          <img src="${project.img}" alt="${project.title}" style="width:100%; max-width:400px; border-radius:10px; margin: 20px 0;">
          <p>${project.details}</p>
        </div>
      </div>
    </div>
  `;
}

// Crée une carte de compétence
function createSkillCard(skill) {
  return `
    <div class="skilsItem">
      <h3 style="color:${skill.color}">${skill.name}</h3>
    </div>
  `;
}

// Injection des contenus dans les modals
function populateModals() {
  portfolio.innerHTML = `<div class="webProject">${personalProjects.map(createProjectCard).join("")}</div>`;
  university.innerHTML = `<div class="universityProject">${universityProjects.map(createProjectCard).join("")}</div>`;
  certification.innerHTML = `<div id="certificationContaineur">${certifications.map(createProjectCard).join("")}</div>`;
  skills.innerHTML = `<div id="skilsContaineur">${skillsList.map(createSkillCard).join("")}</div>`;

  // Ajout des événements pour les boutons "View" et fermer les détails
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const detailsModal = e.target.closest(".card").querySelector(".project-details-modal");
      detailsModal.style.display = "flex";
    });
  });

  document.querySelectorAll(".close-details").forEach((span) => {
    span.addEventListener("click", (e) => {
      const modal = e.target.closest(".project-details-modal");
      modal.style.display = "none";
    });
  });
}

// Appel pour remplir les modals dès le chargement
populateModals();

// Fonction pour afficher un modal principal
function showModal(modalToShow, btnToHighlight) {
  [portfolio, certification, skills, university].forEach(modal => {
    modal.classList.remove("show");
    modal.style.opacity = "0";
  });

  modalToShow.classList.add("show");
  setTimeout(() => modalToShow.style.opacity = "1", 10);

  const offset = btnPortfolio.offsetTop;
  window.scrollTo({ top: offset - 50, behavior: "smooth" });

  [btnPortfolio, btnCertification, btnSkills, btnUniversity].forEach(btn => {
    btn.style.backgroundColor = "transparent";
  });
  btnToHighlight.style.backgroundColor = "rgba(107, 104, 128, 0.6)";
}

// Affichage par défaut des projets personnels
showModal(portfolio, btnPortfolio);

// Événements pour les boutons principaux
btnPortfolio.addEventListener("click", () => showModal(portfolio, btnPortfolio));
btnUniversity.addEventListener("click", () => showModal(university, btnUniversity));
btnCertification.addEventListener("click", () => showModal(certification, btnCertification));
btnSkills.addEventListener("click", () => showModal(skills, btnSkills));
