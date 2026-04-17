
document.addEventListener("DOMContentLoaded", () => {
    let monthSincefoundation = document.getElementById("timeSinceTheBeginning");
let startDate = new Date(2025, 10, 1);
let now = new Date();
monthSincefoundation.textContent = Math.round((now-startDate)/(1000*60*60*24),0) + " days";
console.log(monthSincefoundation);
});

