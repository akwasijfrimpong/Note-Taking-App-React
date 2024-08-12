import { useEffect, useState } from "react";
import axios from "axios";
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001").then((response) => {
      console.log(response.data);
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
}
