// year % 4 === 0
/* 
 leapYear =  year % 100 !== 0 && year % 4 === 0
 leapYear = year % 400 === 0
*/

// function leapYear(year) {
//   if (year % 4 === 0) {
//     return year + " is leap year";
//   }
//   return false;
// }
// console.log(leapYear(2023));

function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return year + " is leap year";
  } else if (year % 400 === 0) {
    return year + " is leap year";
  }
  return year + " is not leap year";
}
console.log(leapYear(2032));
console.log(leapYear(2027));
console.log(leapYear(2015));
console.log(leapYear(2010));
