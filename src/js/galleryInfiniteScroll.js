// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const intersectionTargetEl = document.querySelector(
  '.js-intersection-target-element'
);

const unsplashApi = new UnsplashApi();

const observer = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      unsplashApi.page += 1;

      unsplashApi
        .fetchPhotosByQuery()
        .then(data => {
          galleryEl.insertAdjacentHTML(
            'beforeend',
            createGalleryCards(data.results)
          );

          if (unsplashApi.page === data.total_pages) {
            observer.unobserve(intersectionTargetEl);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  {
    root: null,
    rootMargin: '0px 0px 600px 0px',
    threshold: 1,
  }
);

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: formEl } = event;

  unsplashApi.query = formEl.elements.user_search_query.value;
  unsplashApi.page = 498;

  unsplashApi
    .fetchPhotosByQuery()
    .then(data => {
      if (data.total === 0) {
        galleryEl.innerHTML = '';

        return;
      }

      if (data.total_pages === 1) {
        galleryEl.innerHTML = createGalleryCards(data.results);

        return;
      }

      galleryEl.innerHTML = createGalleryCards(data.results);
      setTimeout(() => {
        observer.observe(intersectionTargetEl);
      }, 500);
    })
    .catch(err => {
      console.log(err);
    });
};

// const onLoadMoreBtnClick = event => {
//   unsplashApi.page += 1;

//   unsplashApi
//     .fetchPhotosByQuery()
//     .then(data => {
//       galleryEl.insertAdjacentHTML(
//         'beforeend',
//         createGalleryCards(data.results)
//       );

//       if (unsplashApi.page === data.total_pages) {
//         loadMoreBtnEl.classList.add('is-hidden');
//       }
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

searchFormEl.addEventListener('submit', onSearchFormSubmit);
