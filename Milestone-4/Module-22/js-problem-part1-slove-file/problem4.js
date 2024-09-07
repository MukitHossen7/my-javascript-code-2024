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
