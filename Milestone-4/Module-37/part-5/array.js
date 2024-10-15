// const num = [10, 15, 20, 50, 80];
// const address = {
//   street: "123 Innovation Road",
//   city: "Dhaka",
//   country: "Bangladesh",
// };
// num.push("Mukit");
// num.pop();
// console.log(num);
// console.log(num.length);
// let ind = num.indexOf(15);
// console.log(ind);
// let incl = num.includes(20);
// console.log(incl);

// const check = Array.isArray(address);
// console.log(check);

// const num = [10, 15, 20, 50, 80];
// const sliceNum = num.slice(1, 3);
// console.log(sliceNum);
// const spliceNum = num.splice(2, 3, 100, 500);
// console.log(num);
// console.log(spliceNum);

// const newJoin = num.join(" ");
// console.log(newJoin);

let messages = "Hello Programmer.How are you?";
// console.log(message);
const newArr = [];
for (let mess of messages.toLocaleLowerCase()) {
  if (mess.includes("h")) {
    newArr.push(mess);
  }
  //   console.log(mess);
}
console.log(newArr);
