import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export const useAnimatedCounter = (target: number, duration: number = 2) => {
  const ref = useRef<HTMLSpanElement>(null);
  const controls = useRef<ReturnType<typeof animate> | null>(null);

  const startAnimation = () => {
    const node = ref.current;
    if (!node) return;
    
    // Stop any previous animation
    if (controls.current) {
      controls.current.stop();
    }

    controls.current = animate(0, target, {
      duration: duration,
      onUpdate(value: number) {
        node.textContent = Math.round(value).toLocaleString();
      },
    });
  };

  // Set initial text to 0 to prevent flash of final number
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.textContent = '0';
    }
  }, []);

  return { ref, startAnimation };
};