let num1 = 6;
let num2 = 5;

function multiply(a, b) {
  a = 20;
  const result = a * b;
  return result;
}
console.log(num1);
const output = multiply(num1, num2);
console.log(output);
console.log(num1);

const student1 = { name: "sakib", patner: "Bobli" };
const student2 = { name: "jalil", patner: "min" };

function movei(obj1, obj2) {
  obj1.name = "Babpi";
  obj2.patner = "Porimoni";
  //   console.log("Inside function obj", obj1);
  //   console.log("Inside function obj", obj2);
}
console.log(student1, student2);
movei(student1, student2);
console.log(student1, student2);
