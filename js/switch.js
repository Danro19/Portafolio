const toggle = document.getElementById('toggleSwitch');
      const text = document.getElementById('switchText');
      const switchBg = document.getElementById('switchBackground');
      const switchCircle = document.getElementById('switchCircle');
      const body = document.getElementById('body');
      const logoImg = document.getElementById('logoImg');
      const header = document.getElementById('mainHeader');
    
      toggle.addEventListener('change', () => {
        if (toggle.checked) {
          // Día (modo claro)
          text.textContent = 'Día';
          
          // Cambiar colores de fondo y texto simultáneamente
          switchBg.classList.replace('bg-white', 'bg-black');
          switchCircle.classList.replace('bg-black', 'bg-white');
          body.classList.replace('bg-black', 'bg-white');
          body.classList.replace('text-white', 'text-black');
          header.classList.replace('bg-black', 'bg-white');
          header.classList.replace('text-white', 'text-black');
          
          logoImg.src = 'img/logo-light.svg';
        } else {
          // Noche (modo oscuro)
          text.textContent = 'Noche';
          
          // Cambiar colores de fondo y texto simultáneamente
          switchBg.classList.replace('bg-black', 'bg-white');
          switchCircle.classList.replace('bg-white', 'bg-black');
          body.classList.replace('bg-white', 'bg-black');
          body.classList.replace('text-black', 'text-white');
          header.classList.replace('bg-white', 'bg-black');
          header.classList.replace('text-black', 'text-white');
          
          logoImg.src = 'img/logo-dark.svg';
        }
      });
