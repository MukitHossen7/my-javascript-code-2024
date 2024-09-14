const numbers = [45, 85, 24, 90, 50, 60];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let sum = 0;
// for (let number of numbers) {
//   sum += number;
// }
// console.log(sum);

let phones = [
  { name: "sumsung Phone", price: 20000 },
  { name: "hp laptop", price: 60000 },
  { name: "lanovo laptop", price: 50000 },
  { name: "iPhone", price: 120000 },
  { name: "oppo phone", price: 15000 },
  { name: "vivo phone", price: 30000 },
  { name: "Dell laptop", price: 85000 },
];
function phonesObj(phones, match) {
  for (let phone of phones) {
    if (phone.name.toLowerCase().includes(match.toLowerCase())) {
      console.log(phone.name);
    }
  }
}

phonesObj(phones, "phone");

// console.log(phones);
