import { inView } from 'motion';

function counter(el: HTMLElement) {
  const target = parseInt(el.dataset.target ?? '0', 10);
  const duration = 1800;
  const t0 = performance.now();

  function tick(now: number) {
    const elapsed = now - t0;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current.toLocaleString('es-CO');
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString('es-CO');
  }

  requestAnimationFrame(tick);
}

inView('.section-stats', () => {
  document.querySelectorAll<HTMLElement>('.stat-number').forEach(counter);
}, { margin: '-20% 0px' });
