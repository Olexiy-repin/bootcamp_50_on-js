const calendarBodyEl = document.querySelector('.js-table-body');
let prevCalendarItem = null;

const onCalendarItemClick = event => {
  // Записуємо цільовий елемент до зміної calendarItem
  const { target: calendarItem } = event;

  // Якщо це порожня td, то нічого робити не потрібно
  if (calendarItem.textContent === '') {
    return;
  }

  // Якщо це один й той самий елемент, то перемикаємо клас active
  if (prevCalendarItem === calendarItem) {
    calendarItem.classList.toggle('active');

    return;
  }

  // Якщо це не перший клік, то прибираємо з попереднього елмента клас active
  if (prevCalendarItem !== null) {
    prevCalendarItem.classList.remove('active');
  }

  calendarItem.classList.add('active');
  prevCalendarItem = calendarItem;
};

calendarBodyEl.addEventListener('click', onCalendarItemClick);
