// hooks/useLenisScroll.ts
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenisScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lenis: Lenis | null = null;

    if (scrollRef.current) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function onRaf(time: number) {
        if (lenis) {
          lenis.raf(time);
        }
        requestAnimationFrame(onRaf);
      }

      requestAnimationFrame(onRaf);
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return scrollRef;
};

export default useLenisScroll;
