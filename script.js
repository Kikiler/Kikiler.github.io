// Apex Student Racing — page interactions
document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("joinTeam");
  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      window.location.href = "/join/join.html";
    });
  }
});
