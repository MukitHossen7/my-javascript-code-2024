// Task 3

// Subtask-1:

let num = 81;
let sum = 0;
while (num <= 131) {
  if (num % 2 !== 0) {
    console.log("The odd number is " + num);
    sum += num;
  }
  num++;
}
console.log(sum);

//Subtask-2:

let num2 = 206;
let sum2 = 0;
while (num2 <= 311) {
  if (num2 % 2 === 0) {
    console.log("The even number is " + num2);
    sum2 += num2;
  }
  num2++;
}

console.log(sum2);
