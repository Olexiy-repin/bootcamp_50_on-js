import localStorageService from './localstorage';

const contactFormEl = document.querySelector('.js-contact-form');
const userData = {};

const fillContactFormFields = () => {
  const userInfoFromLS = localStorageService.load('userInfo');

  if (userInfoFromLS === undefined) {
    return;
  }

  for (const key in userInfoFromLS) {
    contactFormEl.elements[key].value = userInfoFromLS[key];
  }
};

fillContactFormFields();

const onContactFormFielChange = event => {
  const { target: contactFieldEl } = event;

  const contactFieldValue = contactFieldEl.value;
  const contactFieldName = contactFieldEl.name;

  userData[contactFieldName] = contactFieldValue;

  localStorageService.save('userInfo', userData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorageService.remove('userInfo');
};

contactFormEl.addEventListener('change', onContactFormFielChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
