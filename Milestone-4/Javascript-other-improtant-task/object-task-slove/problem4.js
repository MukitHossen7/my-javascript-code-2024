const cars = {
  name: "Fiat",
  model: 500,
  weight: "1000kg",
  color: "black",
  realizeYear: 2023,
};

for (let car in cars) {
  console.log(`${car} : ${cars[car]}`);
}
