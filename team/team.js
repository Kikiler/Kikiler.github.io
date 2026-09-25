import { teamMembers } from "./team_data.js";
document.addEventListener("DOMContentLoaded", () => {
  const teamGrid = document.getElementById("teamGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Fonction pour afficher les membres dans la grille
  function renderMembers(filter = "all") {
    teamGrid.innerHTML = "";

    // Filtrer les membres
    const filteredMembers = teamMembers.filter(member => {
      if (filter === "all") return true;
      // Gère le cas où un membre a plusieurs catégories (ex: "past chassis")
      return member.category.includes(filter);
    });

    // Générer le HTML pour chaque membre
    filteredMembers.forEach(member => {
      const article = document.createElement("article");
      article.className = "member-card";
      article.setAttribute("data-category", member.category);

      // Génération dynamique des tags
      const tagsHTML = member.tags.map((tag, index) => {
        // Applique une classe spécifique si définie (ex: past-tag pour Lucas)
        const tagClass = (index === 0 && member.customTagClass) ? `tag ${member.customTagClass}` : "tag";
        return `<span class="${tagClass}">${tag}</span>`;
      }).join("");

      // Récupération de la classe de badge (ex: leadership, chassis, etc.)
      // On prend le premier mot de la catégorie pour la classe CSS du badge
      const mainCategoryClass = member.category.split(" ")[0];

      article.innerHTML = `
        <div class="member-image-wrap">
          <img src="${member.image}" alt="${member.name}" loading="lazy" class="member-img" data-initials="${member.initials}" />
          <span class="dept-badge ${mainCategoryClass}">${member.badgeText}</span>
        </div>
        <div class="member-info">
          <h3 class="member-name">${member.name}</h3>
          <p class="member-role">${member.role}</p>
          <p class="member-bio">${member.bio}</p>
          <div class="member-tags">
            ${tagsHTML}
          </div>
        </div>
      `;

      teamGrid.appendChild(article);
    });
  }

  // Affichage initial de tous les membres au chargement de la page
  renderMembers("all");

  // Gestion des clics sur les boutons de filtre
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Retirer la classe 'active' de tous les boutons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Ajouter la classe 'active' au bouton cliqué
      button.classList.add("active");

      // Récupérer le filtre ciblé
      const filterValue = button.getAttribute("data-filter");
      renderMembers(filterValue);
    });
  });
});

