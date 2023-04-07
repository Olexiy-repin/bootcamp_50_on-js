//? Що код виведе до консолі?
// setTimeout(() => {
//   console.log('From setTimeout');
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   console.log('From promise');

//   resolve();
// });

// promise.then(() => {
//   console.log('From then');
// });

// console.log('The end');

//? Що код виведе до консолі?
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// new Promise((resolve, reject) => {
//   resolve();
// }).then(() => {
//   console.log(3);
// });

// new Promise((resolve, reject) => {
//   resolve();
// }).then(() => {
//   setTimeout(() => {
//     console.log(4);
//   }, 0);
// });

// new Promise((resolve, reject) => {
//   resolve();
// }).then(() => {
//   console.log(5);
// });

// setTimeout(() => {
//   console.log(6);
// }, 0);

// console.log(7);

//? Послідовність виконання асинхронного коду в event loop
setTimeout(() => {
  let counter = 0;

  for (let i = 0; i < 1e10; i += 1) {
    counter += 1;
  }

  console.log('Hello from setTimeout');

  console.log(counter);
}, 0);

new Promise((resolve, reject) => {
  resolve('Hello from then');
}).then(str => {
  let counter = 0;

  for (let i = 0; i < 1e10; i += 1) {
    counter += 1;
  }

  console.log(str);

  console.log(counter);
});

document.body.innerHTML = '<h1>Hello</h1>';

for (let i = 0; i < 1e4; i += 1) {
  console.log(i);
}
