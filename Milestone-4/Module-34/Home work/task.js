function delayedGreeting(name, time) {
  setTimeout(() => {
    console.log(`Hello, ${name}`);
  }, time);
}
delayedGreeting("Alice", 2000);
