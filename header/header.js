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
      <ul class="nav-links">
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
      <ul class="nav-links">
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
      <ul class="nav-links">
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
      <ul class="nav-links">
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
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about/about.html">About</a></li>
        <li><a href="/sponsors/sponsors.html">Sponsors</a></li>
        <li><a href="/join/join.html">Join</a></li>
      </ul>
    </nav>
    </div>`;
  }

  document.body.insertAdjacentElement("afterbegin", header);
}

createHeader();
