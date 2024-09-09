function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  let word = name.toLowerCase();
  let wordSplit = word.split("");
  let length = wordSplit.length - 1;
  let lastLetter = wordSplit[length];

  let words = ["a", "y", "i", "e", "o", "u", "w"];
  return words.includes(lastLetter) ? "Good Name" : "Bad Name";
}
//Test

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
