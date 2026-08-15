function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-div">
    <a href="https://www.linkedin.com/eset" class="linkedinLogo"> LinkedInLogo </a>
    <a href="https://www.instagram.com/eset_ecam" class="instaLogo"> InstagramLogo </a> 
    <span>© ECAM Solar Endurance Team — ESET</span>
    </div>
  `;
  document.body.appendChild(footer);
}

createFooter();