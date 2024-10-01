fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => showPost(data));

function showPost(data) {
  const postContainer = document.getElementById("post-container");

  data.map((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("post-style");
    div.innerHTML = `
          <div>
           <h4>User Id : ${item.id}</h4>
           <h3>${item.title}</h3>
           <p>${item.body}</p>
          </div>
      `;
    postContainer.appendChild(div);
  });
}
