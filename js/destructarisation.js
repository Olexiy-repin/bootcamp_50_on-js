/*
 * Деструктуризація об'єктів
 */
/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const { lastName, age: userAge, firstName, isAdmin = false } = user;

// console.log(firstName);
// console.log(lastName);
// console.log(userAge);
// console.log(isAdmin);

/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   employees,
//   langs: { original, secondary },
// } = team;

// console.log(employees);
// console.log(original);
// console.log(secondary);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];
// const [, , user3] = names;

// console.log(user3);

// const rgb = [210, 100, 50];
// const [red, green, blue] = rgb;

// console.log(red);
// console.log(green);
// console.log(blue);
