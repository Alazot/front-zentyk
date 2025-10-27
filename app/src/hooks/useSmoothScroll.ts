export function useSmoothScroll() {
  const smoothScroll = (targetId: string, offset: number = 70) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    // Posiciones
    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY - offset; // 👈 offset visible arriba
    const distance = targetY - startY;
    const duration = 1200;
    let startTime: number | null = null;

    // Easing profesional (fluido tipo "ZENTYK")
    const easeInOutExpo = (t: number) =>
      t === 0
        ? 0
        : t === 1
        ? 1
        : t < 0.5
        ? Math.pow(2, 20 * t - 10) / 2
        : (2 - Math.pow(2, -20 * t + 10)) / 2;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutExpo(progress);
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) requestAnimationFrame(animateScroll);
      else {
        // Pequeño ajuste de rebote para dar naturalidad
        window.scrollBy({ top: -5, behavior: 'smooth' });
        setTimeout(() => window.scrollBy({ top: 5, behavior: 'smooth' }), 150);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return { smoothScroll };
}
