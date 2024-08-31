//Task - 3

const books = ["Bangla", "English", "Biology", "Math", "Physics"];
books.push("javascript");
let hasJavascriptBook = books.includes("javascript");

if (hasJavascriptBook) {
  console.log("The Javascript book is present in the array");
} else {
  console.log("The Javascript book is not present in the array");
}
