const messagesWrapperEl = document.querySelector('.js-messages-wrapper');

const onCloseBtnClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const { target: closeBtnEl } = event;
  const messageEl = closeBtnEl.closest('.js-message');

  messageEl.remove();
};

messagesWrapperEl.addEventListener('click', onCloseBtnClick);
