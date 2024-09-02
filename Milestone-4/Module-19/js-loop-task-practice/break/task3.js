//Task 3

for (let i = 1; i <= 100; i++) {
  if (Math.sqrt(i) % 2 === 0) {
    // Check if 'i' is a square number
    console.log("First square number encountered:", i);
    break; // Exit the loop
  }
  console.log(i); // Print the current number
}

/**
 *  Understand this code because you copy ChatGPI
 */

console.log(Math.sqrt(2) % 1 === 0);
