import { inView, animate } from 'motion';

inView('.reveal', (element) => {
  animate(
    element,
    { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0)'] },
    { duration: 0.6, easing: [0.16, 1, 0.3, 1] }
  );
}, { margin: '-10% 0px' });
