'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { animate, inView, stagger } from 'motion';

/* Motion-powered ambience and scroll reveals for the home page. */
function seedStars(host) {
  if (host.dataset.starsDone) return;
  host.dataset.starsDone = '1';
  const count = parseInt(host.dataset.stars || '40', 10);
  let seed = 7;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const layer = document.createElement('div');
  layer.className = 'ttm-stars';
  layer.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < count; i++) {
    const st = document.createElement('span');
    st.className = 'ttm-star';
    const sz = 1 + rnd() * 2.2;
    st.style.cssText = `left:${(rnd() * 100).toFixed(2)}%;top:${(rnd() * 100).toFixed(2)}%;width:${sz.toFixed(1)}px;height:${sz.toFixed(1)}px;--d:${(3 + rnd() * 5).toFixed(1)}s;--o:${(rnd() * 6).toFixed(1)}s;opacity:${(0.2 + rnd() * 0.5).toFixed(2)}`;
    layer.appendChild(st);
  }
  host.insertBefore(layer, host.firstChild);
}

function startMotion(el, keyframes, options) {
  return animate(el, keyframes, options);
}

function directionalReveal(index, distance = 32) {
  const direction = index % 4;
  if (direction === 0) return { x: [-distance, 0], y: [0, 0] };
  if (direction === 1) return { x: [distance, 0], y: [0, 0] };
  if (direction === 2) return { x: [0, 0], y: [distance, 0] };
  return { x: [0, 0], y: [-distance, 0] };
}

function seedDrops(host) {
  if (host.dataset.dropsDone) return [];
  host.dataset.dropsDone = '1';
  const layer = document.createElement('div');
  layer.setAttribute('aria-hidden', 'true');
  layer.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;';
  const drops = [];
  for (let index = 0; index < 16; index += 1) {
    const drop = document.createElement('span');
    const size = 3 + (index % 4) * 1.5;
    drop.style.cssText = `position:absolute;left:${8 + (index * 17) % 84}%;top:-24px;width:${size}px;height:${size * 2.8}px;border-radius:70% 30% 65% 35%;background:rgba(146,13,84,${0.08 + (index % 3) * 0.035});transform:rotate(22deg);filter:blur(${index % 3 === 0 ? 0.4 : 0}px);`;
    layer.appendChild(drop);
    drops.push(drop);
  }
  host.insertBefore(layer, host.firstChild);
  return drops;
}

