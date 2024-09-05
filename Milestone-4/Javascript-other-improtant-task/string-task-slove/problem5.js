/*
 5. Problem: Modify String and Rejoin
    Objective: Split a string into words, modify the second word to be in uppercase, and then rejoin the string using join().
 */

let sentence = "Javascript is a high Programming Language";
let newSentence = sentence.split(" ");

if (sentence.length > 0) {
  newSentence[1] = newSentence[1].toUpperCase();
}

let modifySentence = newSentence.join(" ");
console.log(modifySentence);
