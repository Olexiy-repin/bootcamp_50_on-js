/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників
// const salaries1 = {
//   Keith: 200,
//   Sylvia: 300,
// };

// const salaries = Object.create(salaries1);
// salaries.John = 100;
// salaries.Ann = 160;
// salaries.Pete = 130;

// console.log(salaries);

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// 1 Варіант, через for...in
// let total = 0;

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);

// 2 Варіант, Object.keys(obj) + for...of
// const keysArr = Object.keys(salaries);
// let total = 0;

// console.log(salaries);
// console.log(keysArr);

// for (const key of keysArr) {
//   total += salaries[key];
// }

// console.log(total);

// 3 Варіант, Object.values(obj) + for...of
// const valuesArr = Object.values(salaries);
// let total = 0;

// console.log(salaries);
// console.log(valuesArr);

// for (const value of valuesArr) {
//   total += value;
// }

// console.log(total);
