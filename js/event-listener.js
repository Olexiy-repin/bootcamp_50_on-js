/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?  - Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300
const swapBtnEl = document.querySelector('.js-swap-btn');
const imgEl = document.querySelector('.js-img');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');

const onSwapBtnElClick = event => {
  console.log(event);

  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random image';
};

swapBtnEl.addEventListener('click', onSwapBtnElClick);

removeListenerBtnEl.addEventListener('click', () => {
  console.log('Hello!');

  swapBtnEl.removeEventListener('click', onSwapBtnElClick);
});
