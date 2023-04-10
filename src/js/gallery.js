// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashApi();

unsplashApi
  .fetchRandomPhotos()
  .then(response => {
    console.log(response);

    const { data } = response;

    galleryEl.innerHTML = createGalleryCards(data);
  })
  .catch(err => {
    console.log(err);
  });

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: formEl } = event;

  unsplashApi.query = formEl.elements.user_search_query.value;
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(response => {
      const { data } = response;

      if (data.total === 0) {
        galleryEl.innerHTML = '';
        loadMoreBtnEl.classList.add('is-hidden');

        return;
      }

      if (data.total_pages === 1) {
        galleryEl.innerHTML = createGalleryCards(data.results);
        loadMoreBtnEl.classList.add('is-hidden');

        return;
      }

      galleryEl.innerHTML = createGalleryCards(data.results);

      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnClick = event => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(response => {
      const { data } = response;

      galleryEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );

      if (unsplashApi.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
