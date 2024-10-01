fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => showComment(data));

function showComment(data) {
  const commentsContainer = document.getElementById("comments-container");
  data.map((item) => {
    let div = document.createElement("div");
    div.classList.add("divStyle");
    div.innerHTML = `
          <div>
          <h4>postId : ${item.id}</h4>
          <h3>${item.name}</h3>
          <h5>${item.email}</h5>
          <p>${item.body}</p>
          </div>
        `;
    commentsContainer.appendChild(div);
  });
}

function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

function updatePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function createPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
