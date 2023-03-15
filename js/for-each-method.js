/*
 * forEach() замість циклів for і for...of для масивів
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// Через for...of
// console.log(fruits);

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// Через forEach();
// console.log(fruits);

// fruits.forEach((el, idx, array) => {
//   console.log(el, idx, array);
// });

// function forEach(callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     callback(arr[i], i, arr);
//   }
// }

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/
// function logItems(items) {
//   console.log(items);

//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   items.forEach((el, idx, arr) => {
//     console.log(`${idx + 1} - ${el}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   console.log(nameList);
//   console.log(phoneList);

//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   nameList.forEach((el, idx, arr) => {
//     console.log(`${el}: ${phoneList[idx]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/
function calсulateAverage(...args) {
  let total = 0;

  console.log(args);

  // for (let i = 0; i < args.length; i += 1) {
  //   total += args[i];
  // }

  args.forEach((el, idx, arr) => {
    total += el;
  });

  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
