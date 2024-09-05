/*
 ### Task-2: 
Count how many times a string has the letter `a` or `A`
 */

let sentences = "Bangladesh is a beautiful country";
let letter1 = "a";
let letter2 = "A";
let count1 = 0;
let count2 = 0;
for (let sentence of sentences) {
  console.log(sentence);
  if (sentence === letter1) {
    count1++;
  } else if (sentence === letter2) {
    count2++;
  }
}
console.log(count1);
console.log(count2);
