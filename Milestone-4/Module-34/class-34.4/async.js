// const myPromise = new Promise((reslove, reject) => {
//   const promise = Math.random();
//   if (promise <= 0.5) {
//     console.log("reslove", promise);
//   } else {
//     console.error("reject", promise);
//   }
// });

// const myPromise = () => {
//   return new Promise((reslove, reject) => {
//     const promise = Math.random();
//     if (promise <= 0.5) {
//       console.log("reslove", promise);
//       //   reslove("reslove", promise);
//     } else {
//       console.error("reject", promise);
//       //   reject("reject", promise);
//     }
//   });
// };
// myPromise();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// }
// getData();

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};
getData();
