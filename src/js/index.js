const names = ['Clarence', 'Beulah', 'Clarence', 'Don', 'Beulah', 'Franklin'];
const uniqueNames = new Set(names);

uniqueNames.add('Leon');
uniqueNames.add('Leon');
uniqueNames.add('Leon');
uniqueNames.add('Leon');

console.log(names);
console.log(uniqueNames.keys());
