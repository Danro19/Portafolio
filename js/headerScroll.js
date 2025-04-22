const header = document.getElementById('mainHeader');
let lastScrollY = window.scrollY;

      window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
          // Scroll hacia abajo -> ocultar y hacer transparente
          header.style.transform = 'translateY(-100%)';
          header.style.opacity = '0.7'; // Reducir opacidad
        } else {
          // Scroll hacia arriba -> mostrar y recuperar opacidad
          header.style.transform = 'translateY(0)';
          header.style.opacity = '1'; // Opacidad completa
        }
        lastScrollY = window.scrollY;
      });