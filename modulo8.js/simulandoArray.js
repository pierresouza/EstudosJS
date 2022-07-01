const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" };
console.log(quaseArray);
Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});

console.log(quaseArray[0]);

const meuArray = ["Rafael", "Ana", "Bia"];
console.log(quaseArray.toString(), meuArray);

// const usersList = [
//   { name: "João", credit: 600 },
//   { name: "Maria", credit: 900 },
//   { name: "Carlos", credit: 300 },
//   { name: "Vanessa", credit: 100 },
// ];

// const newUsersList = usersList.filter(
//   (user, index, array) => user.credit > 500
// );

// console.log(newUsersList);

// const usersList = [
//   { name: "João", credit: 600 },
//   { name: "Maria", credit: 900 },
//   { name: "Carlos", credit: 300 },
//   { name: "Vanessa", credit: 100 },
// ];

// const newUsersList = usersList.find(
//   (user, index, array) => user.name === "Carlos"
// );

// console.log(newUsersList);

// const usersList = [
//   { name: "João", credit: 600 },
//   { name: "Maria", credit: 900 },
//   { name: "Carlos", credit: 300 },
//   { name: "Vanessa", credit: 100 },
// ];

// const newUsersList = usersList.findIndex(
//   (user, index, array) => user.name === "Carlos"
// );

// console.log(newUsersList);

// const usersList = [
//   { name: "João", credit: 600 },
//   { name: "Maria", credit: 900 },
//   { name: "Carlos", credit: 300 },
//   { name: "Vanessa", credit: 100 },
// ];

// const newUsersList = usersList.findIndex(
//   (user, index, array) => user.name === "Carlos"
// );

// const usersList = [
//   { name: "João", credit: 600 },
//   { name: "Maria", credit: 900 },
//   { name: "Carlos", credit: 300 },
//   { name: "Vanessa", credit: 100 },
// ];

// const result1 = usersList.every((user, index, array) => user.credit < 1000);
// const result2 = usersList.every((user) => user.credit < 500);
// console.log(result1);
// console.log(result2);

// const usersList = [
//   { name: "João", credit: 600 },
//   { name: "Maria", credit: 900 },
//   { name: "Carlos", credit: 300 },
//   { name: "Vanessa", credit: 100 },
// ];

// const result = usersList.some((user, index, array) => user.credit === 300);
// console.log(result);

const numberList = [4, 5, 7, 8, 2];
// const orderedList = numberList.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   return 0;
// });

const orderedList = numberList.sort((a, b) => (a > b ? 1 : -1));
const orderedList2 = numberList.sort((a, b) => a - b);

console.log(orderedList);
console.log(orderedList2);
