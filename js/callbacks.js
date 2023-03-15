/*
 * Колбек-функції, функції вищого порядку
 */
// const greet = function (callback) {
//   // let callback = ref -> simpleGreet;

//   const username = prompt('Введіть ваше імʼя!');

//   callback(username);
// };

// const prettyGreet = function (firstName) {
//   console.log(`Hello ${firstName} 👋`);
// };

// const simpleGreet = function (firstName) {
//   console.log(`Hello ${firstName}`);
// };

// greet(simpleGreet);
// greet(prettyGreet);

//? Реєстрація подій на сторінці
// const userEmailEl = document.querySelector('.js-contact-form-email');

// const logValues = function (event) {
//   console.log(event.target.value);
// };

// userEmailEl.addEventListener('blur', logValues);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.
*/
// const each = function (array, callback) {
//   const newArr = [];

//   for (const item of array) {
//     newArr.push(callback(item));
//   }

//   return newArr;
// };

// const numbers = [1, 2, 3, 4, 5];

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// console.log('numbers: ', numbers);
// console.log(each(numbers, multi));
// console.log(each(numbers, add));

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без id, а також колбек-функцію.
? Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор до властивості id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль
*/

// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// const createProduct = function (product, callback) {
//   const productWithId = {
//     id: generateId(),
//     ...product,
//   };

//   callback(productWithId);
// };

// const logProduct = function (product) {
//   console.log(product);
// };

// const logTotalPrice = function ({ price, quantity }) {
//   console.log(price * quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Додайте об'єкту account методи  withdraw(amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`) якщо amount більше this.balance
? інакше знімаємо гроші з балансу і викликаємо onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо onSuccess(`Account balance: ${this.balance}`)
*/
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! Account balance ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
