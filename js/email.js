window.addEventListener('load', function() {
  emailjs.init('kBZ8EPMogUnhwf9rj'); // Inicializar después de que todo cargue

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_oe2f0fr', 'template_48mj33e', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Mensaje enviado exitosamente 💌");
      }, function(error) {
        console.error('FAILED...', error);
        alert("Error al enviar el mensaje 😥 Revisa la consola para más detalles.");
      });
  });
});
