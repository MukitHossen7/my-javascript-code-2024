/*
 4. Problem: Extract Last Three Characters
    Objective: Extract the last three characters of a string using the slice() method.
 */

let sentence = "Javascript is a high programming language";
let extractLastThreeCharacters = sentence.slice(38, sentence.length);
console.log(extractLastThreeCharacters);

let sentence2 = "Javascript is a high programming language";
let extractLastThreeCharacters2 = sentence2.slice(-3);
console.log(extractLastThreeCharacters2);
