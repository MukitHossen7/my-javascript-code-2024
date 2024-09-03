// const person = {
//   name: "Mukit",
//   age: 24,
//   country: "Bangladesh",
//   hobby: "Programming",
// };

// console.log(person);
// let key = Object.keys(person);
// console.log(key);

// let value = Object.values(person);
// console.log(value);

const person = {
  name: "Mukit",
  age: 24,
  country: "Bangladesh",
  hobby: "Programming",
  myCars: {
    car1: "BMW",
    color: {
      color1: "red",
      color2: "black",
    },
    car2: "TATA",
    car3: "Fiat",
  },
};
console.log(person);
// console.log(person.myCars.car2);
console.log(person["myCars"]["car2"]);
console.log(person["myCars"]["color"]["color2"]);

person.myCars.color.color3 = "blue";
console.log(person["myCars"]["color"]);

person.myCars.car4 = "Toyota";
console.log(person.myCars);
