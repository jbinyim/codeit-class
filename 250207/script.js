// console.log(1 + 2);
// Symbol(3);
// Symbol("hello");

// const falsy = [false, null, undefined, NaN, 0, ""];

// for (let item of falsy) {
//   if (item === true) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// const truthy = [true, "hello", 12.3, -333, [], {}];

// for (let i of truthy) {
//   console.log(Boolean(i));
// }

// console.log(null && undefined);

// function printThis() {
//   console.log(this);
// }

// const first = {
//   content: "first",
//   printThis: printThis,
// };

// const second = {
//   content: "second",
//   printThis: printThis,
// };

// first.printThis();
// second.printThis();

const one = {
  head: "head",
  arr: [1, 2, 3],
};

const two = {
  body: "body",
  arr: [6, 7, 8],
};

const three = {
  head: one.head,
  body: two.body,
  arr: [...one.arr, 4, 5, ...two.arr],
};

console.log(three);
