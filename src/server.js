import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Notes",
  password: "Akwasiman7",
  port: 5432,
});

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

db.connect();

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notes");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
app.get("/byId/:id", async (req, res) => {
  console.log(req.params.id, "id akwasi");
  const results = await db.query(`SELECT * FROM notes WHERE id = $1`, [
    req.params.id,
  ]);
  res.json(results.rows);
});

app.post("/post", async (req, res) => {
  try {
    console.log(req.body);
    console.log("we are here");
    db.query(`INSERT INTO notes (title, description) VALUES ($1, $2)`, [
      req.body.title,
      req.body.description,
    ]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    db.query(`UPDATE notes SET title = $1, description = $2 WHERE id = $3`, [
      title,
      description,
      id,
    ]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}); // Update a note

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    db.query(`DELETE FROM notes WHERE id = $1`, [id]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(5001, () => console.log("Server running on port 5001"));
