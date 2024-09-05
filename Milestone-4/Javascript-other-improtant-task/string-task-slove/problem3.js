/*
   3. Problem: Split and Join a Sentence
    Objective: Given a sentence, split it into individual words using split(), and then join the words back together using hyphens (-) with the join() method.

*/

let sentence = "Hi I am Programmer Mukit";
let newSentence = sentence.split(" ").join("-");
console.log(newSentence);
