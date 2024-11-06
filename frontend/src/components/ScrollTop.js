// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById('scrollable-container');
    console.log('Route changed:', pathname);
    if (container) {
        container.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll behavior
          });
        
      }
  }, [pathname]);

  return null;
}
