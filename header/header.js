function createHeader() {
  const header = document.createElement("header");
  if (document.title.includes("ECAM Solar Endurance TEAM")) {
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
        <li><a class = "active" href="/">Home</a></li>
        <li><a href="/about/about.html">About</a></li>
        <li><a href="/sponsors/sponsors.html">Sponsors</a></li>
        <li><a href="/join/join.html">Join</a></li>
      </ul>
    </nav>
    </div>
    `;
  } else if (document.title.includes("About")) {
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
        <li><a href="/">Home</a></li>
        <li><a class="active" href="/about/about.html">About</a></li>
        <li><a href="/sponsors/sponsors.html">Sponsors</a></li>
        <li><a href="/join/join.html">Join</a></li>
      </ul>
    </nav>
    </div>`;
  } else if (document.title.includes("Sponsors")) {
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
        <li><a href="/">Home</a></li>
        <li><a href="/about/about.html">About</a></li>
        <li><a class="active" href="/sponsors/sponsors.html">Sponsors</a></li>
        <li><a href="/join/join.html">Join</a></li>
      </ul>
    </nav>
    </div>`;
  } else if (document.title.includes("Join")) {
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
        <li><a href="/">Home</a></li>
        <li><a href="/about/about.html">About</a></li>
        <li><a href="/sponsors/sponsors.html">Sponsors</a></li>
        <li><a class="active" href="/join/join.html">Join</a></li>
      </ul>
    </nav>
    </div>`;
  } else {
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
        <li><a href="/">Home</a></li>
        <li><a href="/about/about.html">About</a></li>
        <li><a href="/sponsors/sponsors.html">Sponsors</a></li>
        <li><a href="/join/join.html">Join</a></li>
      </ul>
    </nav>
    </div>`;
  }

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
