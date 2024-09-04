/*
 5. Problem: Check if Property Exists
Objective: Given an object and a property name, check if the property exists in the object using the in operator.
 */

const cars = {
  make: "Toyota",
  model: "Camry",
  year: "2018",
  start: function () {
    console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
  },
};
console.log(cars);
console.log("make" in cars);
console.log("year" in cars);
console.log("age" in cars);
