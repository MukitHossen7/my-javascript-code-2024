// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total);

// const num = [1, 2, 3, 4];
// const reduceNum = num.reduce((previous, current) => previous + current, 0);
// console.log(reduceNum);

const products = [
  { id: 1, name: "lenovo", price: 62000 },
  { id: 2, name: "dell", price: 42000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 162000 },
];

//map
const mapName = products.map((product) => product.name);
console.log(mapName);

const mapPrice = products.map((product) => product.price);
console.log(mapPrice);

//forEach()
products.forEach((product) => console.log(product.id));
products.forEach((product) => console.log(product.price));

//filter()
const filterPrice = products.filter((product) => product.price > 50000);
console.log(filterPrice);

//find()
const findPrice = products.find((product) => product.price < 50000);
console.log(findPrice);

//Reduce()
const totalPrice = products.reduce(
  (previous, current) => previous + current.price,
  0
);
console.log(totalPrice);
