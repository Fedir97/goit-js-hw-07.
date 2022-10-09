import { galleryItems } from './gallery-items.js';
// Change code below this line

const mainGallery = document.querySelector(".gallery");
const jsBox = document.querySelector(".js-lightbox");
const imageRef = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');

const createGallery = ({preview,original,description}) =>
 `<div class="gallery__item">
 <a class="gallery__link" href=${original}>
   <img
     class="gallery__image"
     src=${preview}
     data-source=${original}
     alt=${description}
   />
 </a>
</div>`


const galleryMarkup = galleryItems.reduce((acc, img) => acc + createGallery(img),"");
mainGallery.insertAdjacentHTML("afterbegin", galleryMarkup);
mainGallery.addEventListener("click", onPictureClick);
closeBtn.addEventListener("click", onCloseBtnClick);

function onPictureClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  
  jsBox.classList.add('is-open');
  imageRef.src = event.target.getAttribute("data-source")
    imageRef.alt = event.target.alt
    imageRef.description = event.target.decription
}

function onCloseBtnClick() {
  jsBox.classList.remove('is-open');
  imageRef.src = "";
    imageRef.alt = "";
    imageRef.description = "";}
