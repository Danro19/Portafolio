const toggleButton = document.getElementById('toggleSkills');
const techSkills = document.getElementById('techSkills');
const softSkills = document.getElementById('softSkills');
const skillsTitle = document.querySelector('#skills h1'); // Seleccionamos el h1 dentro de la sección

toggleButton.addEventListener('click', () => {
  techSkills.classList.toggle('hidden');
  softSkills.classList.toggle('hidden');

  const showingSoftSkills = techSkills.classList.contains('hidden');

  toggleButton.textContent = showingSoftSkills
    ? 'Habilidades Técnicas'
    : 'Habilidades Blandas';

  skillsTitle.textContent = showingSoftSkills
    ? 'Habilidades Blandas'
    : 'Habilidades Técnicas';
});