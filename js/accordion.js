const accordionListEl = document.querySelector('.js-accordion-list');

const onAccordionBtnClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const { target: accordionBtnEl } = event;
  const panelEl = accordionBtnEl.nextElementSibling;

  panelEl.classList.toggle('active');
};

accordionListEl.addEventListener('click', onAccordionBtnClick);
