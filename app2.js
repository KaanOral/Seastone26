/* GALLERY */


const photos = [
    { src: "./assets/Beards_Hollow_Beach_Kids.jpg"},
    {src:"./assets/alana__seaweed__workshop.jpg"},
    {src:"./assets/bay__sunset.jpg"},
    {src:"./assets/bayside__lounge__evening.jpg"},
    {src:"./assets/Cailyn__arlo__oysters.jpg"},
    {src:"./assets/first__homepage--option.jpg"},
    {src:"./assets/kids_in_line.jpg"},
    {src:"./assets/landing__page.jpg"},
    {src:"./assets/lynx__oyster.jpg"},
    {src:"./assets/person__in__chair__sunset.jpg"},
    {src:"./assets/razor__claming__spring__camp.jpg"},
    {src:"./assets/seastone__gathering--lone-sunset--pic.jpg"}

];

const galleryContainer = document.querySelector('.gallery__container');

const galleryHTML = photos.map(function(image) {
   
    return `
      <div class="photo" onclick="Image__pageHTML('${image.src}', '${image.description}')">
        <img src="${image.src}" alt="${image.category}" style="width: 100%; object-fit: contain; cursor: pointer;">
      </div>`;
}).join('')


    galleryContainer.innerHTML = galleryHTML;


    function Image__pageHTML(src, description) {
    localStorage.setItem('selectedImg', src);
    localStorage.setItem('selectedDesc', description);
    window.location.href = '../ImagePage.html';
}
