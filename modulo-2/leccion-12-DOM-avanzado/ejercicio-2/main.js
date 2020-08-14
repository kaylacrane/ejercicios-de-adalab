'use strict';

/*
Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
Haz lo mismo para París y Nueva York
Nota: Usa imágenes que encuentres por Internet. 
*/

const citySelector = document.querySelector('.citySelector');
const imageDisplay = document.querySelector('.image');
const photoAlbum = {
  madrid: [
    'https://cw-gbl-gws-prod.azureedge.net/-/media/cw/emea/spain/offices/hero-image-emea-offices-madrid-small-750x480.jpg?rev=12dc462ad39441b2885ffeac4e642b56',
    'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/04/shutterstock_566971969-catarina-belova.jpg',
    'https://isatoday.files.wordpress.com/2015/02/spain-madrid-spring2014-culture_customs_traditions-egyptian_temple-alana__kahan-0.jpg',
  ],
  louisville: [
    'https://www.outfrontmedia.com/-/media/images/ofm/markets/louisville/louisville-hero.ashx',
    'https://media-cdn.tripadvisor.com/media/photo-s/0a/5d/11/2c/louisville-slugger-field.jpg',
    'https://assets1.roadtrippers.com/uploads/poi_gallery_image/image/374919750/-quality_60_-interlace_Plane_-resize_640x360_U__-gravity_center_-extent_640x360/place_image-image-e681d27d-f178-44af-a8bf-e231d4d77d35.jpg',
  ],
  montreal: [
    'https://images.thestar.com/b8YUwRJ_g-udpKdQriLiaEBLenE=/1086x815/smart/filters:cb(1591991928766)/https://www.thestar.com/content/dam/thestar/life/travel/2020/05/11/montreal-is-vibrant-and-fascinating-at-any-time-of-year/travel_montreal.jpg',
    'https://img.theculturetrip.com/768x432/wp-content/uploads/2020/01/gettyimages-860635218.jpg',
    'https://cdn.getyourguide.com/img/tour_img-2091387-146.jpg',
  ],
};
const montreal = photoAlbum.montreal;
const madrid = photoAlbum.madrid;
const louisville = photoAlbum.louisville;

function showPics(ev) {
  /* to avoid adding photos to div.image without end. resets div.image contents*/
  imageDisplay.innerHTML = '';
  for (const key in photoAlbum) {
    /* to compare selection value with city in photoAlbum*/
    if (key === ev.currentTarget.value) {
      const city = photoAlbum[key];
      for (let index = 0; index < city.length; index++) {
        const photo = city[index];
        const newImg = document.createElement('img');
        newImg.setAttribute('src', `${photo}`);
        newImg.style.width = '400px';
        newImg.style.display = 'block';
        imageDisplay.appendChild(newImg);
      }
    }
  }
}
citySelector.addEventListener('change', showPics);
