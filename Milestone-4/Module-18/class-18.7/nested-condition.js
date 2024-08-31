// Nested Condition

let time = 2;
if (time <= 20) {
  console.log("Good Morning");
} else {
  if (time >= 22 && time < 1) {
    console.log("Office Time");
  } else if (time === 1) {
    console.log("Lance Time");
  } else if (time >= 16 && time < 18) {
    console.log("Good afternoon");
  } else if (time >= 18 && time < 20) {
    console.log("Good evening");
  } else if (time >= 20 && time < 5) {
    console.log("Good Night");
  }
}
