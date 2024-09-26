// const numbers = [10, 5, 15, 20, 30, 65];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// const numbers = [10, 5, 15, 20, 30, 65];
// for (let number of numbers) {
//   console.log(number);
// }
// const meassages = "Hello Hacker how are you";
// for (let meassage of meassages) {
//   console.log(meassage);
// }

const persons = {
  name: "joy",
  age: 25,
  nationlity: "Bangladeshi",
  number: "01789229571",
};
console.log(persons);
// for (let person in persons) {
//   console.log(person, persons[person]);
// }
let keys = Object.keys(persons);
console.log(keys);
// for (let person of persons) {
//   console.log(person);
// }
for (let key of keys) {
  console.log(persons[key]);
}
