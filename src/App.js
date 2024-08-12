import logo from "./logo.svg";
import "./App.css";
import NoteInput from "./components/NoteCreation.js";
import Notes from "./components/Notes.js";
import { useState } from "react";

function App() {
  const [refresh, incrementRefresh] = useState(0);

  const refreshNotes = () => {
    incrementRefresh(refresh + 1);
    console.log("refreshed");
  };
  return (
    <div className="App">
      <h1>Take A Note</h1>
      <NoteInput refreshNotes={refreshNotes} />
      <Notes refresh={refresh} />
    </div>
  );
}

export default App;
