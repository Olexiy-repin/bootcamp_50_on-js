/*
 * Функціональний вираз та оголошення функції.
 * Параметри, аргументи, повернення.
 */
// function назва_функції(параметр_1, параметр_2...) {
// тіло функції
// }

//* Function declaration
// greet('Oleksii');

// function greet(userName) {
//   // let userName = undefined;
//   alert(`Hello ${userName}!`);
// }

//* Function expresion
// const greet = function (userName) {
//   //   // let userName = undefined;
//   alert(`Hello ${userName}!`);
// };

// greet('Oleksii');

// const sum = function (number1, number2) {
//   const result = number1 + number2;

//   return result;
// };

// const sumResult = sum(10, 20);

// console.log(sumResult);

/*
? Напишіть функцію printContactsInfo(names, phones), яка виводить у консоль ім'я і телефонний номер користувача.
? Параметри names і phones будуть передані рядками, розділені комами.
? Порядковий номер імен і телефонів у рядках вказують на відповідність.
? Кількість імен і телефонів гарантовано однакова.
*/

// const printContactsInfo = function (names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// };

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );
// printContactsInfo('Vera,Carr,Violet,Sherman', '89001234567,89001112233,890055566377,890055566300');

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
? Всі аругменти будуть тільки числами.
*/

// const calcAverage = function () {
//   let total = 0;

//   for (const number of arguments) {
//     total += number;
//   }

//   return total / arguments.length;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = function (name) {
  if (courses.includes(name)) {
    return `У вас вже є такий курс, як ${name}`;
  }

  courses.push(name);
};

const removeCourse = function (name) {
  const indexOfCourse = courses.indexOf(name);

  if (indexOfCourse === -1) {
    return `Курс ${name} не знайдено`;
  }

  courses.splice(indexOfCourse, 1);
};

const updateCourse = function (oldName, newName) {
  const indexOfOldCourse = courses.indexOf(oldName);

  if (indexOfOldCourse === -1) {
    courses.push(newName);
    return;
  }

  courses.splice(indexOfOldCourse, 1, newName);
};

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
console.log(addCourse('CSS')); // 'У вас вже є такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
console.log(removeCourse('Vue')); // 'Курс за такою назвою не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
updateCourse('С++', 'PHP'); // 'Курса за такою назвою не знайдено'
console.log(courses);
