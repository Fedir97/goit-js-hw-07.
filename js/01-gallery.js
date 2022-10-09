import { galleryItems } from "./gallery-items.js";
// Change code below this line
const mainGallery = document.querySelector(".gallery");

function createGallary(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
                  <a class="gallery__link" href="${item.original}">
                    <img
                      class="gallery__image"
                      src="${item.preview}"
                      data-source="${item.original}"
                      alt="${item.description}"
                    />
                  </a>
                </div>`
    )
    .join("");
}

const addGallary = createGallary(galleryItems);

mainGallery.innerHTML = addGallary;

mainGallery.addEventListener("click", clickOnImage);

function clickOnImage(e) {
  e.preventDefault()


  if (e.target.nodeName !== "IMG") {
    return;
  }

  const module = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  module.show();

}


