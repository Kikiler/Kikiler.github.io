const sponsors = []; /* to add a sponsor edit the array as follows {
    name: "Company Name",
    photoPath: "/ressources/company-logo.png",
    sector: "Automotive",
    tier: "gold"
  }*/

const tierDetails = {
  gold: {
    label: "Gold Tier",
    description: "5,000€+ - Title partners. Logo on the hood and roof."
  },
  silver: {
    label: "Silver Tier",
    description: "1,000€-5,000€ - Logo on the doors and team apparel."
  },
  bronze: {
    label: "Bronze Tier",
    description: "Logo on the rear bumper and website."
  }
};

function createSponsorCard(sponsor, tier) {
  const card = document.createElement("article");
  card.className = "sponsor-card";

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

function createTier(tier) {
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

const sponsorTiers = document.getElementById("sponsor-tiers");
["gold", "silver", "bronze"].forEach((tier) => {
  sponsorTiers.appendChild(createTier(tier));
});
