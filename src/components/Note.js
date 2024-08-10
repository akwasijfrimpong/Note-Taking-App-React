import styles from "./Note.module.css";
export default function Note() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" style={{ width: "400px" }} />
      <input
        type="text"
        placeholder="Description"
        className={styles.description}
      />
    </div>
  );
}
