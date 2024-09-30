// fetch("https://jsonplaceholder.typicode.com/todos/1") //API
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//Usesing Function
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1") //API
    .then((response) => response.json())
    .then((data) => console.log(data));
}
