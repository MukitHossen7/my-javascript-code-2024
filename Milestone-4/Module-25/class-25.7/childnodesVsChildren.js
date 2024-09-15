let rapContainer = document.getElementById("rap-container");
let node = rapContainer.children;
console.log(node);

let first = rapContainer.firstElementChild.innerText;
console.log(first);
let last = rapContainer.lastElementChild.innerText;
console.log(last);

let song = document.getElementById("song");
console.log(song.innerText);
let next = song.nextElementSibling.innerText;
console.log(next);

let list = document.getElementById("list");
let previous = list.previousElementSibling.innerText;
console.log(previous);
