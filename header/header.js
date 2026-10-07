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
      <a href="/" aria-label="ECAM Solar Endurance Team Homepage">
        <img class="esc-logo" src="/ressources/logo.png" alt="logo of the ecam solar endurance team"/>
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="/" class="nav-brand">ESET <span>/ Student Racing</span></a>
        <ul class="nav-links">
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
}

createHeader();
