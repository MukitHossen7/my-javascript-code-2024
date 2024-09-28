function sum(a, b, c) {
  console.log(arguments);
  console.log(arguments["4"]);
  let argus = [...arguments];
  console.log(argus);
  const result = a + b + c;
  return result;
}
const total = sum(20, 10, 40, 15, 50, 5);
console.log(total);
