function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let length = waitingTimes.length;
  let totalTime = 0;
  for (let times of waitingTimes) {
    totalTime += times;
  }
  let averageInterviewTime = Math.round(totalTime / length);
  let serialNo = serialNumber - 1;
  let interviewPending = serialNo - length;
  let isratWaitingTime = averageInterviewTime * interviewPending;
  return isratWaitingTime;
}
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
