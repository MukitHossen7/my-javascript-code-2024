/*
### Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit + " Fahrenheit";
}
console.log(celsiusToFahrenheit(38));
