import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    // Wait a brief moment to ensure all DOM elements are mounted before querying
    const timeoutId = setTimeout(() => {
      const els = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      
      els.forEach((el) => io.observe(el));

      return () => {
        els.forEach((el) => io.unobserve(el));
        io.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
}
