/*
? Відфільтруйте масив на унікальні значення.
*/
// const users = ['Maria', 'Linnie', 'Maria', 'Joseph', 'Linnie', 'Mark'];

/*
1 Ітерація
el = 'Maria';
idx = 0;
arr = ['Maria', 'Linnie', 'Maria', 'Joseph', 'Linnie', 'Mark'];

0 === 0;

2 Ітерація
el = 'Linnie';
idx = 1;
arr = ['Maria', 'Linnie', 'Maria', 'Joseph', 'Linnie', 'Mark'];

1 === 1;

3 Ітерація
el = 'Maria';
idx = 2;
arr = ['Maria', 'Linnie', 'Maria', 'Joseph', 'Linnie', 'Mark'];

0 === 2;

4 Ітерація
el = 'Joseph';
idx = 3;
arr = ['Maria', 'Linnie', 'Maria', 'Joseph', 'Linnie', 'Mark'];

3 === 3;

5 Ітерація
el = 'Linnie'
idx = 4;
arr = ['Maria', 'Linnie', 'Maria', 'Joseph', 'Linnie', 'Mark'];

1 === 4;

6 Ітерація
el = 'Mark'
idx = 5;
arr = ['Maria', 'Linnie', 'Maria', 'Joseph', 'Linnie', 'Mark'];

5 === 5;
*/

// const filteredUsers = users.filter((el, idx, arr) => arr.indexOf(el) === idx);

// console.log(users);
// console.log(filteredUsers);

// ? Імітація запиту на сервер.
// const firstFn = (name, callback) => {
//   setTimeout(() => {
//     console.log('1');

//     callback(name);
//   }, 2000);
// };

// firstFn('Oleksii', firstName => {
//   console.log(firstName);
// });

// ? Call Stack
// const fn1 = function () {
//   console.log('fn1');

//   fn2();
// };

// const fn2 = function () {
//   console.log('fn2');

//   fn3();
// };

// const fn3 = function () {
//   console.log('fn3');
// };

// fn1();

// ? splice
// const colors = ['red', 'green', 'blue'];

// const colorsCopy = [...colors];

// colorsCopy.splice(1, 1, 'orange', 'white');

// console.log(colorsCopy);

// ? flatMap
// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// Через reduce
// const studentsCourses = students.reduce((acc, student) => {
//   student.courses.forEach(course => {
//     acc.push(course);
//   });

//   return acc;
// }, []);

// console.log(studentsCourses);

// const filteredStudentsCourses = studentsCourses.filter((course, idx, arr) => {
//   return arr.indexOf(course) === idx;
// });

// console.log(filteredStudentsCourses);

// Через flatMap
// const studentsCourses = students.flatMap((student, idx, arr) => {
//   return student.courses;
// });

// console.log(studentsCourses);

// const filteredStudentsCourses = studentsCourses.filter((course, idx, arr) => {
//   return arr.indexOf(course) === idx;
// });

// console.log(filteredStudentsCourses);
