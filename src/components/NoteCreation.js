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
    <div className="border-2 border-solid border-orange-300">
      <form className={styles.container}>
        <input
          type="text"
          placeholder="Title"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
          className="bg-orange-300 w-[400px]"
        />
        <input
          type="text"
          placeholder="Description"
          className={`bg-orange-300 ${styles.description}`}
          id="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button onClick={post} className="bg-blue-500 w-[200px] text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
