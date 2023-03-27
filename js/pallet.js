const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.bgColor = color;
  });
};

paintElements();

const onPalletElClick = event => {
  if (event.target.nodeName !== 'LI') {
    return;
  }

  const { target: liEl } = event;

  const liBgColor = liEl.dataset.bgColor;
  const spanEl = liEl.querySelector('.js-pallet__item-color');

  spanEl.textContent = liBgColor;
};

palletEl.addEventListener('click', onPalletElClick);
