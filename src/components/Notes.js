import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../trash-svgrepo-com.svg";
import { ReactComponent as Edit } from "../pencil-svgrepo-com.svg";
import EditNote from "./EditNote.js";

import axios from "axios";
import styles from "./Note.module.css";
import "../index.css";

export default function Notes(props) {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null); // Track the selected note's ID

  useEffect(() => {
    axios.get("http://localhost:5001").then((response) => {
      setNotes(response.data);
      console.log(props.refresh + " in Notes component");
    });
  }, [props.refresh]);

  return (
    <div className="relative">
      <div className={styles.notes}>
        {notes.map((note) => (
          <div
            key={note.id}
            className="w-[200px] h-[200px] border-[0.5px] border-gray-10 text-left pl-2 pr-2 rounded-md relative"
          >
            <h1 className="font-bold pt-2 pl-2 pr-2">{note.title}</h1>
            <p className="pt-4 pl-2 pr-2">{note.description}</p>
            <button
              className="absolute bottom-2 ml-[25%] right-2 bg-red"
              onClick={async () => {
                axios
                  .delete(`http://localhost:5001/delete/${note.id}`)
                  .then((response) => {
                    setNotes(notes.filter((n) => n.id !== note.id));
                  });
              }}
            >
              <Logo className="w-4 h-4" />
            </button>
            <button
              className="absolute bottom-2 bg-red"
              onClick={async () => {
                axios
                  .get(`http://localhost:5001/byId/${note.id}`)
                  .then((response) => {
                    setEditedTitle(response.data[0].title);
                    setEditedDescription(response.data[0].description);
                    setSelectedNoteId(note.id); // Set the selected note's ID
                  });
              }}
            >
              <Edit className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Render EditNote only if a note is selected */}
      {selectedNoteId && (
        <EditNote
          title={editedTitle}
          description={editedDescription}
          id={selectedNoteId} // Pass the selected note's ID
        />
      )}
    </div>
  );
}
