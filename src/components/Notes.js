import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Note.module.css";
export default function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [deleteNote, setDeleteNote] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5001").then((response) => {
      console.log("going here on delete");
      setNotes(response.data);
      console.log(props.refresh + "in Notes component");
    });
  }, [props.refresh, notes]);

  return (
    <div className={styles.notes}>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button
              onClick={async () => {
                axios
                  .delete(`http://localhost:5001/delete/${note.id}`)
                  .then((response) => {
                    setNotes(notes.filter((n) => n.id !== note.id));
                  });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
