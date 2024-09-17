let countSpan = document.getElementById("countSpan");
document
  .getElementById("increaseBtn")
  .addEventListener("click", function (event) {
    let increment = Number(countSpan.innerText);
    increment++;
    countSpan.innerText = increment;
    event.stopPropagation;
  });

document
  .getElementById("decreaseBtn")
  .addEventListener("click", function (event) {
    let decrease = Number(countSpan.innerText);
    decrease--;
    countSpan.innerText = decrease;
    event.stopPropagation;
  });
