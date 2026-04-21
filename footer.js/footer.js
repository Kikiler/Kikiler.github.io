function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>© ECAM Solar Endurance Team — ESET</p>
  `;
  document.body.appendChild(footer);
}

createFooter();