import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures that upon route navigation, the window scrolls smoothly/instantly to the top,
 * unless a specific element restoration or hash is targeted.
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // If returning to /productos with saved scroll position from product detail, let Productos handle it
    if (pathname === '/productos') {
      const savedScrollY = sessionStorage.getItem('soltecom_catalog_scroll_y');
      if (savedScrollY) {
        return;
      }
    }

    // Otherwise, ensure page always starts at top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  return null;
}
