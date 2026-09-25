function createHeader() {
  const header = document.createElement("header");
  const title = document.title;
  const path = window.location.pathname;

  let activePage = "home";
  if (path.includes("/about") || title.startsWith("About")) {
    activePage = "about";
  } else if (path.includes("/join") || title.includes("Join")) {
    activePage = "join";
  } else if (path.includes("/team") || (title.includes("Team") && !title.includes("Join") && !title.includes("ECAM Solar Endurance TEAM"))) {
    activePage = "team";
  } else if (path.includes("/sponsors") || title.includes("Sponsors")) {
    activePage = "sponsors";
  } else if (path === "/" || path.endsWith("/index.html") || title.includes("ECAM Solar Endurance TEAM")) {
    activePage = "home";
  }

  header.innerHTML = `
    <div class="nav-container">
      <a href="/">
        <img class="esc-logo" src="/ressources/logo.png" alt="logo of the ecam solar endurance team"/>
      </a>
      <nav class="nav">
        <a href="/" class="nav-brand">ESET <span>/ Student Racing</span></a>
        <button class="menu-toggle" type="button" aria-controls="site-menu" aria-expanded="false" aria-label="Open navigation menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="site-menu">
          <li><a class="${activePage === 'home' ? 'active' : ''}" href="/">Home</a></li>
          <li><a class="${activePage === 'about' ? 'active' : ''}" href="/about/about.html">About</a></li>
          <li><a class="${activePage === 'team' ? 'active' : ''}" href="/team/team.html">Team</a></li>
          <li><a class="${activePage === 'sponsors' ? 'active' : ''}" href="/sponsors/sponsors.html">Sponsors</a></li>
          <li><a class="${activePage === 'join' ? 'active' : ''}" href="/join/join.html">Join</a></li>
        </ul>
      </nav>
    </div>
  `;

  document.body.insertAdjacentElement("afterbegin", header);

  const menuToggle = header.querySelector(".menu-toggle");
  const menu = header.querySelector(".nav-links");

  function closeMenu() {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  menu.addEventListener("click", closeMenu);
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

createHeader();
