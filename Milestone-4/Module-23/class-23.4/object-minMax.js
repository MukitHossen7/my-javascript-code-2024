//Find max Phone price
// function maxPhonePrice(phones) {
//   let max = phones[0];
//   for (let phone of phones) {
//     if (phone > max) {
//       max = phone;
//     }
//   }
//   return max;
// }
// const phonesPrice = [500, 1000, 10000, 25000, 75000, 200000, 1500, 50000000];
// // console.log(Math.max(...phonesPrice));
// console.log(maxPhonePrice(phonesPrice));

// Find Min Phone Price
// function minPhonePrice(phones) {
//   let min = phones[0];
//   for (let phone of phones) {
//     if (phone < min) {
//       min = phone;
//     }
//   }
//   return min;
// }
// const phonesPrice = [
//   500, 1000, 10000, 25000, 75000, 200000, 20, 1500, 50000000,
// ];
// // console.log(Math.max(...phonesPrice));
// console.log(minPhonePrice(phonesPrice));

// function maxPhonePrice(phones) {
//   let maxPrice = phones[0];
//   for (let phone of phones) {
//     if (phone.price > maxPrice.price) {
//       maxPrice = phone;
//     }
//   }
//   console.log(maxPrice);
// }
// const phones = [
//   { name: "samsung", price: 15000, color: "red" },
//   { name: "oppo", price: 10000, color: "red" },
//   { name: "Iphone", price: 150000, color: "black" },
//   { name: "vivo", price: 35000, color: "red" },
//   { name: "walton", price: 25000, color: "green" },
//   { name: "samsung", price: 55000, color: "black" },
//   { name: "samsung", price: 500, color: "black" },
// ];
// console.log(maxPhonePrice(phones));

function minPhonePrice(phones) {
  let minPrice = phones[0];
  for (let phone of phones) {
    if (phone.price < minPrice.price) {
      minPrice = phone;
    }
  }
  console.log(minPrice);
}
const phones = [
  { name: "samsung", price: 15000, color: "red" },
  { name: "oppo", price: 10000, color: "red" },
  { name: "Iphone", price: 150000, color: "black" },
  { name: "vivo", price: 35000, color: "red" },
  { name: "walton", price: 25000, color: "green" },
  { name: "samsung", price: 55000, color: "black" },
  { name: "samsung", price: 500, color: "black" },
];
console.log(minPhonePrice(phones));
