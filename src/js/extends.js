/*
 * Наслідування з extends та super
 */

// class User {
//   #login;
//   #email;

//   constructor(userInfo) {
//     // this = {}

//     const { firstName, lastName, age, login, email } = userInfo;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.userAge = age;
//     this.#login = login;
//     this.#email = email;

//     // return this;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// console.dir(User);

// class Anonym extends User {
//   constructor(userInfo) {
//     super(userInfo);
//   }
// }

// const anonym = new Anonym({
//   firstName: 'Nicholas',
//   lastName: 'West',
//   age: 30,
//   login: 'vcvd',
//   email: 'iseegi@sak.sx',
// });

// console.log(anonym);

// class Developer extends User {
//   constructor(developerInfo = {}) {
//     const { countOfProjects, ...otherProps } = developerInfo;

//     super(otherProps);

//     this.countOfProjects = countOfProjects;
//   }

//   doDeveloperWork() {
//     console.log(`Роблю якусь роботу`);
//   }
// }

// const user = new Developer({
//   countOfProjects: 10,
//   firstName: 'Nicholas',
//   lastName: 'West',
//   age: 30,
//   login: 'vcvd',
//   email: 'iseegi@sak.sx',
// });

// console.log(user);

// console.log(user.getFullName());

// class Manager extends User {
//   constructor(managerInfo) {
//     // this = {}

//     const userInfo = {
//       firstName: managerInfo.firstName,
//       lastName: managerInfo.lastName,
//       age: managerInfo.age,
//       login: managerInfo.login,
//       email: managerInfo.email,
//     };

//     super(userInfo);

//     this.managerProp = managerInfo.managerProp;

//     // return this;
//   }

//   doManagerWork() {
//     console.log(`Роблю якусь роботу`);
//   }
// }

// const someManager = new Manager({
//   managerProp: 343,
//   firstName: 'Caleb',
//   lastName: 'Murray',
//   age: 20,
//   login: 'bgff',
//   email: 'uwigicnaf@ra.be',
// });

// console.log(someManager);

// console.log(someManager.getFullName());

// someManager.email = 'ocalul@cat.us';

// console.log(someManager);
