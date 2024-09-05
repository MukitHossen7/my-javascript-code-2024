/*
7. Problem: Replace Spaces with Dashes
    Objective: Given a sentence, replace all spaces with dashes (-) by splitting the sentence and then joining it again using join().
*/

let sentences = "Hello new Bangladesh people";
let newSentences = sentences.split(" ").join("-");
console.log(newSentences);
