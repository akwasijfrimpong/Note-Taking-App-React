import { useEffect, useState } from "react";
import axios from "axios";

export default function EditNote(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  // Synchronize state with props when props change
  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
  }, [props.title, props.description]);

  return (
    <div className="absolute bg-red">
      <div className="w-[700px] h-[700px] flex flex-col">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => {
            axios.put(`http://localhost:5001/update/${props.id}`, {
              title: title,
              description: description,
            });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
