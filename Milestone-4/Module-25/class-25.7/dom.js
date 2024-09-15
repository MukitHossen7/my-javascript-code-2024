const nodeList = document.body.children;
console.log(nodeList);

// The firstChild Property
let fruitsList = document.getElementById("fruits-list");
console.log(fruitsList);
let first = fruitsList.firstElementChild.innerText;
console.log(first);

// The lastChild Property
let last = fruitsList.lastElementChild.innerText;
console.log(last);

//The nextSibling Property
// let next = fruitsList.nextElementSibling.innerText;
// console.log(next);

//The previousSibling Property
// let previous = fruitsList.previousElementSibling.innerText;
// console.log(previous);

let banana = document.getElementById("bana");
//The nextSibling Property
let next = banana.nextElementSibling.innerText;
console.log(next);

let previous = banana.previousElementSibling.innerText;
console.log(previous);

//The parentNode Property
let parent =
  fruitsList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
console.log(parent);
