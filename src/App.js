import logo from "./logo.svg";
import "./App.css";
import NoteInput from "./components/NoteCreation.js";
import Notes from "./components/Notes.js";
import { useState } from "react";
import "./index.css";

function App() {
  const [refresh, incrementRefresh] = useState(0);

  const refreshNotes = () => {
    incrementRefresh(refresh + 1);
    console.log("refreshed");
  };
  return (
    <div className="App">
      <h1 className="text-white">Take A Note</h1>
      <NoteInput refreshNotes={refreshNotes} />
      <div className="pt-10 pl-10">
        <Notes refresh={refresh} refreshedNotes={refreshNotes} />
      </div>
    </div>
  );
}

export default App;
