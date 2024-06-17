import{S as f,i as d}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){const o="https://pixabay.com",r="/api/",i=new URLSearchParams({key:"44405455-dc304595c2bd7cb59ead2c04f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(s){if(s.length===0)iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),a(),form.reset();else{const o=s.map(r=>`<li class="gallery-item">
        <a href="${r.largeImageURL}">
        <img class="photo" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <ul class="info-list">
          <li class="info-list-item">
            Likes
            <p>${r.likes}</p>
          </li>
          <li class="info-list-item">
            Views
            <p>${r.views}</p>
          </li>
          <li class="info-list-item">
            Comments
            <p>${r.comments}</p>
          </li>
          <li class="info-list-item">
            Downloads
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}a()}const l=document.querySelector(".form"),c=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".loader");function y(){u.classList.remove("visually-hidden")}function a(){u.classList.add("visually-hidden")}l.addEventListener("submit",s=>{s.preventDefault(),y(),c.innerHTML="";const o=s.currentTarget.elements.inputname.value.trim();o!==""&&(m(o).then(r=>{p(r.hits),l.reset()}).catch(r=>d.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})),l.reset())});
//# sourceMappingURL=commonHelpers.js.map
