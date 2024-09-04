const colors = ["red", "green", "blue", "black", "tomato"];
console.log(colors);

for (let color of colors) {
  if (color === "blue") {
    break;
  }
  console.log(color);
}
