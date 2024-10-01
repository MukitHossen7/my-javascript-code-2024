const todosFuction = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("load error"));
};

const todoFunction = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("load error");
  }
};
