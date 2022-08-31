const express = require('express');
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

let jsonData = require('./pokemonFile.json');
//parse the body of any request coming from html forms
app.use(express.urlencoded({ extended: true }));
//parse the body of any request not coming through an html form
app.use(express.json());
//allow CORS from any origin
app.use(cors());






app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });




  /*
app.get("/", (req, res) => {
    res.send("Welcome to my Movies API");
});

//GET request to get all movies from the DB
app.get("/api/movies", async (req, res) => {
  // const { rows: movies }
  try {
    const { rows } = await db.query("SELECT * from Movies;");
    return res.status(200).send(rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

//GET request to get one movie from the DB
app.get("/api/movies/:id", async (req, res) => {
  const { id } = req.params;

  try {
    //prepared statement to avoid SQL injections
    const {
      rows: [movie],
      rowCount,
    } = await db.query(`SELECT * FROM Movies WHERE id=$1;`, [id]);

    //if there is no movie with the id, return 404
    if (!rowCount)
      return res.status(404).send(`The movie with id ${id} does not exist`);

    return res.status(200).send(movie);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

  */