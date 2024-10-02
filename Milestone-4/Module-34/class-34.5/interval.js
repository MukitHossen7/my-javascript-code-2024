console.log(1);
console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 4000);

console.log(4);
console.log(5);
console.log(6);

let num = 0;
const timer = setInterval(() => {
  num++;
  if (num >= 10) {
    clearInterval(timer);
  }
  console.log(num);
}, 2000);
