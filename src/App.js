import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"} />

      <PersonCard
        firstName={"Rosie"}
        lastName={"Choi"}
        age={22}
        hairColor={"Rose Gold"} />

      <PersonCard
        firstName={"Jazminn"}
        lastName={"Borges"}
        age={21}
        hairColor={"Brown"} />

      <PersonCard
        firstName={"Naomi"}
        lastName={"Tesla"}
        age={21}
        hairColor={"Black"} />
    </div>
  );
}

export default App;
