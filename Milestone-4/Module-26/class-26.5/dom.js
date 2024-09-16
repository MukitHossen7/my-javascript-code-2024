document.getElementById("post-btn").addEventListener("click", function () {
  let commentBox = document.getElementById("comment-box");
  let commentValue = commentBox.value;

  let commentContainer = document.getElementById("comment-container");
  let p = document.createElement("p");
  p.innerText = commentValue;
  commentContainer.appendChild(p);
  commentBox.value = "";
});
