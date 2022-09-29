// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryItemsEl = document.querySelector('.gallery');

const selectorGallery = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
const createGalleryMarkup = galleryItems.map(selectorGallery).join('');
galleryItemsEl.insertAdjacentHTML('beforeend', createGalleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});