/*
 *  Метод sort()
 */

//? Сортування чисел та рядків за замовчуванням
// const numbers = [3, 7, 2, 8, 1, 12, 25, 46];
// const sortedNumbers = [...numbers].sort();

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abc'];
// const sortedStrArr = [...strArr].sort();

// console.log('strArr: ', strArr);
// console.log('sortedStrArr: ', sortedStrArr);

//? Сортування чисел та рядків за умовою
// const numbers = [3, 7, 2, 8, 1, 45, 58];
// const sortedNumbers = [...numbers].sort((a, b) => {
//   return a - b;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abc'];
// const sortedStrArr = [...strArr].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log('strArr: ', strArr);
// console.log('sortedStrArr: ', sortedStrArr);

/*
? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
? по збільшенню значення властивості amount.
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const sortByAscendingAmount = carsArr => {
//   return [...carsArr].sort((a, b) => a.amount - b.amount);
// };

// console.table(cars);
// console.table(sortByAscendingAmount(cars));

/*
? Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
? за зменшенням значення властивості price.
*/

// const sortByDescendingPrice = carsArr => {
//   return [...carsArr].sort((a, b) => b.price - a.price);
// };

// console.table(cars);
// console.table(sortByDescendingPrice(cars));

/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/

// const sortByModel = (carsArr, order) => {
//   // 1 Варіант
//   if (order === 'asc') {
//     return [...carsArr].sort((a, b) => a.model.localeCompare(b.model));
//   } else if (order === 'desc') {
//     return [...carsArr].sort((a, b) => b.model.localeCompare(a.model));
//   }

//   // 2 Варіант
//   // return [...carsArr].sort((a, b) => {
//   //   if (order === 'asc') {
//   //     return a.model.localeCompare(b.model);
//   //   } else if (order === 'desc') {
//   //     return b.model.localeCompare(a.model);
//   //   }
//   // });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
