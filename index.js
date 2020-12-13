function onEditChange(e) {
  document.getElementById("images").classList.remove("edited");
  if (e.target.checked) {
    document.getElementById("images").classList.add("edited");
  }
}

function onPopUpOpen() {
  document.getElementById("popup").classList.remove("popup-hidden");
}

function onPopUpClose() {
  document.getElementById("popup").classList.add("popup-hidden");
}

document
  .getElementById("edit-checkbox")
  .addEventListener("change", onEditChange);

function goToSection(id) {
  window.location.hash = id;
}
