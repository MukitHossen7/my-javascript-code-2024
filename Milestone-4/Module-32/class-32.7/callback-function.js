function parentFunction(some, tom, dom, name) {
  some(name);
  tom(name);
  dom(name);
}

// function goodMorning(name) {
//   console.log("Good Morning", name);
// }
// function goodEvening(name) {
//   console.log("Good Evening", name);
// }
// function goodNight(name) {
//   console.log("Good Night", name);
// }
// parentFunction(goodMorning, "Mukit");
// parentFunction(goodMorning, "Raju");
// parentFunction(goodEvening, "Raju");
// parentFunction(goodEvening, "Toma");
// // parentFunction(goodNight, "Hiya");
// parentFunction(goodMorning, goodEvening, goodNight, "Mukit");

//Example 1
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 10000);
}
function processData() {
  console.log("Processing data....");
}
fetchData(processData);
