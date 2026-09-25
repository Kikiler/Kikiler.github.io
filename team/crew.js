/**
 * crew.js — Dynamically counts active crew members from team.html
 * and injects the total into #crewMemberCount on the About page.
 * A member is considered active if their data-category does NOT
 * contain the word "past".
 */
(function () {
  const countEl = document.getElementById("crewMemberCount");
  if (!countEl) return; // only runs on pages that have this element

  fetch("/team/team.html")
    .then((res) => {
      if (!res.ok) throw new Error("Could not load team.html");
      return res.text();
    })
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const allCards = doc.querySelectorAll(".member-card[data-category]");
      let activeCount = 0;
      allCards.forEach((card) => {
        const categories = (card.getAttribute("data-category") || "")
          .trim()
          .split(/\s+/);
        if (!categories.includes("past")) {
          activeCount++;
        }
      });

      countEl.textContent = activeCount;
    })
    .catch(() => {
      // Fallback: leave the dash in place rather than breaking the page
      countEl.textContent = "—";
    });
})();
