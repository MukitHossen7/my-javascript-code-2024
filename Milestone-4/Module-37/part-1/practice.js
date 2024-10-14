// const school = "Sudor thana high schools";
// school = "Joypurhat govt. collage";
// console.log(school);

// let year = 2010;
// year = 2020;
// console.log(year);

// if (10 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let age = 12;
// if (age >= 18 || age <= 30) {
//   console.log("You are adult");
// } else {
//   console.log("You are old");
// }

// if (age <= 18) {
//   console.log("You are teenage");
// }

// const result = 69;
// if (result >= 80 && result <= 100) {
//   console.log("A+");
// } else if (result >= 70 && result < 80) {
//   console.log("A");
// } else {
//   console.log("F");
// }

// const number = [10, 15, 20, 35, 30];
// console.log(number.length);
// number.push(100);
// number[0] = 200;
// console.log(number);

// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// let num = 0;
// while (num < number.length) {
//   console.log(number[num]);
//   num++;
// }

// function add(a, b) {
//   return a * b;
// }
// console.log(add(5, 10));

// const persons = {
//   name: "jone",
//   age: 23,
//   hobby: "Programming",
//   isSingle: true,
// };
// let hob = persons.hobby;
// console.log(persons.name);
// console.log(persons["age"]);
// console.log(hob);

// const pets = {
//   name: "Buddy",
//   breed: "Golden Retriever",
//   gender: "Male",
//   age: 2,
//   price: 500,
//   vaccinated: true,
//   image: "buddy.jpg",
// };

// console.log(
//   `my favarite pets name ${pets.name}.his gender is ${pets.gender}.his price is ${pets.price}`
// );

// const result = (num, num2) => num * num2;
// console.log(result(5, 10));

// const result = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(result(50, 20));

// const num = [5, 9, 10, 15, 25];
// const newNum = [...num, 1000, 2000];
// num.push(500);
// newNum.push(50);
// newNum.push(100);
// console.log(num);
// console.log(newNum);

// const pets = {
//   name: "Buddy",
//   breed: "Golden Retriever",
//   gender: "Male",
// };

// const newPets = { ...pets };
// newPets.price = 5200;
// newPets.age = 3;
// pets.vaccinated = true;
// console.log(pets);
// console.log(newPets);

// const phones = [
//   {
//     brand: "Apple",
//     model: "iPhone 14",
//     storage: "128GB",
//     price: 999,
//     color: "Midnight",
//     inStock: true,
//   },
//   {
//     brand: "Samsung",
//     model: "Galaxy S22",
//     storage: "256GB",
//     price: 899,
//     color: "Phantom Black",
//     inStock: false,
//   },
//   {
//     brand: "Google",
//     model: "Pixel 7",
//     storage: "128GB",
//     price: 599,
//     color: "Obsidian",
//     inStock: true,
//   },
//   {
//     brand: "Vivo",
//     model: "Pixel 7",
//     storage: "128GB",
//     price: 5000,
//     color: "Obsidian",
//     inStock: true,
//   },
// ];
// console.log(phones);

// const Brands = phones.map((phone) => phone.brand);
// console.log(Brands);
// const price = phones.map((phone) => phone.price);
// console.log(price);

// phones.forEach((phone) => console.log(phone.model));
// phones.forEach((phone) => {
//   console.log(phone.color);
// });

// const price = phones.filter((phone) => phone.price < 5000);
// const price2 = phones.filter((phone) => phone.price <= 900);
// console.log(price);
// console.log(price2);

// const price = phones.find((phone) => phone.price <= 5000);
// console.log(price);

// const pets = {
//   name: "Max",
//   breed: "Beagle",
//   gender: "Male",
//   age: 3,
//   price: 300,
//   vaccinated: true,
//   image: "max.jpg",
//   colors: ["Red", "Green", "Blue", "Yellow", "Purple"],
// };
// console.log(pets);

// const { name, breed, age, price } = pets;
// console.log(name, breed, age, price);
// const [f, , , , l] = pets.colors;
// console.log(f, l);

const numbers = [10, 20, 30, 40, 50];
const [num1, ...last] = numbers;
console.log(num1);

console.log(last);
