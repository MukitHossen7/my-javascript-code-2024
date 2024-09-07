/*
### Task-3: 
Write a function to count the number of vowels in a string.
*/
function countVowels(str) {
  let lowerStrs = str.toLowerCase();
  let vowels = "a,e,i,o,u";
  let count = 0;
  for (let lowerStr of lowerStrs) {
    if (vowels.includes(lowerStr)) {
      count++;
    }
  }
  return count;
}

let texts = "I love you";
console.log(countVowels(texts));
