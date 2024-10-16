import "./App.css";
import Pet from "./components/Pet";
import Student from "./components/Student";

function App() {
  const students = ["Joy", "Mukit", "Raju", "Top"];

  const pets = [
    {
      name: "Bella",
      breed: "Labrador Retriever",
      age: 3,
      gender: "Female",
      price: 500,
      vaccinated: true,
    },
    {
      name: "Max",
      breed: "German Shepherd",
      age: 4,
      gender: "Male",
      price: 700,
      vaccinated: false,
    },
    {
      name: "Charlie",
      breed: "Golden Retriever",
      age: 2,
      gender: "Male",
      price: 600,
      vaccinated: true,
    },
    {
      name: "Lucy",
      breed: "Beagle",
      age: 1,
      gender: "Female",
      price: 450,
      vaccinated: true,
    },
  ];

  return (
    <>
      <h2>Vite + React</h2>
      {students.map((student) => (
        <Student name={student}></Student>
      ))}

      {pets.map((pet) => (
        <Pet petObj={pet}></Pet>
      ))}
    </>
  );
}

export default App;
