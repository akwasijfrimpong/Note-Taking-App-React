import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Note.module.css";
export default function Notes(props) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001").then((response) => {
      console.log(response.data);
      setNotes(response.data);
      console.log(props.refresh + "in Notes component");
    });
  }, [props.refresh]);

  return (
    <div className={styles.notes}>
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
