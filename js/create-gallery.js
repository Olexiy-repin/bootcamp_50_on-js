const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador" width="" height="">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(cardInfo)
const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  // Створення li
  const galleryItemEl = document.createElement('li');

  galleryItemEl.classList.add('gallery-item');

  // Створення a
  const galleryLinkEl = document.createElement('a');

  galleryLinkEl.href = '#';

  galleryItemEl.append(galleryLinkEl);

  // Створення img
  const galleryImgEl = document.createElement('img');

  galleryImgEl.src = url;
  galleryImgEl.alt = alt;
  galleryImgEl.width = width;
  galleryImgEl.height = height;

  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

// Перебір масиву pictures через map
const galleryCardsArr = pictures.map(pictureInfo => {
  return makeGalleryCard(pictureInfo);
});

// Вставка колекції карток на сторінку
galleryListEl.append(...galleryCardsArr);
