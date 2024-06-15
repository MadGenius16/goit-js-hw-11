// Описаний у документації
import simpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import {getImages} from "./js/pixabay-api";
import {} from "./js/render-functions";

const form = document.querySelector(".form");
export const gallary = document.querySelector(".gallary")

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loaderBox = document.querySelector('.loader');

function showLoader() {
  loaderBox.classList.remove('visually-hidden');
}

export function closeLoader() {
  loaderBox.classList.add('visually-hidden');
}

form.addEventListener("submit", event => {
  event.preventDefault;
  gallary.innerHTML = "";
  const query = event.currentTarget.elements.info.value.trim();
  if(query !=="") {
    getImages(query).then(res =>{
      showGallery(res.hits);
        form.reset();
      }).catch(error=>
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position:"topRight"})
      )
      form.reset();
    }else {
      iziToast.show({
        color: 'red',
        position: 'topRight',
        message: 'Please, search some object',
      })
      form.reset()
    }
})