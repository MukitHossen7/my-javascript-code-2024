// JSON

const shop = {
  owner: "Kaliya",
  address: {
    street: "Voot er goli",
    city: "Feni",
    country: "Bangladesh",
  },
  products: ["laptop", "mic", "keyboard", "monitor"],
  revenew: 50000,
  isOpen: true,
  isNew: false,
};

// console.log(shop);
// const jsonShop = JSON.stringify(shop);
// console.log(jsonShop);

// const shopObj = JSON.parse(jsonShop);
// console.log(shopObj);

//Exam:  2

let person = {
  name: "John Doe",
  age: 30,
  profession: "Software Developer",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

console.log(person);
const JsonPer = JSON.stringify(person);
console.log(JsonPer);
const ObjPer = JSON.parse(JsonPer);
console.log(ObjPer);
