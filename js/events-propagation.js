/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const textEl = document.querySelector('.js-text');

sectionEl.addEventListener(
  'click',
  event => {
    console.group('addEventListener on Section');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget', event.currentTarget);
    console.groupEnd();
  },
  {
    capture: true,
    once: true,
  }
);

sectionEl.addEventListener('click', event => {
  console.group('addEventListener on Section');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener(
  'click',
  event => {
    console.group('addEventListener on Div');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget', event.currentTarget);
    console.groupEnd();
  },
  {
    capture: true,
    once: true,
  }
);

divEl.addEventListener('click', event => {
  console.group('addEventListener on Div');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});

textEl.addEventListener(
  'click',
  event => {
    console.group('addEventListener on P');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget', event.currentTarget);
    console.groupEnd();
  },
  {
    capture: true,
    once: true,
  }
);

textEl.addEventListener('click', event => {
  console.group('addEventListener on P');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});
