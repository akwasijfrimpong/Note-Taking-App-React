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

app.listen(5001, () => console.log("Server running on port 5000"));
