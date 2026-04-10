document.getElementById('cta-btn')?.addEventListener('click', function (e: Event) {
  const me   = e as MouseEvent;
  const btn  = this as HTMLElement;
  const rc   = btn.querySelector('.ripple-container')!;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x    = me.clientX - rect.left - size / 2;
  const y    = me.clientY - rect.top  - size / 2;
  const rip  = document.createElement('span');
  rip.className = 'ripple';
  rip.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  rc.appendChild(rip);
  rip.addEventListener('animationend', () => rip.remove());
});
