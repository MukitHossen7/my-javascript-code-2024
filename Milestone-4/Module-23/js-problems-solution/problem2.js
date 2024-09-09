/*
### Task -2: 
Find the friend with the smallest name.
<br>
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`
*/

function smallestName(array) {
  let length = array[0].length;
  let smallName = "";
  for (let arr of array) {
    if (arr.length < length) {
      length = arr.length;
      smallName = arr;
    }
  }
  return "smallest name: " + smallName;
}
// const heights2 = ["Hello", "am", "Programmer", "mukit", "i"];
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
console.log(smallestName(heights2));
