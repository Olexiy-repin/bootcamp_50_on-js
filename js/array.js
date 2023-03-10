/*
 *  Масиви. Присвоєння за посиланням і за значенням.
 */
// const numbers = [1, 3435, 5543, 23, 4];

// console.log(numbers);
// console.log(numbers[2]);

// numbers[2] = 100;

// console.log(numbers);

// let a = 10;
// const b = a;

// console.log(`a: ${a}`);
// console.log(`b: ${b}`);

// a = 20;

// console.log(`a: ${a}`);
// console.log(`b: ${b}`);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// arr1.push(10);

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

/*
 * Перебор масива циклами for та for...of
 */

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/
// Через for
// const numbers = [2, 17, 94, 1, -20, -50, -1, 23, -40, 37];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min);

// Через for...of
// const numbers = [2, 17, 94, 1, -20, -50, -1, 23, -40, 37];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);
