/*
### Task-4: 
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/

// let texts = "This teXt is very gxod";
// for (let text of texts) {
//   texts = texts.replaceAll("x", "y");
//   texts = texts.replaceAll("X", "Y");
// }
// console.log(texts);

let texts = "Bangladesh is a beautiful country";
for (let text of texts) {
  texts = texts.replaceAll("a", "b");
  texts = texts.replaceAll("B", "A");
}
console.log(texts);
