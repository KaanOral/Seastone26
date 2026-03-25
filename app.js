/* HIDDEN MENU */

const hamMenu = document.querySelector(".ham__menu");
const body = document.querySelector(".body");
const hiddenMenu = document.querySelector(".hidden__menu");
const hiddenMenuBtn = document.querySelector(".hidden__menu--btn");
const blackoutOverlay = document.querySelector('.blackout__overlay')
const nav = document.querySelector('.nav__hide')

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  hiddenMenu.classList.toggle("active");
 nav.classList.toggle('active')
     blackoutOverlay.classList.toggle('active')
});

hiddenMenuBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("active");
   hamMenu.classList.toggle("active");
 nav.classList.toggle('active')
      blackoutOverlay.classList.toggle('active')
;
});



/* INPUT FILTER */


const dropdowns = document.querySelectorAll('.select');


dropdowns.forEach(function(select) {
  
    select.addEventListener('change', function(event) {
        const selectedValue = event.target.value;
       renderGallery(selectedValue)
        console.log(selectedValue);
    })})



function renderGallery(filter = "") {

    const filteredPhotos = photos.filter(photo => {
        return filter === "" || photo.category === filter;
    });

    const galleryHTML = filteredPhotos.map(function(image) {
        return `
          <div class="photo" onclick="Image__pageHTML('${image.src}', '${image.description}')">
            <img src="${image.src}" alt="${image.category}" style="width: 100%; object-fit: contain; cursor: pointer;">
          </div>`;
    }).join('');

    galleryContainer.innerHTML = galleryHTML;
}








/* LOADING */

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader-hidden');
});
