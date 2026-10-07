/**
 * crew.js — Dynamically counts active crew members from team_data.json
 * and injects the total into #crewMemberCount on the About page.
 * A member is considered active if their category does NOT
 * contain the word "past".
 */
(async function () {
  const countEl = document.getElementById("crewMemberCount");
  if (!countEl) return; // only runs on pages that have this element

  try {
    let res;
    try {
      res = await fetch("/team/team_data.json");
      if (!res.ok) throw new Error();
    } catch (_) {
      res = await fetch("team_data.json");
      if (!res.ok) throw new Error();
    }
    const teamMembers = await res.json();
    let activeCount = 0;

    teamMembers.forEach((member) => {
      const categories = (member.category || "")
        .toLowerCase()
        .trim()
        .split(/\s+/);

      // Count only if "past" is not in the category string
      if (!categories.includes("past")) {
        activeCount++;
      }
    });

    countEl.textContent = activeCount;
  } catch (err) {
    // Fallback: leave the dash in place rather than breaking the page
    console.error("Failed to load crew members:", err);
    countEl.textContent = "—";
  }
})();
