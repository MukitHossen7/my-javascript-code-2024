/**
 ### Task-5:
Capitalize Every first Letter of each word in a String
 */

const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

console.log(words.join(" "));

// let sentences = "hello i am programmer mukit";
// let words = sentences.split(" ");

// for (let i = 0; i < sentences.length; i++) {
//   // words[i] = words[i][0].toUpperCase() + words[i].substr(1) + " ";
//   words[i] = words[i][0].toUpperCase() + words[i].substr(1) + " ";
// }
// console.log(words);
