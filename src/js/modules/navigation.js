// Modal JS Code
export const navTest = `Navigation Module has been successfully loaded.`;

export function openNav(btnScope) {
  const navBtn = document.querySelector(btnScope);

  // Lightbox, Lightbox Overlay, LightboxClose Btn
  const navList = document.querySelector('.nav__list');

  navBtn.addEventListener('click', () => {
    navList.classList.toggle('nav__list--opened');

    if (navList.classList.contains('nav__list--opened')) {
      navBtn.setAttribute('aria-expanded', 'true');
    } else {
      navBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