export default function Effects() {
  const path = usePathname();

  useEffect(() => {
    const cleanups = [];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (path !== '/' && !reducedMotion) {
      document.querySelectorAll('main#main .tm-card, main#main .hv6, main#main [data-formcard]').forEach((card) => {
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        let cardControls;
        const tiltCard = (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          cardControls?.cancel();
          cardControls = startMotion(card, {
            rotateX: y * -3.5,
            rotateY: x * 4.5,
            z: 8,
          }, {
            duration: 0.5,
            easing: [0.22, 1, 0.36, 1],
          });
        };
        const settleCard = () => {
          cardControls?.cancel();
          cardControls = startMotion(card, { rotateX: 0, rotateY: 0, z: 0 }, {
            duration: 0.8,
            easing: [0.22, 1, 0.36, 1],
          });
        };
        card.addEventListener('pointermove', tiltCard);
        card.addEventListener('pointerleave', settleCard);
        cleanups.push(() => {
          cardControls?.cancel();
          card.removeEventListener('pointermove', tiltCard);
          card.removeEventListener('pointerleave', settleCard);
        });
      });
    }

    if (path === '/about') {
      const aboutTitle = document.querySelector('main#main h1');
      if (aboutTitle && !reducedMotion) {
        aboutTitle.style.opacity = '0';
        const controls = startMotion(aboutTitle, {
          opacity: [0, 1],
          y: [18, 0],
          rotateX: [8, 0],
          filter: ['blur(8px)', 'blur(0px)'],
        }, {
          duration: 1.15,
          delay: 0.15,
          easing: [0.22, 1, 0.36, 1],
        });
        cleanups.push(() => controls.cancel());
      }

      document.querySelectorAll('main#main > div').forEach((section, index) => {
        if (reducedMotion) return;
        section.style.opacity = '0';
        const stop = inView(section, () => {
          const controls = startMotion(section, {
            opacity: [0, 1],
            ...directionalReveal(index, 28),
            rotateY: [index % 2 ? 1.5 : -1.5, 0],
          }, {
            duration: 1.05,
            delay: Math.min(index * 0.06, 0.3),
            easing: [0.22, 1, 0.36, 1],
          });
          return () => controls.cancel();
        }, { margin: '0px 0px -12% 0px' });
        cleanups.push(stop);
      });

      document.querySelectorAll('main#main [data-spin]').forEach((el, index) => {
        if (reducedMotion) return;
        const controls = startMotion(el, { rotate: [0, index % 2 ? -360 : 360] }, {
          duration: 34 + index * 8,
          repeat: Infinity,
          easing: 'linear',
        });
        cleanups.push(() => controls.cancel());
      });

      document.querySelectorAll('main#main [data-reveal]').forEach((el) => {
        if (reducedMotion) return;
        el.style.opacity = '0';
        const stop = inView(el, () => {
          const controls = startMotion(el, { opacity: [0, 1], y: [22, 0] }, {
            duration: 0.8,
            easing: [0.22, 1, 0.36, 1],
          });
          return () => controls.cancel();
        });
        cleanups.push(stop);
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    }

    if (path === '/antariksha') {
      const antarikshaTitle = document.querySelector('main#main h1');
      if (antarikshaTitle && !reducedMotion) {
        antarikshaTitle.style.opacity = '0';
        const controls = startMotion(antarikshaTitle, {
          opacity: [0, 1],
          scale: [0.86, 1],
          rotateY: [-12, 0],
          filter: ['blur(10px)', 'blur(0px)'],
        }, {
          duration: 1.25,
          delay: 0.1,
          easing: [0.16, 1, 0.3, 1],
        });
        cleanups.push(() => controls.cancel());
      }

      document.querySelectorAll('main#main > div').forEach((section, index) => {
        if (reducedMotion) return;
        section.style.opacity = '0';
        const stop = inView(section, () => {
          const controls = startMotion(section, {
            opacity: [0, 1],
            ...directionalReveal(index, 30),
            rotateX: [index === 0 ? 2 : 0.8, 0],
          }, {
            duration: 0.85,
            easing: [0.16, 1, 0.3, 1],
          });
          return () => controls.cancel();
        }, { margin: '0px 0px -10% 0px' });
        cleanups.push(stop);
      });

      document.querySelectorAll('main#main [data-reveal]').forEach((el) => {
        if (reducedMotion) return;
        el.style.opacity = '0';
        const stop = inView(el, () => {
          const controls = startMotion(el, { opacity: [0, 1], scale: [0.97, 1], y: [18, 0] }, {
            duration: 0.7,
            easing: [0.16, 1, 0.3, 1],
          });
          return () => controls.cancel();
        });
        cleanups.push(stop);
      });

      document.querySelectorAll('main#main svg path').forEach((pathElement, index) => {
        if (reducedMotion) return;
        const controls = startMotion(pathElement, { pathLength: [0, 1], opacity: [0, 0.6] }, {
          duration: 1.8,
          delay: index * 0.25,
          easing: [0.16, 1, 0.3, 1],
        });
        cleanups.push(() => controls.cancel());
      });

      document.querySelectorAll('#languages span').forEach((chip, index) => {
        if (reducedMotion) return;
        chip.style.opacity = '0';
        const stop = inView(chip, () => {
          const controls = startMotion(chip, { opacity: [0, 1], y: [14, 0], scale: [0.9, 1] }, {
            duration: 0.45,
            delay: index * 0.04,
            easing: [0.16, 1, 0.3, 1],
          });
          return () => controls.cancel();
        });
        cleanups.push(stop);
      });

      document.querySelectorAll('main#main [data-spin]').forEach((el) => {
        if (reducedMotion) return;
        const controls = startMotion(el, { rotate: [0, 360], z: [0, 12, 0] }, {
          duration: 42,
          repeat: Infinity,
          easing: 'linear',
        });
        cleanups.push(() => controls.cancel());
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    }

    const routePresets = {
      '/agents': { mode: 'depth', duration: 0.8, easing: [0.16, 1, 0.3, 1] },
      '/careers': { mode: 'slide', duration: 0.95, easing: [0.22, 1, 0.36, 1] },
      '/cloud': { mode: 'zoom', duration: 0.85, easing: [0.16, 1, 0.3, 1] },
      '/contact': { mode: 'lift', duration: 0.75, easing: [0.22, 1, 0.36, 1] },
      '/enterprise': { mode: 'turn', duration: 1, easing: [0.16, 1, 0.3, 1] },
      '/industries': { mode: 'drift', duration: 0.9, easing: [0.22, 1, 0.36, 1] },
      '/newsroom': { mode: 'cascade', duration: 0.65, easing: [0.16, 1, 0.3, 1] },
      '/partners': { mode: 'slide', duration: 0.88, easing: [0.22, 1, 0.36, 1] },
      '/privacy': { mode: 'lift', duration: 0.7, easing: [0.22, 1, 0.36, 1] },
      '/products': { mode: 'zoom', duration: 0.9, easing: [0.16, 1, 0.3, 1] },
      '/research': { mode: 'depth', duration: 0.95, easing: [0.16, 1, 0.3, 1] },
      '/resources': { mode: 'cascade', duration: 0.7, easing: [0.16, 1, 0.3, 1] },
      '/responsible-ai': { mode: 'turn', duration: 0.9, easing: [0.22, 1, 0.36, 1] },
      '/site-map': { mode: 'drift', duration: 0.8, easing: [0.22, 1, 0.36, 1] },
      '/terms': { mode: 'lift', duration: 0.7, easing: [0.22, 1, 0.36, 1] },
      '/vichayan': { mode: 'zoom', duration: 0.88, easing: [0.16, 1, 0.3, 1] },
      '/vision': { mode: 'depth', duration: 1, easing: [0.16, 1, 0.3, 1] },
    };
    const preset = routePresets[path];

    if (preset) {
      const sectionKeyframes = (index) => {
        const alternating = index % 2 ? -1 : 1;
        const direction = directionalReveal(index, 36);
        if (preset.mode === 'slide') return { opacity: [0, 1], ...direction };
        if (preset.mode === 'zoom') return { opacity: [0, 1], ...direction, scale: [0.92, 1] };
        if (preset.mode === 'turn') return { opacity: [0, 1], ...direction, rotateY: [alternating * 4, 0] };
        if (preset.mode === 'drift') return { opacity: [0, 1], ...direction, rotateZ: [alternating * 1.5, 0] };
        if (preset.mode === 'cascade') return { opacity: [0, 1], ...direction, scale: [0.98, 1] };
        return { opacity: [0, 1], ...direction, rotateX: [2.5, 0], z: [12, 0] };
      };

      document.querySelectorAll('main#main > div').forEach((section, index) => {
        if (reducedMotion) return;
        section.style.opacity = '0';
        section.style.transformStyle = 'preserve-3d';
        const stop = inView(section, () => {
          const controls = startMotion(section, sectionKeyframes(index), {
            duration: preset.duration,
            delay: Math.min(index * 0.05, 0.25),
            easing: preset.easing,
          });
          return () => controls.cancel();
        }, { margin: '0px 0px -12% 0px' });
        cleanups.push(stop);
      });

      document.querySelectorAll('main#main [data-reveal]').forEach((el, index) => {
        if (reducedMotion) return;
        el.style.opacity = '0';
        const stop = inView(el, () => {
          const controls = startMotion(el, {
            opacity: [0, 1],
            y: preset.mode === 'cascade' ? [24, 0] : [14, 0],
            scale: preset.mode === 'zoom' ? [0.96, 1] : [1, 1],
          }, {
            duration: preset.duration * 0.8,
            delay: index * 0.04,
            easing: preset.easing,
          });
          return () => controls.cancel();
        });
        cleanups.push(stop);
      });

      document.querySelectorAll('main#main [data-spin]').forEach((el, index) => {
        if (reducedMotion) return;
        const controls = startMotion(el, {
          rotate: [0, index % 2 ? -360 : 360],
          z: preset.mode === 'depth' ? [0, 14, 0] : [0, 5, 0],
        }, {
          duration: 28 + index * 7,
          repeat: Infinity,
          easing: 'linear',
        });
        cleanups.push(() => controls.cancel());
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    }

    if (path !== '/') return undefined;

    document.querySelectorAll('[data-stars]').forEach(seedStars);

    document.querySelectorAll('main#main > div').forEach((section, index) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      section.style.opacity = '0';
      section.style.transform = 'translateY(42px) rotateX(1.5deg)';
      section.style.transformOrigin = '50% 0';
      section.style.perspective = '1400px';
      const stop = inView(section, () => {
        const controls = startMotion(section, {
          opacity: [0, 1],
          y: [42, 0],
          rotateX: [1.5, 0],
        }, {
          duration: 0.9,
          delay: Math.min(index * 0.04, 0.2),
          easing: [0.22, 1, 0.36, 1],
        });
        return () => controls.cancel();
      }, { margin: '0px 0px -10% 0px' });
      cleanups.push(stop);
    });

    document.querySelectorAll('[data-big]').forEach((counter) => {
      const match = counter.textContent.trim().match(/^(\d+)(.*)$/);
      if (!match) return;
      const target = Number(match[1]);
      const suffix = match[2];
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      counter.textContent = `0${suffix}`;
      const stop = inView(counter, () => {
        const controls = startMotion(0, target, {
          duration: 4.35,
          easing: [0.22, 1, 0.36, 1],
          onUpdate: (value) => { counter.textContent = `${Math.round(value)}${suffix}`; },
        });
        return () => controls.cancel();
      }, { margin: '0px 0px -15% 0px' });
      cleanups.push(stop);
    });

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const parallaxLayers = [...document.querySelectorAll('main#main > div [data-drift], main#main > div > [data-spin]')];
      const parallaxControls = new Map();
      const updateParallax = () => {
        parallaxLayers.forEach((layer, index) => {
          const bounds = layer.getBoundingClientRect();
          const offset = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * (0.025 + (index % 3) * 0.008);
          parallaxControls.get(layer)?.cancel();
          const depth = (index % 3 - 1) * 8;
          parallaxControls.set(layer, startMotion(layer, {
            y: offset,
            z: depth,
            rotateX: offset * -0.018,
            rotateY: offset * 0.012,
          }, {
            duration: 0.45,
            easing: [0.22, 1, 0.36, 1],
          }));
        });
      };
      window.addEventListener('scroll', updateParallax, { passive: true });
      updateParallax();
      cleanups.push(() => {
        window.removeEventListener('scroll', updateParallax);
        parallaxControls.forEach((controls) => controls.cancel());
      });
    }

    const heroScene = document.querySelector('[data-hero-scene]');
    if (heroScene && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      seedDrops(heroScene).forEach((drop, index) => {
        const controls = startMotion(drop, {
          y: ['0vh', '118vh'],
          x: [0, index % 2 ? -18 : 18, 0],
          opacity: [0, 0.85, 0],
          scale: [0.7, 1, 0.35],
        }, {
          duration: 4.8 + (index % 5) * 0.7,
          delay: (index % 8) * 0.55,
          repeat: Infinity,
          easing: 'ease-in',
        });
        cleanups.push(() => controls.cancel());
      });
    }

    document.querySelectorAll('.ttm-star').forEach((star) => {
      const duration = parseFloat(star.style.getPropertyValue('--d')) || 4;
      const delay = parseFloat(star.style.getPropertyValue('--o')) || 0;
      const controls = startMotion(star, { opacity: [0.15, 0.9, 0.15], scale: [0.8, 1.3, 0.8] }, {
        duration,
        delay,
        repeat: Infinity,
        easing: 'ease-in-out',
      });
      cleanups.push(() => controls.cancel());
    });

    document.querySelectorAll('[data-reveal]').forEach((el, index) => {
      if (reducedMotion) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        return;
      }
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px) rotateX(12deg) scale(.96)';
      el.style.transformPerspective = '1100px';
      el.style.transformStyle = 'preserve-3d';
      const stop = inView(el, () => {
        const controls = startMotion(el, {
          opacity: [0, 1],
          y: [28, 0],
          z: [-40, 0],
          rotateX: [12, 0],
          rotateY: [index % 2 ? -4 : 4, 0],
          scale: [.96, 1],
        }, {
          duration: 0.9,
          easing: [0.22, 1, 0.36, 1],
        });
        return () => controls.cancel();
      }, { margin: '0px 0px -12% 0px' });
      cleanups.push(stop);
    });

    document.querySelectorAll('[data-reveal] [data-big], [data-reveal] .hv4, [data-reveal] .hv6').forEach((el) => {
      el.style.opacity = '0';
      const stop = inView(el, () => {
        const controls = startMotion(el, { opacity: [0, 1], y: [18, 0] }, {
          duration: 0.55,
          delay: stagger(0.08),
          easing: [0.22, 1, 0.36, 1],
        });
        return () => controls.cancel();
      }, { margin: '0px 0px -12% 0px' });
      cleanups.push(stop);
    });

    document.querySelectorAll('[data-float]').forEach((el) => {
      const controls = startMotion(el, { y: [0, -12, 0], rotate: [0, 1, 0] }, {
        duration: 7,
        repeat: Infinity,
        easing: 'ease-in-out',
      });
      cleanups.push(() => controls.cancel());
    });

    document.querySelectorAll('[data-spin], [data-spin-rev], [data-orbit]').forEach((el, index) => {
      const reverse = el.hasAttribute('data-spin-rev') || el.style.animationDirection === 'reverse';
      const duration = parseFloat(el.style.animationDuration) || (el.hasAttribute('data-spin') ? 60 : 22);
      const depth = (index % 3 + 1) * 5;
      const controls = startMotion(el, {
        rotate: reverse ? [0, -360] : [0, 360],
        z: [0, depth, 0],
        rotateZ: [0, index % 2 ? -1 : 1, 0],
      }, {
        duration,
        repeat: Infinity,
        easing: 'linear',
      });
      cleanups.push(() => controls.cancel());
    });

    document.querySelectorAll('[data-drift]').forEach((el) => {
      const controls = startMotion(el, { x: [0, 28], y: [0, -22] }, {
        duration: 18,
        repeat: Infinity,
        repeatType: 'reverse',
        easing: 'ease-in-out',
      });
      cleanups.push(() => controls.cancel());
    });

    document.querySelectorAll('[data-pulse]').forEach((el) => {
      const controls = startMotion(el, { opacity: [0.35, 0.9, 0.35], scale: [1, 1.25, 1] }, {
        duration: 4,
        repeat: Infinity,
        easing: 'ease-in-out',
      });
      cleanups.push(() => controls.cancel());
    });

    document.querySelectorAll('[data-shimmer]').forEach((el) => {
      const controls = startMotion(el, { backgroundPosition: ['120% 0', '-120% 0'] }, {
        duration: 7,
        repeat: Infinity,
        easing: 'ease-in-out',
      });
      cleanups.push(() => controls.cancel());
    });

    document.querySelectorAll('[data-marquee] > div').forEach((el) => {
      const controls = startMotion(el, { x: ['0%', '-50%'] }, {
        duration: 34,
        repeat: Infinity,
        easing: 'linear',
      });
      cleanups.push(() => controls.cancel());
    });

    if (heroScene && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      heroScene.style.perspective = '1200px';
      let pointerControls;
      const handlePointerMove = (event) => {
        const bounds = heroScene.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        pointerControls?.cancel();
        pointerControls = startMotion(heroScene, {
          rotateX: y * -5,
          rotateY: x * 7,
          z: 18,
        }, { duration: 0.7, easing: [0.22, 1, 0.36, 1] });
      };
      const resetPointer = () => {
        pointerControls?.cancel();
        pointerControls = startMotion(heroScene, { rotateX: 0, rotateY: 0, z: 0 }, {
          duration: 1.1,
          easing: [0.22, 1, 0.36, 1],
        });
      };
      heroScene.addEventListener('pointermove', handlePointerMove);
      heroScene.addEventListener('pointerleave', resetPointer);
      cleanups.push(() => {
        pointerControls?.cancel();
        heroScene.removeEventListener('pointermove', handlePointerMove);
        heroScene.removeEventListener('pointerleave', resetPointer);
      });

      document.querySelectorAll('.hv4, .hv6').forEach((card) => {
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        let cardControls;
        const moveCard = (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          cardControls?.cancel();
          cardControls = startMotion(card, {
            rotateX: y * -4,
            rotateY: x * 5,
            z: 10,
          }, { duration: 0.45, easing: [0.22, 1, 0.36, 1] });
        };
        const resetCard = () => {
          cardControls?.cancel();
          cardControls = startMotion(card, { rotateX: 0, rotateY: 0, z: 0 }, {
            duration: 0.7,
            easing: [0.22, 1, 0.36, 1],
          });
        };
        card.addEventListener('pointermove', moveCard);
        card.addEventListener('pointerleave', resetCard);
        cleanups.push(() => {
          cardControls?.cancel();
          card.removeEventListener('pointermove', moveCard);
          card.removeEventListener('pointerleave', resetCard);
        });
      });

      heroScene.querySelectorAll('.hv1, .hv2').forEach((button) => {
        let buttonControls;
        const moveButton = (event) => {
          const bounds = button.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          buttonControls?.cancel();
          buttonControls = startMotion(button, {
            x: x * 14,
            y: y * 10,
            scale: 1.045,
          }, { duration: 0.35, easing: [0.22, 1, 0.36, 1] });
        };
        const resetButton = () => {
          buttonControls?.cancel();
          buttonControls = startMotion(button, { x: 0, y: 0, scale: 1 }, {
            duration: 0.65,
            easing: [0.22, 1, 0.36, 1],
          });
        };
        button.addEventListener('pointermove', moveButton);
        button.addEventListener('pointerleave', resetButton);
        cleanups.push(() => {
          buttonControls?.cancel();
          button.removeEventListener('pointermove', moveButton);
          button.removeEventListener('pointerleave', resetButton);
        });
      });

      document.querySelectorAll('[data-spin], [data-spin-rev], [data-orbit]').forEach((el) => {
        el.style.transformStyle = 'preserve-3d';
      });
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [path]);

  return null;
}
