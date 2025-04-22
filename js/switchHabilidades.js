const toggleButton = document.getElementById('toggleSkills');
  const techSkills = document.getElementById('techSkills');
  const softSkills = document.getElementById('softSkills');

  toggleButton.addEventListener('click', () => {
    techSkills.classList.toggle('hidden');
    softSkills.classList.toggle('hidden');

    toggleButton.textContent =
      techSkills.classList.contains('hidden')
        ? 'Ver Habilidades Técnicas'
        : 'Ver Habilidades Blandas';
  });