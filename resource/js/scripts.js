(() => {
  const SELECTORS = {
    navToggle: '[data-js="nav-toggle"]',
    siteNav: '[data-js="site-nav"]',
    navParent: '[data-js="nav-parent"]',
    popup: '[data-js="popup"]',
    popupClose: '[data-js="popup-close"]'
  };

  const navToggle = document.querySelector(SELECTORS.navToggle);
  const siteNav = document.querySelector(SELECTORS.siteNav);
  const navParents = Array.from(document.querySelectorAll(SELECTORS.navParent));
  const desktopQuery = window.matchMedia('(min-width: 768px)');

  const openNav = () => {
    if (!siteNav || !navToggle) return;
    siteNav.dataset.open = 'true';
    navToggle.setAttribute('aria-expanded', 'true');
  };

  const closeNav = () => {
    if (!siteNav || !navToggle) return;
    siteNav.dataset.open = 'false';
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const syncNavToViewport = () => {
    if (!siteNav || !navToggle) return;
    if (desktopQuery.matches) {
      siteNav.dataset.open = 'true';
      navToggle.setAttribute('aria-expanded', 'false');
    } else if (siteNav.dataset.open !== 'true') {
      siteNav.dataset.open = 'false';
      navToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (navToggle && siteNav) {
    syncNavToViewport();

    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.dataset.open === 'true';
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && siteNav.dataset.open === 'true' && !desktopQuery.matches) {
        closeNav();
      }
    });

    document.addEventListener('click', (event) => {
      if (!desktopQuery.matches && siteNav.dataset.open === 'true') {
        if (!siteNav.contains(event.target) && event.target !== navToggle) {
          closeNav();
        }
      }
    });

    desktopQuery.addEventListener('change', syncNavToViewport);
  }

  navParents.forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.closest('.site-nav__item');
      if (!parent) return;
      const isExpanded = parent.dataset.expanded === 'true';
      if (isExpanded) {
        parent.dataset.expanded = 'false';
        button.setAttribute('aria-expanded', 'false');
      } else {
        navParents.forEach((otherButton) => {
          if (otherButton !== button) {
            const otherParent = otherButton.closest('.site-nav__item');
            if (otherParent) {
              otherParent.dataset.expanded = 'false';
              otherButton.setAttribute('aria-expanded', 'false');
            }
          }
        });
        parent.dataset.expanded = 'true';
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  if (siteNav) {
    siteNav.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('a[href]') && !desktopQuery.matches) {
        closeNav();
      }
    });
  }

  const popup = document.querySelector(SELECTORS.popup);
  if (popup instanceof HTMLElement) {
    const closePopup = () => {
      popup.dataset.open = 'false';
      popup.setAttribute('aria-hidden', 'true');
    };

    const openPopupIfNeeded = () => {
      if (popup.dataset.open === 'true') {
        popup.setAttribute('aria-hidden', 'false');
      }
    };

    const closeButtons = Array.from(popup.querySelectorAll(SELECTORS.popupClose));
    closeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        closePopup();
      });
    });

    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        closePopup();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && popup.dataset.open === 'true') {
        closePopup();
      }
    });

    openPopupIfNeeded();
  }
})();
