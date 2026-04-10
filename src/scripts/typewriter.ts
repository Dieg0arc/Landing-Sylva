const TEXT = 'Desde una semilla hasta un bosque — descubre el fascinante ciclo de crecimiento de las plantas.';
const el   = document.getElementById('typewriter')!;
let idx    = 0;

function type(): void {
  if (idx < TEXT.length) {
    el.textContent += TEXT[idx++];
    setTimeout(type, 28 + Math.random() * 18);
  }
}

setTimeout(type, 1400);
