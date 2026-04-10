const navbar = document.getElementById('navbar')!;
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < 80)        navbar.classList.remove('visible');
  else if (y < lastY) navbar.classList.add('visible');
  else               navbar.classList.remove('visible');
  lastY = y;
}, { passive: true });
