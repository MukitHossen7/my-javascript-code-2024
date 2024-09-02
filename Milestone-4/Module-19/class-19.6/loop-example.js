//Different ways to use loop

//Problem:1

// for (let i = 1; i <= 30; i++) {
//   if (i % 5 === 0) {
//     console.log("Divisible by 5 value is " + i);
//   }
//   console.log(i);
// }

// let num = 1;
// while (num <= 30) {
//   if (num % 3 === 0) {
//     console.log("Number is " + num);
//   }
//   num++;
// }
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log("Divisible by 3 value is " + i);
//   }
//   console.log(i);
// }

// for (let num = 1; num <= 50; num++) {
//   if (num % 3 === 0 || num % 5 === 0) {
//     if (num % 3 === 0) {
//       console.log("Divisible by 3 " + num);
//     } else if (num % 5 === 0) {
//       console.log("Divisible by 5 " + num);
//     }
//   }
// }

// let num = 1;
// while (num <= 50) {
//   if (num % 3 === 0 || num % 5 === 0) {
//     if (num % 3 === 0) {
//       console.log("Divisible by 3 " + num);
//     } else if (num % 5 === 0) {
//       console.log("Divisible by 5 " + num);
//     }
//   }
//   num++;
// }

// let num = 1;

// while (num <= 150) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("divisibe by 3 and 5 " + num);
//   }
//   num++;
// }

// for (let num = 1; num <= 150; num++) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("divisibe by 3 and 5 " + num);
//   }
// }

let sum = 0;
for (let num = 1; num <= 20; num++) {
  if (num % 3 === 0) {
    console.log("divisible by 3 " + num);
    sum += num;
  }
}
console.log(sum);
