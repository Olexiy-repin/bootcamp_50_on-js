const accordionBtnsEl = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnClick = event => {
  const accordionBtnEl = event.target;

  const accordionPanelEl = accordionBtnEl.nextElementSibling;

  // if (accordionPanelEl.classList.contains('active')) {
  //   accordionPanelEl.classList.remove('active');
  // } else {
  //   accordionPanelEl.classList.add('active');
  // }

  accordionPanelEl.classList.toggle('active');
};

accordionBtnsEl.forEach(accordionBtn => {
  accordionBtn.addEventListener('click', onAccordionBtnClick);
});
