import KUTE from 'kute.js';
import 'kute.js/kute-svg';

export const startKuteAnimation = () => {
  const tweens = [];

  for (let i = 1; i <= 10; i++) { 
    const fromPath = document.getElementById('w1' + i);
    const toPath = document.getElementById('w2' + i).getAttribute('d');

    const tween = KUTE.fromTo(fromPath,
      { path: fromPath.getAttribute('d') },
      { path: toPath },
      { repeat: 999, duration: 1000, yoyo: true }
    );

    tweens.push(tween);
  }

  tweens.forEach(tween => tween.start());
};
