/*
1. Problem: Extract and Reverse a Part of a String
    Objective: Given a string, extract the first 5 characters using the slice() method, reverse those characters using split(), and join them back together using join().
*/

let text = "Hello Bangladesh";
let textSlice = text.slice(0, 5);
let newText = textSlice.split("").reverse().join("");
console.log(newText);
