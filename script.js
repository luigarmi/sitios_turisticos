document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.menu a');
  const currentURL = window.location.href;

  links.forEach(link => {
    if (currentURL.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // Lógica de formulario (contacto.html)
  const formulario = document.getElementById('formulario');
  const respuesta = document.getElementById('respuesta');

  if (formulario) {
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const mensaje = document.getElementById('mensaje').value;

      if(nombre && correo && mensaje) {
        respuesta.innerHTML = `<p>¡Gracias, ${nombre}! Hemos recibido tu mensaje.</p>`;
        formulario.reset();
      } else {
        respuesta.innerHTML = `<p style="color:red;">Por favor, completa todos los campos.</p>`;
      }
    });
  }
});