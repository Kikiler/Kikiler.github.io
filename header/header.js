function createHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="nav">
      <a href="/" class="nav-brand">ESET <span>/ Student Racing</span></a>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about/about.html">About</a></li>
        <li><a href="/sponsors/sponsors.html">Sponsors</a></li>
        <li><a href="/join/join.html">Join</a></li>
      </ul>
    </nav>
  `;
  document.body.insertAdjacentElement("afterbegin", header);
}

createHeader();