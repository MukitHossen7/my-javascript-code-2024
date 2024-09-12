function checkDigitsInName(name) {
  if (!(typeof name === "string")) {
    return "Invalid Input";
  }
  let num = "0123456789";
  for (let words of name) {
    if (num.includes(words)) {
      return true;
    }
  }
  return false;
}
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));
// console.log(checkDigitsInName(12345));
// console.log(checkDigitsInName({ name: "mukit", age: 123 }));
// console.log(checkDigitsInName(true));
// console.log(checkDigitsInName(false));
