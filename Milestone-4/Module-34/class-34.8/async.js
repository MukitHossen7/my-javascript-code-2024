function fetchBtn() {
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

async function asyncBtn() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single"
  );
  const data = await res.json();
  console.log(data);
}

const arrowAsyncBtn = async () => {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single"
  );
  const data = await res.json();
  console.log(data);
};

const arrowCatchBtn = async () => {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    const data = await res.json();
    console.log(data.joke);
  } catch (error) {
    console.error("ERROR: " + error);
  }
};
