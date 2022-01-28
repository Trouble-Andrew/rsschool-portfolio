const initMenu = () => {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const menuWrapper = document.querySelector('[data-menu] .menu__wrapper');
  // const overlay = document.querySelector('[data-menu] .menu__overlay');
  // const openBtn = document.querySelector('[data-menu-open]');
  // const closeBtn = document.querySelector('[data-menu-close]');
  const links = menu.querySelectorAll('[data-menu] a');

  if (!burger) {
    return;
  }

  const openMenu = (event) => {
    event.preventDefault();
    menu.classList.add('is-active');
    window.disableBodyScroll(menuWrapper);
  };

  const closeMenu = () => {
    menu.classList.remove('is-active');
    burger.classList.remove('is-active');
    window.enableBodyScroll(menuWrapper);
  };

  const switchBurger = (event) => {
    burger.classList.toggle('is-active');
  };

  burger.addEventListener('click', switchBurger);

  let observer = new MutationObserver(() => {
    if (burger.classList.contains('is-active')) {
      menu.classList.add('is-active');
      window.disableBodyScroll(menuWrapper);
    } else {
      menu.classList.remove('is-active');
      window.enableBodyScroll(menuWrapper);
    }
  });

  observer.observe(burger, {attributes: true});

  // openBtn.addEventListener('click', openMenu);
  // closeBtn.addEventListener('click', closeMenu);
  // overlay.addEventListener('click', closeMenu);
  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
};

export default initMenu;
