document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const memberCards = document.querySelectorAll(".member-card");

  // Handle department filter tabs
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      memberCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("is-hidden");
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 30);
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  // Graceful offline fallback for profile images
  const memberImages = document.querySelectorAll(".member-img");
  memberImages.forEach((img) => {
    img.addEventListener("error", () => {
      const initials = img.getAttribute("data-initials") || "ES";
      const fallback = document.createElement("div");
      fallback.className = "avatar-fallback";
      fallback.textContent = initials;
      img.replaceWith(fallback);
    });
  });
});
