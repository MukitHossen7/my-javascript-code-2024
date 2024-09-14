const students = {
  fname: "Mukit",
  lName: "Hossen",
  age: 24,
  isMarried: false,
  marks: [
    { name: "Physics", mark: 85 },
    { name: "English", mark: 80 },
    { name: "Bangla", mark: 95 },
    { name: "Biology", mark: 75 },
    { name: "Math", mark: 55 },
  ],
  friendsName: ["lablu", "Kablu", "Tablu", "Sablu"],
  fullName: function () {
    return "My full Name is" + " " + this.fname + " " + this.lName;
  },
  bike: {
    name: " R1 - 5",
    version: 5,
    cc: 150,
    color: "Black",
  },
};
console.log(students);
console.log(students.marks[2]);
console.log(students.marks[2].mark);
console.log(students.fullName());
console.log(students.bike);
console.log(students.bike.color);
