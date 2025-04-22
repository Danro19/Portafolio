document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_oe2f0fr', 'template_7xux6xh', this)
      .then(() => {
        alert("Mensaje enviado exitosamente 💌");
      }, (error) => {
        alert("Error al enviar el mensaje 😥");
        console.log(error);
      });
  });
  