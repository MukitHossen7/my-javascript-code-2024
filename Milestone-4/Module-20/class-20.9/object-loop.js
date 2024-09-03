// const persons = {
//   name: "Mukit Hossen",
//   age: 24,
//   isMerrid: false,
//   hobby: "Programming",
//   country: "Bangladesh",
// };

// console.log(persons);
// let loopResult = "";
// for (let person in persons) {
//   //   loopResult += persons[person];
//   //   console.log(person + ":" + persons[person]);
//   console.log(persons[person]);
// }
// console.log(loopResult);

const persons = {
  name: "Mukit Hossen",
  age: 24,
  isMerrid: false,
  hobby: "Programming",
  country: "Bangladesh",
};

console.log(persons);

let keys = Object.keys(persons);
console.log(keys);

for (let key of keys) {
  console.log(persons[key]);
}

const cars = new Object();

cars.name = "BMW";
cars.isNew = true;
cars.color = "red";

console.log(cars);
