/*
 * Синхронний vs Асинхронний JS
 */

// const timeoutId = setTimeout(() => {
//   console.log('SetTimeout');
// }, 5000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
// }, 2000);

// console.log('First');

// console.log('Second');

// console.log('Third');

// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
// const intervalId = setInterval(() => {
//   console.log('SetInterval!');
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);
