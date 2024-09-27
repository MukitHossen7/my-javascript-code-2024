//Task 1

// class Teacher {
//   constructor(name, age, teach) {
//     (this.name = name), (this.age = age), (this.teach = teach);
//   }
//   favorite() {
//     return `${this.name} Sir is our favorite Teacher`;
//   }
// }

// const jamil = new Teacher("Jamil", 35, "Mathmatice");
// console.log(jamil.favorite());
// console.log(jamil);

// const moklas = new Teacher("Moklas", 35, "Biology");
// console.log(moklas);
// console.log(moklas.favorite());

//Task 2

class Person {
  constructor(fname, lname, age, nationlity, isSingle) {
    (this.fname = fname),
      (this.lname = lname),
      (this.age = age),
      (this.nationlity = nationlity),
      (this.isSingle = isSingle);
  }
  fullName() {
    return `My full Name is ${this.fname} ${this.lname}`;
  }
}
const mukit = new Person("Mukit", "Hossen", 25, "Bangladeshi", true);
console.log(mukit);
console.log(mukit.fullName());

const raju = new Person("Raju", "Islam", 27, "Bangladeshi", true);
console.log(raju);
console.log(raju.fullName());
