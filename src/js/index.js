import math from './math';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

console.log(Notify);

const { add, multi, number } = math;

console.log(number);

Notify.info('Done!');

// console.log(add(10, 20));
// console.log(multi(20, 10));
// console.log(number);

// console.log(user);
