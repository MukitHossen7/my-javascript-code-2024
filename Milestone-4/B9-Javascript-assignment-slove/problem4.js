function password(obj) {
  if (
    typeof obj.name !== "string" ||
    typeof obj.birthYear !== "number" ||
    typeof obj.siteName !== "string" ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  }
  let siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  let password = siteName + "#" + obj.name + "@" + obj.birthYear;
  return password;
}
//Test

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
