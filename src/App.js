import logo from "./logo.svg";
import "./App.css";
import NoteInput from "./components/NoteCreation.js";
import Notes from "./components/Notes.js";

function App() {
  return (
    <div className="App">
      <h1>Take A Note</h1>
      <NoteInput />
      <Notes />
    </div>
  );
}

export default App;
