// const user1 = {
//   name: "user1",
//   cat: {
//     name: "Crew",
//     breed: "british shorthair",
//   },
// };

// const user2 = {
//   name: "user2",
// };

// const printCatName = (user) => {
//   // console.log(user.cat && user.cat.name);
//   console.log(user.cat?.name);
// };

// printCatName(user1);
// printCatName(user2);

// const rank = ["a", "b", "c", "d"];
// // const first = rank[0];
// // const second = rank[1];
// const [first, second, ...rest] = rank;
// console.log(first);
// console.log(second);
// console.log(rest);

// const func2 = (hello, [a1, a2, ...rank], bye) => {
//   console.log(hello);
//   console.log(a1);
//   console.log(a2);
//   console.log(bye);
//   console.log(rank);
// };

// func2("안녕", rank, "잘가");

// const user1 = {
//   name: "user1",
//   title: "title1",
//   cat: {
//     name: "cat1",
//     breed: "breed1",
//     age: 2,
//   },
// };

// const { name, cat, ...rest } = user1;

// console.log(name);
// console.log(cat);
// console.log(rest);

// const multiplyClosure = (x) => {
//   return (y) => {
//     return (z) => {
//       return x * y * z;
//     };
//   };
// };

// const multiplyClosure = (x) => (y) => (z) => x * y * z;

// console.log(multiplyClosure(2)(3)(4));

// const chars = ["a", "b", "c", "d"];

// let newarr = [];
// for (let arpa of chars) {
//   newarr.push(`Grade: ${arpa}`);
//   // newarr += `Grade: ${arpa}`;
//   // console.log(`Grade: ${arpa}`);
// }
// console.log(newarr);

const devices = [
  { name: "Galaxy Note", brand: "Samsung" },
  { name: "Macbook Pro", brand: "Apple" },
  { name: "iPad", brand: "Apple" },
  { name: "Galaxy Watch", brand: "Samsung" },
  { name: "iMac", brand: "Apple" },
  { name: "Galaxy Buds", brand: "Samsung" },
  { name: "Gram", brand: "LG" },
  { name: "Galaxy Book", brand: "Samsung" },
  { name: "Surface Pro", brand: "Microsoft" },
  { name: "ZenBook", brand: "Asus" },
  { name: "Macbook Air", brand: "Apple" },
];

// const apples = devices.filter((device) => device.brand === "Apple");
// const two = [];

// for (let device of devices) {
//   if (device.name.includes(" ")) {
//     two.push(device);
//   }
// }

// const lg = devices.some((device) => device.brand === "LG");
// const ap = devices.every((device) => device.brand === "Apple");

// console.log(lg, ap);

// if (e % 2 === 0) {
//   acc.even++;
// } else {
//   acc.odd++;
// }

// e % 2 === 0 ? acc.even++ : acc.odd++;
