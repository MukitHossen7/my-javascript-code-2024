// let weight = 80;
// let height = 1.71;

// let bmi = weight / (height ** 2); /////// ** 2
// console.log(bmi.toFixed(2));

let BMI = 15.5;

if (BMI < 18.5) {
  console.log("you are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are overweight");
} else {
  console.log("you are obese");
}
