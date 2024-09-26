function fullName(fname, lname) {
  const full = "My full Name is" + " " + fname + " " + lname;
  return full;
}

console.log(fullName("Mukit", "Hossen"));

function fullName(fname, lname) {
  const full = `My full name is ${fname} ${lname}`;
  return full;
}

console.log(fullName("Mukit", "Hossen"));

// let message = 'Hello Javascript programmer
//    What do you
// ';
// console.log(message);

let message = `Hello Javascript programmer
   What do you
   I am felling good
`;
console.log(message);
