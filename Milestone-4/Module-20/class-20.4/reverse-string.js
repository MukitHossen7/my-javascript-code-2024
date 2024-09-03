let texts = "Hello world, welcome to the universe.";
console.log(texts);

// for (let text of texts) {
//   console.log(text);
// }

// let newText = "";
// for (let text of texts) {
//     newText = text + newText;
// }
// console.log(newText);

// for (let i = 0; i < texts.length; i++) {
//   console.log(texts[i]);
// }

let newText = texts.split("").reverse().join("");
console.log(newText);
