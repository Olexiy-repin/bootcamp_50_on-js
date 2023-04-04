// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */
//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку
// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');

//   script.src = url;

//   document.body.append(script);

//   script.addEventListener(
//     'load',
//     event => {
//       onSuccess(`Скрипт ${url} завантажився успішно!`);
//     },
//     { once: true }
//   );

//   script.addEventListener(
//     'error',
//     event => {
//       onError(`Скрипт ${url} не завантажився!`);
//     },
//     { once: true }
//   );
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

//? Передайте кобэк, який буде викликатися по завершеню завантаженя скрипта

//? Опрацюйте помилки

//? Завантаженя декількох скриптів

//? Пекельна піраміда колбеків

//? Рішення через проміси
// const loadScript = url => {
//   const promise = new Promise((resolve, reject) => {
//     const script = document.createElement('script');

//     script.src = url;

//     document.body.append(script);

//     script.addEventListener(
//       'load',
//       event => {
//         resolve(`Скрипт ${url} завантажився успішно!`);
//       },
//       { once: true }
//     );

//     script.addEventListener(
//       'error',
//       event => {
//         reject(`Скрипт ${url} не завантажився!`);
//       },
//       { once: true }
//     );
//   });

//   return promise;
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//   .then(message => {
//     console.log(message);

//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
//     );
//   })
//   .then(message => {
//     console.log(message);

//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
//     );
//   })
//   .then(message => {
//     console.log(message);
//   })
//   .catch(err => {
//     console.log(err);
//   });
