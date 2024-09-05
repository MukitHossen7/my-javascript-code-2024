/*
 ### Task-1: 
 Count how many times a string has the letter `a`
 */

let texts = "Bangladesh is beautiful country";
let count = 0;
let isLatter = "a";
for (let text of texts) {
  console.log(text);
  if (text === isLatter) {
    count++;
  }
}
console.log(count);
