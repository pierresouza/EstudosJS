const fruits = ["🍎", "🍇"];

const apples = fruits.map(function (fruit) {
  return "<li>" + fruit + "</li>";
});

// const fruitsReverse = fruits.reverse();
// const fruitsReverse = [...fruits].reverse();

// console.log(fruits);
// console.log(fruitsReverse);

fruits.forEach(function (fruit) {
  console.log(fruit);
});
