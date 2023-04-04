/*
 * Проміси
 */

//? конструктор new Promise(callback(resolve, reject));
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();

//     console.log(randomNumber);

//     if (randomNumber > 0.5) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(promise);

//     console.log(data);

//     return data + '!!!!!';
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   })
//   .finally(() => {
//     console.log('The end!');
//   });

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   });

//? TASK 03
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

console.log('First');

const promise = new Promise((resolve, reject) => {
  console.log('class Promise');

  resolve('Done!');
});

setTimeout(() => {
  console.log('SetTimeout');
}, 0);

promise.then(data => {
  console.log(data);
});

console.log('End!');
