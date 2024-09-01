let weight = 100;
let height = (5.7 * 30) / 100;
let bmi = weight / (height * height);
console.log(bmi.toFixed(2));

// let bmi = 30.2;

if (bmi < 18.5) {
  console.log("you are underweight");
} else {
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("you are overweight");
  } else {
    console.log("you are obese");
  }
}
