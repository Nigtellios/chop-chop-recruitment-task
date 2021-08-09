/* Import Modular JS */
import * as Dropdown from './modules/dropdown.js';
import * as Lightbox from './modules/modal.js';

// Log if Scripts Successfully Loaded
console.log(Dropdown.dropdownTest);
console.log(Lightbox.modalTest);

// Open Dropdowns, for re-use -> provide proper dropdown class
// Remember that class names should be the same along document
document.addEventListener('DOMContentLoaded', () => {
  Dropdown.openDropdown(
    '.nav__dropdown'
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


