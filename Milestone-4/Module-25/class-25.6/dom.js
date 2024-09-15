const styles = document.getElementsByTagName("section");
for (let style of styles) {
  style.style.border = "2px solid red";
  style.style.marginBottom = "15px";
  style.style.borderRadius = "15px";
  style.style.paddingLeft = "20px";
  style.style.paddingRight = "20px";
  style.style.backgroundColor = "gray";
}

const fruitsTitle = document.getElementsByClassName("fruits-title")[0];
fruitsTitle.classList.add("textAlign");

const rapSong = document.getElementById("rapSong");
rapSong.classList.add("styleColor");

// const headColor = document.getElementsByClassName("headColor")[0];
// headColor.classList.remove("headColor");

const domTitle = document.getElementById("domTitle");
console.log(domTitle);
domTitle.classList.remove("headColor");
