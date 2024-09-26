// const data = [{ id: 1245, name: "abule kasem", address: "agortala" }];
// console.log(data[0].address);

// const products = {
//   count: 5000,
//   data: [
//     { id: 1, name: "hp laptop", price: 65000 },
//     { id: 2, name: "macbook", price: 165000 },
//   ],
// };
// console.log(products.data[1].price);

const user = {
  id: 1235,
  name: "Raj khan",
  address: {
    street: {
      first: "54/2 uttor side",
      second: "poribag er goli",
      third: "no dorai",
    },
    city: "joypurhat",
  },
};
console.log(user.address.street?.second);

const user2 = {
  id: 1235,
  name: "Raj khan",
  address: {
    city: "joypurhat",
    country: "Bangladesh",
  },
};
console.log(user2.address.street?.second);
