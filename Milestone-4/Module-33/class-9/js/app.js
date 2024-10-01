// const todosFuction = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("load error"));
// };

// const todoFunction = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error("load error");
//   }
// };

const todoFunction = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    const todoContainer = document.getElementById("todo-container");
    data.map((item) => {
      console.log(item);
      const li = document.createElement("li");
      li.innerHTML = item.title;
      todoContainer.appendChild(li);
    });
  } catch (error) {
    console.error("load error");
  }
};
todoFunction();
