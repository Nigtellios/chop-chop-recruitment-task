// Dropdown JS Code
export const dropdownTest = `Dropdown Module has been successfully loaded.`;

export function openDropdown(dropdownName) {
  const dropdowns = document.querySelectorAll(dropdownName);

  dropdowns.forEach((dropdown) => {
    const mouseOutsideHandler = (event) => {
      if (!event.target.classList.value.includes('nav__dropdown') && !event.target.classList.value.includes('dropdown')) {
        closeDropdown(dropdown);
        removeEventListener('mouseout', mouseOutsideHandler);
      }
    };

    const clickOutsideHandler = (event) => {
      if (!event.target.classList.value.includes('nav__dropdown') && !event.target.classList.value.includes('dropdown')) {
        closeDropdown(dropdown);
        removeEventListener('click', clickOutsideHandler);
      }
    };

    const closeDropdown = (DOMElement) => {
      DOMElement.classList.remove('dropdown--opened');
      const triggerButton = DOMElement.querySelector('.nav__dropdown-trigger');
      triggerButton.setAttribute('aria-expanded', 'false');
    };

    document.addEventListener('mouseout', mouseOutsideHandler);
    document.addEventListener('click', mouseOutsideHandler);

    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.toggle('dropdown--opened');
      const triggerButton = dropdown.querySelector('.nav__dropdown-trigger');
      triggerButton.setAttribute('aria-expanded', 'true');
    });
  });
}
