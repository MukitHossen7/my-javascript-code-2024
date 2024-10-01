function showData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  const showContainer = document.getElementById("showContainer");
  data.map((item) => {
    console.log(item);
    let p = document.createElement("p");
    p.innerHTML = item.name;
    showContainer.appendChild(p);
  });
}

function showEmail() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayEmail(data));
}

function displayEmail(data) {
  const showEmail = document.getElementById("showEmail");
  data.map((item) => {
    const li = document.createElement("li");
    li.innerText = item.email;
    showEmail.appendChild(li);
  });
}
