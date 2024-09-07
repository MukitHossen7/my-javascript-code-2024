/*
### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming

*/

// function longestWord(sentence) {
//   let sents = sentence.split(" ");
//   let longest = 0;
//   let longWord = "";
//   for (let i = 0; i < sents.length; i++) {
//     if (longest < sents[i].length) {
//       longWord = sents[i];
//     }
//   }
//   return longWord;
// }

// let sentences = "I am learning Programming to become a programmer";
// console.log(longestWord(sentences));

//  Step :1
function longestWord(sentences) {
  const sent = sentences.split(" ");
  let size = sent.length;
  let longest = 0;
  let longest_word = "";
  for (let i = 0; i < size; i++) {
    if (longest < sent[i].length) {
      longest_word = sent[i];
    }
  }
  return longest_word;
}
let texts = "I am learning Programming to become a programmer";
console.log(longestWord(texts));

//Step : 2

// const input = "I am learning Programming to become programmer";
// function longestWord(word) {
//   const array = word.split(" ");
//   let total = "";
//   console.log(total.length);
//   for (let element of array) {
//     if (element.length > total.length) {
//       total = element;
//     }
//   }
//   return total;
// }
// console.log(longestWord(input));
