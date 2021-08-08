// Modal JS Code
export const modalTest = `Modal (Lightbox) has been successfully loaded.`;

export function displayLightbox(lightboxName, lightboxOverlayName, lightboxCloseBtnName, lightboxImageScope, galleryItemName) {

  // Lightbox, Lightbox Overlay, LightboxClose Btn
  const lightbox = document.querySelector(lightboxName);
  const lightboxOverlay = document.querySelector(lightboxOverlayName);
  const lightboxCloseBtn = document.querySelector(lightboxCloseBtnName);

  // Lightbox Image
  const lightboxImage = lightbox.querySelector(lightboxImageScope);

  // Gallery Items
  const galleryItems = document.querySelectorAll(galleryItemName);

  galleryItems.forEach((galleryItem) => {
    galleryItem.onclick = function () {
      lightbox.classList.remove('lightbox--closed');
      lightbox.classList.add('lightbox--opened');

      // Prevent Scrolling on Desktop
      document.body.style.overflow = 'hidden';

      lightboxImage.src = this.querySelector('img').src;

      lightboxOverlay.addEventListener('click', () => {
        closeLightbox(lightbox);
      });

      lightboxCloseBtn.addEventListener('click', () => {
        closeLightbox(lightbox);
      });
    }
  });

  const closeLightbox = (lightbox) => {
    lightbox.classList.remove('lightbox--opened');
    lightbox.classList.add('lightbox--closed');

    // Reset overflow
    document.body.style.overflow = '';
  }
}
