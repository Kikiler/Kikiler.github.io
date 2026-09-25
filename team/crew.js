/**
 * crew.js — Dynamically counts active crew members from the teamMembers array
 * and injects the total into #crewMemberCount on the About page.
 * A member is considered active if their category does NOT
 * contain the word "past".
 */
import { teamMembers } from "./team_data.js";
(function () {
  const countEl = document.getElementById("crewMemberCount");
  if (!countEl) return; // only runs on pages that have this element

  // Team members data source (can also be imported if stored in a shared data file)
  try {
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
    countEl.textContent = "—";
  }
})();
