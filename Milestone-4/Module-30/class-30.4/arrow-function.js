// function declearation

function add(num1 = 0, num2 = 0) {
  return num1 + num2;
}
console.log(add(30, 20));

// function expression

const sum = function (num1 = 0, num2 = 0) {
  return num1 + num2;
};
console.log(sum(10, 20));

// arrow function

const multication = (a, b, c, d, e) => a * b * c * d * e;

console.log(multication(8, 5, 10, 4, 2));
