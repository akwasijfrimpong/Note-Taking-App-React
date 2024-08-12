import styles from "./Note.module.css";
import axios from "axios";
import { useState } from "react";
export default function Note(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const post = (event) => {
    event.preventDefault();
    const getTitle = document.getElementById("title");
    console.log(title, description);
    axios.post("http://localhost:5001/post", {
      title: title,
      description: description,
    });
    props.refreshNotes();
  };

  return (
    <div>
      <form className={styles.container}>
        <input
          type="text"
          placeholder="Title"
          style={{ width: "400px" }}
          id="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className={styles.description}
          id="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button onClick={post}>Submit</button>
      </form>
    </div>
  );
}
