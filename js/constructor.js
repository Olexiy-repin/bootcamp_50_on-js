/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор
const User = function (userInfo) {
  // let this = {};

  const { firstName, lastName, age, phoneNumber, login, password } = userInfo;

  this.firstName = firstName;
  this.lastname = lastName;
  this.age = age;
  this.phoneNumber = phoneNumber;
  this.login = login;
  this.password = password;

  // this.changePassword = function (newPass) {
  //   this.password = newPass;
  // };

  // return this;
};

User.prototype.changePassword = function (newPass) {
  this.password = newPass;
};

console.dir(User);

const user = new User({
  firstName: 'Dale',
  age: 20,
  lastName: 'Hill',
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
});

console.log(user);

const user1 = new User({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 30,
  phoneNumber: '(097) 60-62-231',
  login: 'cu@hecekalo.edu',
  password: 'qwerty123',
});

console.log(user1);

user1.changePassword('24354655645');

console.log(user1);

// const user1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   phoneNumber: '(096) 58-05-459';
//   login: 'id@si.pg';
//   password: '123456'
// };

// const user2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   login: 'cu@hecekalo.edu';
//   phoneNumber: '(097) 60-62-231';
//   password: 'qwerty123'
// };

//? Створюємо методи для наших екземплярів
