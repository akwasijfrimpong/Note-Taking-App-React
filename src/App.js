import logo from "./logo.svg";
import "./App.css";
import NoteInput from "./components/Note"; // Renamed the import statement to use 'note' instead of 'Note'

function App() {
  return (
    <div className="App">
      <h1>Take A Note</h1>
      <NoteInput />{" "}
      <Notes />
    </div>
  );
}

export default App;
