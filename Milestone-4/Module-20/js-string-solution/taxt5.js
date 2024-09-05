/**
 ### Task-5:
Capitalize Every first Letter of each word in a String
 */

let sentences = "hello i am programmer mukit";
let words = sentences.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase().concat(words[i].slice(1));
}
let result = words.join(" ");
console.log(result);
