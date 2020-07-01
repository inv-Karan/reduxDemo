// updating arrays with immutability

const numbers = [1, 2, 3];

const add = [...numbers, 4]; /* [4, ...numbers] */
console.log(add);

const index = numbers.indexOf(2); /* finding index of '2' in numbers array to later add '4' before '2' */
const added = [
  ...numbers.slice(0, index), 
4, 
...numbers.slice(index)
];
console.log(added);

const removed = numbers.filter(
  n => n !== 2
);
console.log(removed);

const replaced = number.map(
  n => n === 2 ? 20 : n
);
console.log(replaced);