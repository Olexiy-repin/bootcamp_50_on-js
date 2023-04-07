// https://unsplash.com/

import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const paginationContainerEl = document.querySelector('.js-tui-pagination');

const unsplashApi = new UnsplashApi();

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 10,
  page: 1,
  template: {
    page: '<a href="#" class="tui-page-btn"><span style="color: tomato">{{page}}</span></a>',
    currentPage:
      '<strong style="background-color: #000000; color: #ffffff;" class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
const pagination = new Pagination(paginationContainerEl, options);

pagination.on('beforeMove', event => {
  const { page } = event;

  unsplashApi.page = page;

  unsplashApi
    .fetchPhotosByQuery()
    .then(data => {
      galleryEl.innerHTML = createGalleryCards(data.results);
    })
    .catch(err => {
      console.log(err);
    });
});

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: formEl } = event;

  unsplashApi.query = formEl.elements.user_search_query.value;
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(data => {
      if (data.total === 0) {
        galleryEl.innerHTML = '';
        pagination.reset(0);
        paginationContainerEl.classList.add('is-hidden');

        return;
      }

      if (data.total_pages === 1) {
        galleryEl.innerHTML = createGalleryCards(data.results);
        pagination.reset(0);
        paginationContainerEl.classList.add('is-hidden');

        return;
      }

      galleryEl.innerHTML = createGalleryCards(data.results);

      pagination.reset(data.total);
      paginationContainerEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
