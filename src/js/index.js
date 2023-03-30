// import usersData from '../json/users.json';

// console.log(usersData);

// const userJSON =
//   '[{"firstName": "Oleksii","lastName": "Repin", "age": 30}, {"firstName": "Oleksii","lastName": "Repin", "age": 40}]';

// const user = JSON.parse(userJSON);

// console.log(user);

// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 40,
//   email: 'rupigimos@sacukteg.sh',

//   changeFirstName(newName) {
//     this.firstName = newName;
//   },
// };

// const JsonUser = JSON.stringify(user);

// console.log(JsonUser);

// const number = [1, 44];

// console.log(JSON.stringify(number));

// try {
//   const userJSON =
//   '[{"firstName": 'Oleksii',"lastName": "Repin", "age": 30}, {"firstName": "Oleksii","lastName": "Repin", "age": 40}]';

//   const user = JSON.parse(userJSON);

//   console.log(user);
// } catch (err) {
//   console.log(err);
// }

// console.log('End!');

const user = {
  firstName: 'Oleksii',
  lastName: 'Repin',
  age: 40,
  email: 'rupigimos@sacukteg.sh',
};

const items = ['jsdafkl', 'adsklf', 'aklsdfjla'];

localStorage.setItem('userData', JSON.stringify(user));
localStorage.setItem('items', JSON.stringify(items));

console.log(JSON.parse(localStorage.getItem('userData')));
console.log(JSON.parse(localStorage.getItem('items')));

// localStorage.clear();
localStorage.removeItem('userData');
