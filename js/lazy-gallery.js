const galleryListEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.js-banner__img');
const galleryImagesEl = document.querySelectorAll('.js-gallery__img');

const onGalleryImgElClick = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const { target: galleryImgEl } = event;

  const bannerUrl = galleryImgEl.dataset.bannerUrl;
  const galleryImgAltQuery = galleryImgEl.alt;

  bannerImgEl.src = bannerUrl;
  bannerImgEl.alt = galleryImgAltQuery;
};

galleryListEl.addEventListener('click', onGalleryImgElClick);

galleryImagesEl.forEach(galleryImgEl => {
  galleryImgEl.addEventListener(
    'load',
    event => {
      event.target.classList.add('appear');
    },
    { once: true }
  );
});

const addSrcAttrToImg = () => {
  galleryImagesEl.forEach(el => {
    el.src = el.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');

  script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading підтримується');
  addSrcAttrToImg();
} else {
  console.log('Атрибут loading не підтримується');
  document.body.append(createLazySizesScript());
}
