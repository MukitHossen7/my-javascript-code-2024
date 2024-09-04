// ### Task 1

const colors = ["red", "blue", "green", "yellow", "orange"];

const reverseArray = [];
for (let color of colors) {
  reverseArray.unshift(color);
}
console.log(reverseArray);
