/*
2. Problem: Update Object Property
Objective: Given an object with a price property, increase the price by 20%. Update and display the modified object.
*/

let products = {
  name: "T-shirt",
  color: "black",
  price: 500,
  size: "xl",
};

products.price += products.price * 0.2;
console.log(products);
