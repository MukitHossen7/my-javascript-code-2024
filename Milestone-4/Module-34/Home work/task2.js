function tellJoke() {
  console.log(`Why don't scientists trust atoms? Because they make up
    everything!`);
}
const jokeInterval = setInterval(tellJoke, 2000);
setTimeout(() => {
  clearInterval(jokeInterval);
}, 10000);
