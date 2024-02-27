
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this linen

const ulHtml = document.querySelector(".gallery")

 function createMarcaupFn (items) {
     return items.map(({description,original,preview})=> 
     `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`
     ).join("")
 }  
 ulHtml.insertAdjacentHTML("beforeend",createMarcaupFn(galleryItems));

 const lightbox =  new SimpleLightbox('.gallery a', { 
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,});

 
