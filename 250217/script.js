const sayHello = () => console.log("hello");
const sayGoodBye = () => console.log("googbye");

const printMessage = (func) => {
  console.log("printing....");
  func();
};

// printMessage(sayHello()) X
// printMessage(sayHello);
// printMessage(sayGoodBye);

// console.log(1);
// setTimeout(() => console.log(2), 3000);
// console.log(3);

// const response = fetch(`https://learn.codeit.kr/api/employees`);
// const data = response.then((res) => res.json());
// console.log(response);
// console.log(data);
// data.then((d) => {
//   console.log(d);
// });

// const response = fetch("https://learn.codeit.kr/api/employees")
//   .then((res) => res.json())
//   .then((d) => {
//     console.log(d);
//   });

// const response = await fetch("https://learn.codeit.kr/api/employees");
// const data = await response.json();
// console.log(data);

// const delayString = (string) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(string);
//     }, 300);
//   });
// };

// delayString("hello").then((result) => console.log(result));

// const delayString = (string) => {
//   return new Promise((resolve, reject) => {
//     if (typeof string === "string") {
//       setTimeout(() => {
//         resolve(string);
//       }, 300);
//     } else {
//       reject(new Error("string only"));
//     }
//   });
// };

// delayString(1)
//   .then((result) => console.log(result))
//   .catch((e) => {
//     console.log(e);
//   });

// const data = await delayString("hello");
// const data2 = await delayString(1);
// console.log(data);
// console.log(data2);

const printEmployees = async (id) => {
  const res = await fetch(`https://learn.codeit.kr/api/employees/${id}`);
  const data = await res.json();
  console.log(data.name);
};

const result = async () => {
  for (let i = 1; i < 11; i++) {
    await printEmployees(i);
  }
};

result();
