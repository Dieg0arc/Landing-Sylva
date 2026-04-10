import { TOTAL_FRAMES } from '../data/content';

const canvas = document.getElementById('frame-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const frames: HTMLImageElement[] = [];
const url = (i: number) => `/frames/frame_${String(i + 1).padStart(3, '0')}.jpg`;
let current = 0, target = 0;
const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };

function blit(img: HTMLImageElement, alpha: number) {
  if (!img?.complete || !img.naturalWidth) return;
  ctx.globalAlpha = alpha;

  if (canvas.width <= 767) {
    const s = canvas.width / img.naturalWidth;
    const w = img.naturalWidth * s;
    const h = img.naturalHeight * s;
    ctx.drawImage(img, 0, canvas.height * 0.04, w, h);
  } else {
    const s = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * s;
    const h = img.naturalHeight * s;
    ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
  }
}

function tick() {
  current += (target - current) * 0.1;
  const lo = Math.floor(current), hi = Math.min(lo + 1, TOTAL_FRAMES - 1), t = current - lo;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  blit(frames[lo], 1);
  if (t > 0.01) blit(frames[hi], t);
  ctx.globalAlpha = 1;
  requestAnimationFrame(tick);
}

function onScroll() {
  const sc = document.getElementById('scroll-container')!;
  target = Math.min(Math.max(window.scrollY / (sc.offsetHeight - window.innerHeight), 0), 1) * (TOTAL_FRAMES - 1);
}


resize();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', resize);
for (let i = 0; i < TOTAL_FRAMES; i++) {
  const img = new Image();
  img.src = url(i);
  img.onload = () => { if (i === 0) { resize(); tick(); } };
  frames.push(img);
}
