// Multiple Condition
// let age = 30;
// if (age >= 18 && age < 28) {
//   console.log("Join this Party");
// } else {
//   console.log("You go Home");
// }

// let admin = "sifat";
// let pass = 12348;
// if (pass === 12345 || admin === "Mukit") {
//   console.log("Login successful");
// } else {
//   console.log("Please try again");
// }

let salary = 10000;
let isBcs = true;
let height = 70;

// if (salary >= 20000 || isBcs === true || height >= 60) {
//   console.log("Aso baba kobul");
// } else {
//   console.log("vag toi mogbul");
// }

// if (salary >= 20000 && isBcs === true && height >= 60) {
//   console.log("Aso baba kobul");
// } else {
//   console.log("vag toi mogbul");
// }

// if ((salary >= 20000 && isBcs === true) || height >= 60) {
//   console.log("Aso baba kobul");
// } else {
//   console.log("vag toi mogbul");
// }

if ((salary >= 20000 || isBcs === true) && height >= 60) {
  console.log("Aso baba kobul");
} else {
  console.log("vag toi mogbul");
}
