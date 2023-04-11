/*
 * try/catch
 * Помилки фази компіляції відловити неможливо. Тільки помилки фази run time.
 * Обʼєкт помилки
 * try/catch працює тільки з синхроним кодом
 * Обробка помилок в асинхроному коді
 */

console.log('Start!');

setTimeout(() => {
  try {
    const number = 10;

    console.log(number);

    number = 20;
  } catch (err) {
    console.dir(err);
  }
}, 2000);

console.log('End!');
