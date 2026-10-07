const tierDetails = {
  gold: {
    label: "Gold Tier",
    description: "Title partners. Logo on the hood and roof."
  },
  silver: {
    label: "Silver Tier",
    description: "Logo on the doors and team apparel."
  },
  bronze: {
    label: "Bronze Tier",
    description: "Logo on the rear bumper and website."
  }
};

function createSponsorCard(sponsor, tier) {
  const isLink = Boolean(sponsor.url && sponsor.url.trim());
  const card = document.createElement(isLink ? "a" : "article");
  card.className = "sponsor-card";

  if (isLink) {
    card.href = sponsor.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("aria-label", `${sponsor.name} — visit website`);
  }

  const logo = document.createElement("div");
  logo.className = "sponsor-logo";

  if (sponsor.photoPath) {
    const image = document.createElement("img");
    image.src = sponsor.photoPath;
    image.alt = `${sponsor.name} logo`;
    logo.appendChild(image);
  } else {
    logo.textContent = sponsor.name.charAt(0).toUpperCase();
  }

  const details = document.createElement("div");
  const name = document.createElement("h4");
  name.textContent = sponsor.name;
  const sector = document.createElement("p");
  sector.textContent = sponsor.sector;
  details.append(name, sector);

  card.append(logo, details);
  card.classList.add(`sponsor-card-${tier}`);
  return card;
}

function createTier(tier, sponsors = []) {
  const details = tierDetails[tier];
  const section = document.createElement("section");
  section.className = `tier tier-${tier}`;

  const heading = document.createElement("header");
  heading.className = "tier-head";
  heading.innerHTML = `
    <span class="tier-medal">●</span>
    <div>
      <h3>${details.label}</h3>
      <p>${details.description}</p>
    </div>
  `;

  const grid = document.createElement("div");
  grid.className = "sponsor-grid";

  const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
  if (tierSponsors.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "sponsor-empty";
    emptyMessage.textContent = "Your company could be here.";
    grid.appendChild(emptyMessage);
  } else {
    tierSponsors.forEach((sponsor) => {
      grid.appendChild(createSponsorCard(sponsor, tier));
    });
  }

  section.append(heading, grid);
  return section;
}

async function loadSponsors() {
  try {
    const response = await fetch("sponsor_data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    const response = await fetch("/sponsors/sponsor_data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

async function renderSponsors() {
  const sponsorTiers = document.getElementById("sponsor-tiers");
  if (!sponsorTiers) return;

  let sponsors = [];
  try {
    sponsors = await loadSponsors();
  } catch (error) {
    console.error("Failed to load sponsor data from sponsor_data.json:", error);
  }

  sponsorTiers.innerHTML = "";
  ["gold", "silver", "bronze"].forEach((tier) => {
    sponsorTiers.appendChild(createTier(tier, sponsors));
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderSponsors);
} else {
  renderSponsors();
}
