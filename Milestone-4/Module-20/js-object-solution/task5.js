//Task 5

let myObjects = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

// console.log(myObjects);

for (let key in myObjects) {
  console.log(
    key + ": " + myObjects[key] + " | " + "type:" + "  " + typeof myObjects[key]
  );
}
