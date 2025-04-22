const toggle = document.getElementById('toggleSwitch');
const text = document.getElementById('switchText');
const switchBg = document.getElementById('switchBackground');
const switchCircle = document.getElementById('switchCircle');
const body = document.getElementById('body');
const logoImg = document.getElementById('logoImg');
const header = document.getElementById('mainHeader');
const quienSoy = document.getElementById('quien-soy');
const background = document.getElementById('background-container');

const svgs = {
  night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="star-icon" viewBox="0 0 16 16">
    <path d="M8 0l2 5h5l-4 3 1.5 5L8 10l-4.5 3L5 8 1 5h5L8 0z"/>
  </svg>`,
  day: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" fill="lightblue" class="cloud-icon" viewBox="0 0 64 32">
    <path d="M20 10a10 10 0 0 1 20 0h2a8 8 0 1 1 0 16H14a8 8 0 1 1 0-16h2z"/>
  </svg>`
};


function clearBackground() {
  background.innerHTML = '';
}

// crear elementos como estrellas o nubes
function createElements(mode) {
  const count = mode === 'night' ? 80 : 40;
  for (let i = 0; i < count; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'absolute pointer-events-none';
    wrapper.style.top = `${Math.random() * 100}%`;
    wrapper.style.left = `${Math.random() * 100}%`;
    wrapper.style.transform = `scale(${Math.random() * 0.6 + 0.7})`;
    wrapper.style.opacity = `${Math.random() * 0.6 + 0.3}`;
    wrapper.style.transition = 'all 0.8s ease-in-out';
    wrapper.style.animationDelay = `${Math.random() * 60}s`;

    wrapper.innerHTML = mode === 'night' ? svgs.night : svgs.day;

    background.appendChild(wrapper);
  }
}


toggle.addEventListener('change', () => {
  const isDay = toggle.checked;

  text.textContent = isDay ? 'Día' : 'Noche';
  switchBg.classList.replace(isDay ? 'bg-white' : 'bg-black', isDay ? 'bg-black' : 'bg-white');
  switchCircle.classList.replace(isDay ? 'bg-black' : 'bg-white', isDay ? 'bg-white' : 'bg-black');

  body.classList.replace(isDay ? 'bg-black' : 'bg-white', isDay ? 'bg-white' : 'bg-black');
  body.classList.replace(isDay ? 'text-white' : 'text-black', isDay ? 'text-black' : 'text-white');
  header.classList.replace(isDay ? 'bg-black' : 'bg-white', isDay ? 'bg-white' : 'bg-black');
  header.classList.replace(isDay ? 'text-white' : 'text-black', isDay ? 'text-black' : 'text-white');
  quienSoy.classList.replace(isDay ? 'text-white' : 'text-black', isDay ? 'text-black' : 'text-white');

  logoImg.src = isDay ? 'img/logo-light.svg' : 'img/logo-dark.svg';

  clearBackground();
  createElements(isDay ? 'day' : 'night');
});

// Inicializar en modo noche
createElements('night');
