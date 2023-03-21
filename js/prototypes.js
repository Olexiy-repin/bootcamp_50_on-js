/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
// const userFunctionsStorage = {
//   changeFirstName(name) {
//     this.firstName = name;
//   },

//   changeAge(age) {
//     this.age = age;
//   },
// };

// const user = Object.create(userFunctionsStorage);

// user.firstName = 'Oleksii';
// user.age = 40;

// user.changeFirstName('Isaac Vaughn');

// console.log('user: ', user);

// const user1 = Object.create(userFunctionsStorage);

// user1.firstName = 'Alta Garner';
// user1.age = 20;

// user1.changeFirstName('Lena Lewis');

// console.log('user1: ', user1);

// const user2 = Object.create(userFunctionsStorage);

// user2.firstName = 'Ophelia Sullivan';
// user2.age = 30;

// console.log('user2: ', user2);

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()
// console.log(user.hasOwnProperty('changeAge'));

//* Цикл for...in, перебирає і власні, і не власні властивості.
// const user = {
//   firstName: 'Dora Barker',
//   age: 30,
// };

// const user1 = Object.create(user);

// user1.gender = 'male';

// console.log(user1);

// for (const key in user1) {
//   if (user1.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
