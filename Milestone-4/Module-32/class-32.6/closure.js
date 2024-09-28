function makeCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const serve1 = makeCounter();
const serve2 = makeCounter();
const serve3 = makeCounter();
console.log(serve1());
console.log(serve1());
console.log(serve1());
console.log(serve1());
console.log(serve1());
console.log(serve1());
console.log(serve1());
console.log(serve2());
console.log(serve2());
console.log(serve2());
console.log(serve3());
console.log(serve3());
