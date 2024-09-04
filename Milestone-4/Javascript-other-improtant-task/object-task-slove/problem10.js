/*
10. Problem: Nested Object Access
Objective: Given a nested object, access and display a property inside the nested object (e.g., person.address.city).
*/

const persons = {
  name: "Mukit",
  age: 24,
  hobby: "programming",
  address: {
    city: "joypurhat",
    village: "Master para",
    homeNo: 12 / 400,
  },
};
console.log(persons.address);
console.log(persons.address.city);
