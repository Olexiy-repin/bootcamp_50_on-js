/*
 * Операція spread замість concat і slice
 */

//* Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = [100, ...numbers, 10];

// console.log('numbers', numbers);
// console.log('numbersCopy', numbersCopy);

// numbersCopy.push(19);

// console.log('numbers', numbers);
// console.log('numbersCopy', numbersCopy);

//* Об'єднання масивів
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = ['Andrew', ...oldClients, 'Rena', ...newClients, 'Woods'];

// console.log(allClientsWithOldFirst);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, -10, 4, 5, 6];
// const min = Math.max(...numbers);

// console.log(min);

/*
 * Операція spread замість Object.assign({}, obj)
 */
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const userCopy = {
//   ...user,
// };

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// userCopy.age = 40;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };
// const userCopy = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// userCopy.someArr.push(10);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

/*
 * Операція rest
 */

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
? Всі аругменти будуть тільки числами.
*/

// const calcAverage = function (...args) {
//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total / args.length;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2
