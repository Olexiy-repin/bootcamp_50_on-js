/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

class User {
  #password = null;

  static test = 5;

  constructor(userInfo) {
    // let this = {};
    const { firstName, lastName, age, phoneNumber, login, password } = userInfo;

    this.firstName = firstName;
    this.lastname = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.login = login;
    this.#password = password;

    // return this;
  }

  changeAge(newAge) {
    this.age = newAge;
  }

  get password() {
    return this.#password;
  }

  set password(newPass) {
    this.#password = newPass;
  }
}

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

console.log(user.password);

user.password = 'newpassword';

console.log(user.password);

// const user1 = new User({
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 30,
//   phoneNumber: '(097) 60-62-231',
//   login: 'cu@hecekalo.edu',
//   password: 'qwerty123',
// });

// console.log(user1);
