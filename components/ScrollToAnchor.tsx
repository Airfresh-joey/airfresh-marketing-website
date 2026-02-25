'use client';

import { useEffect } from 'react';

export default function ScrollToAnchor() {
  useEffect(() => {
    const scrollToTechnology = (element: HTMLElement) => {
      const navHeight = 64;
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    const checkAndScroll = () => {
      const shouldScroll = sessionStorage.getItem('scrollToTechnology');
      if (shouldScroll === 'true') {
        sessionStorage.removeItem('scrollToTechnology');
        const element = document.getElementById('technology');
        if (element) {
          scrollToTechnology(element);
        }
        return;
      }

      const hash = window.location.hash;
      if (hash === '#technology') {
        const element = document.getElementById('technology');
        if (element) {
          scrollToTechnology(element);
        }
      }
    };

    checkAndScroll();
    const timer1 = setTimeout(checkAndScroll, 100);
    const timer2 = setTimeout(checkAndScroll, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return null;
}
