// Mostrar nombre de usuario en el menú si hay sesión iniciada
window.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioDatos"));
  const userNameDisplay = document.getElementById("userNameDisplay");

  if (usuario && userNameDisplay) {
    userNameDisplay.textContent = usuario.nombres;
  }

  // Mostrar datos en el perfil
  if (usuario) {
    document.getElementById("nombreUsuario").textContent = usuario.nombres;
    document.getElementById("apellidoUsuario").textContent = usuario.apellidos;
    document.getElementById("dniUsuario").textContent = usuario.dni;
  }

  // Cerrar sesión
  const btnCerrarSesion = document.getElementById("cerrarSesionBtn");
  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", () => {
      localStorage.removeItem("usuarioLogueado");
      localStorage.removeItem("usuarioDatos");
      window.location.href = "index.html";
    });
  }
});
