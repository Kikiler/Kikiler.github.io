function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-div">
    <a href="https://www.linkedin.com/company/eset-ecam-solar-endurance-team"> <img class="linkedinLogo" src="/ressources/LIlogo.png"/></a>
    <span>© ECAM Solar Endurance Team — ESET</span>
    <a href="https://www.instagram.com/eset_ecam/"> <img class="instaLogo" src="/ressources/Instalogo.png"/> </a> 
    </div>
  `;
  document.body.appendChild(footer);
}

createFooter();