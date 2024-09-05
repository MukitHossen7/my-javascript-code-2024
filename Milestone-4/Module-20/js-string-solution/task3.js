/*
### Task-3: 
Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
*/

let sentences = "Javascript is a high level programming";
let vowel = "a,e,i,o,u";

let newSentences = sentences.split("");
let newVowel = vowel.split("");

for (let sentence of sentences) {
  if (newVowel.includes(sentence)) {
    console.log(sentence);
  }
}
