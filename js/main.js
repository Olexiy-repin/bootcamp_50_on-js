/*
 * Функції з побічними ефектами та чисті функції
 */

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);
// console.log(numbers);
// doubleMulti(numbers);
// console.log(numbers);
// doubleMulti(numbers);
// console.log(numbers);

//? Clear function
const numbers = [123, 56, 78, 9, 3];

const doubleMulti = arr => {
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i += 1) {
    newArr[i] *= 2;
  }

  return newArr;
};

console.log(doubleMulti(numbers));
console.log(doubleMulti(numbers));
console.log(doubleMulti(numbers));

console.log(numbers);
