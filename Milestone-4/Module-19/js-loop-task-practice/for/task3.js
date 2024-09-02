// Task 3

// Subtask-1:
let sum = 0;
for (let num = 91; num <= 129; num++) {
  if (num % 2 === 1) {
    sum += num;
  }
}
console.log("The Total odd sum is: " + sum);

// Subtask-2:
let evenSum = 0;
for (let num = 51; num <= 85; num++) {
  if (num % 2 === 0) {
    evenSum += num;
  }
}
console.log("The Total even sum is: " + evenSum);
