let button = document.getElementById("menuButton");
button.addEventListener("click", () => {
  let hiddenButton = document.getElementById("hiddenMenuButton");
  let sectionOverview = document.getElementById("sectionOverview");
  hiddenButton.className = "menuButton";
  sectionOverview.className = "sectionListContainer";
  button.className = "menuButtonHidden";
});

let hiddenButton = document.getElementById("hiddenMenuButton");
hiddenButton.addEventListener("click", () => {
  button.className = "menuButton";
  let hiddenButton = document.getElementById("hiddenMenuButton");
  let sectionOverview = document.getElementById("sectionOverview");
  hiddenButton.className = "menuButtonHidden";
  sectionOverview.className = "sectionListContainerHidden";
});

