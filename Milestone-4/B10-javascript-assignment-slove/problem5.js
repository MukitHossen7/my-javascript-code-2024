function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let length = waitingTimes.length;
  let totalTime = 0;
  console.log(length);
  for (let times of waitingTimes) {
    console.log(times);
    totalTime += times;
  }
  console.log(totalTime);
}
console.log(waitingTime([3, 5, 7, 11, 6], 10));
// console.log(waitingTime(7, 10));
// console.log(waitingTime("[6,2]", 9));
// // console.log(waitingTime([6], 4));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));
