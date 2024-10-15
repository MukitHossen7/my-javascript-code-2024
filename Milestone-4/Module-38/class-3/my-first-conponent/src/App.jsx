import "./App.css";
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  );
}

export default App;

function Person() {
  let age = 23;
  let name = "Mukit Hossen";
  return (
    <h3>
      My name is {name}. My age is: {age}
    </h3>
  );
}

function Student() {
  const student = {
    name: "Mukit",
    age: 25,
    hobby: "Programming",
  };
  return (
    <div>
      <h3>My name is {student.name}</h3>
      <p>My age is {student.age}</p>
      <p>My hobby is {student.hobby}</p>
    </div>
  );
}
