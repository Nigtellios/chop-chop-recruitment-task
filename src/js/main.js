/* Import Modular JS */
import * as Dropdown from './modules/dropdown.js';
import * as Lightbox from './modules/modal.js';

// Log if Scripts Successfully Loaded
// console.log(Dropdown.dropdownTest);
// console.log(Lightbox.modalTest);

// Open Dropdowns, for re-use -> provide proper selectors
document.addEventListener('DOMContentLoaded', () => {
  Dropdown.openDropdowns(
    '.nav__dropdown-trigger',
    '.dropdown'
  );
})

// Display Lightbox, for re-use -> provide proper selectors
document.addEventListener('DOMContentLoaded', () => {
  Lightbox.displayLightbox(
    '.lightbox',
    '.lightbox__overlay',
    '.lightbox__close-btn',
    '.lightbox__image',
    '.gallery__item'
  );
});


