/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

/*
? Виведіть числа від 1 до 50
*/

// let i = 1;

// while (i <= 50) {
//   console.log(i);

//   i += 1;
// }

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишіть цикл, який пропонує в prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/

// let userNumber;

// do {
//   userNumber = Number(prompt('Введіть число більше 100!'));
// } while (userNumber <= 100);

// console.log(userNumber);

/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// 1 Варіант
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 2 Варіант
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';

//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }
