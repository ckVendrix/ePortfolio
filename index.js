function onEditChange(e) {
  document.getElementById("images").classList.remove("edited");
  if (e.target.checked) {
    document.getElementById("images").classList.add("edited");
  }
}

document
  .getElementById("edit-checkbox")
  .addEventListener("change", onEditChange);

function goToSection(id) {
  window.location.hash = id;
}
