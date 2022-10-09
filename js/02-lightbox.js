import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const mainGallery = document.querySelector(".gallery");

function createGallary(items) {
  return items
    .map(
      (item) =>
        `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a>`
    )
    .join("");
}

const addGallaryMarkup = createGallary(galleryItems);

mainGallery.insertAdjacentHTML("beforeend", addGallaryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});