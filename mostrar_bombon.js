function abrirModal(imagen, titulo, descripcion) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = imagen;
  document.getElementById("modal-title").innerText = titulo;
  document.getElementById("modal-description").innerText = descripcion;
}
  
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    cerrarModal();
  }
}
