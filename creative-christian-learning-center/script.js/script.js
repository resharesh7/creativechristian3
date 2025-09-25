// Create a playful pencil toggle on every page
document.addEventListener('DOMContentLoaded', () => {
  const pencil = document.createElement('button');
  pencil.className = 'pencil-toggle';
  pencil.setAttribute('aria-label', 'Pencil toggle');
  pencil.title = 'Pencil toggle';
  pencil.textContent = '✏️';
  document.body.appendChild(pencil);

  // Simple interaction: toggle accent color and show a friendly note
  let toggled = false;
  pencil.addEventListener('click', () => {
    toggled = !toggled;
    document.documentElement.style.setProperty('--accent', toggled ? '#6c63ff' : '#ff7a59'); // purple vs coral
    pencil.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    alert('Pencil toggled! Accent color updated for a playful touch.');
  });
});