/*
7. Problem: Delete a Property from an Object
Objective: Remove a property from an object using the delete keyword, and then display the updated object.
*/

const persons = {
  name: "Jone",
  age: 23,
  city: "Joypurhat",
  hobby: "Programming",
  isMarried: false,
};
delete persons.city;
console.log(persons);
