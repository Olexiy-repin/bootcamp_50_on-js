const modalOpenBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const modalCloseBtnEl = document.querySelector('.js-modal-close');

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onDocumentKeyDown);
};

const onModalOpenBtnElClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onDocumentKeyDown);
};

const onModalCloseBtnElClick = event => {
  closeModal();
};

const onDocumentKeyDown = event => {
  console.log('event keydown');

  if (event.code === 'Escape') {
    closeModal();
  }
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnElClick);
modalCloseBtnEl.addEventListener('click', onModalCloseBtnElClick);
