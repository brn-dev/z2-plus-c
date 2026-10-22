(() => {
  const scene = document.querySelector('.hero');
  const artwork = document.querySelector('.site-background img');
  if (!scene || !artwork) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const maxBlur = 8;
  const smoothingTime = 110;
  let blurStart = 0;
  let blurEnd = 1;
  let pendingFrame = null;
  let previousTimestamp = null;
  let currentBlur = 0;
  let previousBlur = -1;

  function updateBlur(timestamp) {
    pendingFrame = null;
    const progress = Math.min(1, Math.max(0,
      (window.scrollY - blurStart) / Math.max(1, blurEnd - blurStart)
    ));
    const eased = progress * progress * (3 - 2 * progress);
    const targetBlur = reducedMotion.matches ? 0 : eased * maxBlur;
    const elapsed = previousTimestamp === null ? 1000 / 60 : Math.min(timestamp - previousTimestamp, 64);
    const blend = 1 - Math.exp(-elapsed / smoothingTime);
    currentBlur = reducedMotion.matches ? 0 : currentBlur + (targetBlur - currentBlur) * blend;

    if (Math.abs(targetBlur - currentBlur) < 0.01) currentBlur = targetBlur;
    const blur = Math.round(currentBlur * 100) / 100;

    if (blur !== previousBlur) {
      artwork.style.setProperty('--background-blur', `${blur}px`);
      previousBlur = blur;
    }

    if (currentBlur !== targetBlur) {
      previousTimestamp = timestamp;
      pendingFrame = window.requestAnimationFrame(updateBlur);
    } else {
      previousTimestamp = null;
    }
  }

  function scheduleUpdate() {
    if (pendingFrame === null) {
      pendingFrame = window.requestAnimationFrame(updateBlur);
    }
  }

  function measureScene() {
    const { bottom, height } = scene.getBoundingClientRect();
    const sceneBottom = bottom + window.scrollY;

    // Start gently near the top, then settle into a steady blur past the intro.
    blurStart = Math.min(height * 0.12, 64);
    blurEnd = sceneBottom + Math.min(window.innerHeight * 0.2, 160);
    scheduleUpdate();
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', measureScene, { passive: true });
  window.addEventListener('pageshow', measureScene);
  reducedMotion.addEventListener('change', scheduleUpdate);

  if ('ResizeObserver' in window) {
    new ResizeObserver(measureScene).observe(scene);
  }

  measureScene();
})();
