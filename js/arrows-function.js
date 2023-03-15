/*
 * Стрілочні функції, явне - неявне повернення, arguments, повернення об`єкта
 */
//? Два і більше параметрів
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

//? Один параметр
// const greet = username => {
//   console.log(`Hello ${username}`);
// };

// greet('Oleksii');

//? Без параметрів
// const greet = () => {
//   console.log('Hello!');
// };

// greet();

//? arguments
// const sum = (...args) => {
//   console.log(args);

//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 5));

//? Неявне повернення
// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// const createProduct = product => ({ id: generateId(), ...product });

// console.log(createProduct({ name: '🍎', price: 30, quantity: 3 }));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = message => console.log(`✅ Success! ${message}`);

// const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
