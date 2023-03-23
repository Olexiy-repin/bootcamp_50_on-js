/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const inputEl = document.querySelector('.js-username-input');
const usernameOutputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

inputEl.addEventListener('focus', event => {
  inputEl.style.outline = '2px solid teal';
});

inputEl.addEventListener('blur', event => {
  inputEl.style.outline = 'none';
});

inputEl.addEventListener('input', event => {
  if (inputEl.value === '') {
    usernameOutputEl.innerHTML = 'користувач';

    return;
  }

  usernameOutputEl.innerHTML = inputEl.value;
});

inputEl.addEventListener('change', event => {
  console.log('Hello!');
});

checkboxEl.addEventListener('change', event => {
  console.dir(checkboxEl);

  if (checkboxEl.checked && inputEl.value !== '') {
    submitBtnEl.disabled = false;
  } else {
    submitBtnEl.disabled = true;
  }
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log('Hello from submit!');

  contactFormEl.reset();
  usernameOutputEl.innerHTML = 'користувач';
});
