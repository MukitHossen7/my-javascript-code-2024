function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  } else if (Array.isArray(obj)) {
    return "Invalid Input";
  }

  let parentProfession = 0;
  if (obj.testScore > 50) {
    return "Invalid Input";
  }
  if (obj.schoolGrade > 30) {
    return "Invalid Input";
  }
  if (obj.isFFamily) {
    parentProfession = 20;
  }
  let finalResult = obj.testScore + obj.schoolGrade + parentProfession;
  if (finalResult >= 80) {
    return true;
  }
  return false;
}
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
//   })
// );
// console.log(calculateFinalScore("hello"));
// // console.log(calculateFinalScore(["hello"]));
// // console.log(calculateFinalScore(20));
// // console.log(calculateFinalScore([2, 8, 5, 74]));

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 55,
//     schoolGrade: 30,
//     isFFamily: true,
//   })
// );
