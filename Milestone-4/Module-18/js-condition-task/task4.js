//Task 4

let myScore = 85;
let friendScore = 50;

if (myScore > 80 && friendScore > 0) {
  if (friendScore > 80) {
    console.log("I will go for a lunch");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("good luck next time");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("keep my friend's message unseen.");
  } else {
    console.log("block my friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}
