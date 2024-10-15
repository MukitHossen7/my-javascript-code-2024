// const persons = {
//   name: "jone",
//   age: 25,
//   hobby: "Programming",
//   isSingle: true,
//   pet: {
//     name: "Bella",
//     breed: "Golden Retriever",
//     age: 3,
//     vaccinated: true,
//     price: [300, 200, 100, 800],
//     category: "Dog",
//   },
// };

// console.log(persons.name);
// console.log(persons["hobby"]);

// function myFunction(num1, num2) {
//   return num1 + num2;
// }
// const result = myFunction(10, 45);
// console.log(result);

// const nums = [10, 12, 15, 42, 80];
// for (let num of nums) {
//   console.log(num);
// }

// const pets = {
//   name: "Bella",
//   breed: "Golden Retriever",
//   age: 3,
//   vaccinated: true,
//   price: 300,
//   category: "Dog",
//   imageUrl: "https://example.com/bella.jpg",
// };

// for (let pet in pets) {
//   console.log(`${pet} : ${pets[pet]}`);
// }

// let interNum = +"12";
// console.log(interNum);
// let floatNum = 12.25;

// const pets = [
//   {
//     name: "Bella",
//     breed: "Golden Retriever",
//     age: 3,
//     vaccinated: true,
//     price: 300,
//     category: "Dog",
//     imageUrl: "https://example.com/bella.jpg",
//   },
//   {
//     name: "Max",
//     breed: "Bulldog",
//     age: 2,
//     vaccinated: false,
//     price: 250,
//     category: "Dog",
//     imageUrl: "https://example.com/max.jpg",
//   },
//   {
//     name: "Luna",
//     breed: "Persian Cat",
//     age: 1,
//     vaccinated: true,
//     price: 200,
//     category: "Cat",
//     imageUrl: "https://example.com/luna.jpg",
//   },
// ];
// const persons = {
//   name: "Jone",
//   age: 30,
//   hobby: "programming",
// };
// const newArray = [...pets, persons];
// console.log(pets);
// console.log(newArray);

// const newArray = pets.filter((pet) => pet.category === "Cat");
// console.log(newArray);

// const num = () => 9;
// console.log(num());

// const num1 = (num) => num * 12;
// console.log(num1(10));

// const num2 = (x, y) => (x + y) / 4;
// console.log(num2(10, 6));

// const num3 = (x, y) => {
//   let num1 = x + 5;
//   let num2 = y + 5;
//   return num1 * num2;
// };
// console.log(num3(5, 10));

// const pets = {
//   name: "Max",
//   breed: "Bulldog",
//   age: 2,
//   vaccinated: false,
//   price: 250,
//   category: "Dog",
//   imageUrl: "https://example.com/max.jpg",
// };

// const { breed } = pets;
// let breedObj = breed;
// console.log(breedObj);

// const employees = [
//   {
//     name: "John Doe",
//     position: "Software Engineer",
//     salary: 75000,
//     department: "IT",
//   },
//   {
//     name: "Jane Smith",
//     position: "Project Manager",
//     salary: 90000,
//     department: "Management",
//   },
//   {
//     name: "Mark Johnson",
//     position: "UX Designer",
//     salary: 68000,
//     department: "Design",
//   },
//   {
//     name: "Emily Davis",
//     position: "Data Analyst",
//     salary: 72000,
//     department: "Analytics",
//   },
//   {
//     name: "Michael Brown",
//     position: "DevOps Engineer",
//     salary: 80000,
//     department: "IT",
//   },
// ];

// const [, second] = employees;
// let balance = second;
// const { salary, department } = balance;
// console.log(balance);
// console.log(salary);

const company = {
  name: "Tech Solutions Ltd.",
  address: {
    street: "123 Innovation Road",
    city: "Dhaka",
    country: "Bangladesh",
  },
  employees: [
    {
      name: "John Doe",
      position: "Software Engineer",
      salary: 75000,
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      name: "Jane Smith",
      position: "Project Manager",
      salary: 90000,
      skills: ["Leadership", "Agile", "Communication"],
    },
    {
      name: "Mark Johnson",
      position: "UX Designer",
      salary: 68000,
      skills: ["UI/UX Design", "Photoshop", "Figma"],
    },
  ],
  departments: ["IT", "Management", "Design", "Analytics"],
};
let result = company?.address?.city?.name?.salary;
console.log(result);
let result2 = company?.employees[1]?.position?.name?.address;
console.log(result2);
