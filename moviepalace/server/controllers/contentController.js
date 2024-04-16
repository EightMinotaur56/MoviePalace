const connectDB = require('../config/db.mjs');

const connection = connectDB();

const getAllMovies = async (req, res) => {
  try {
    connection.query('SELECT * FROM contents', (err, results) => {
      if (err) {
          console.error('Database error:', err);
          res.status(500).json({ error: "Internal Server Error" });
      } else if (results.length === 0) {
          res.status(404).json({ message: "No movies found" });
      } else {
          res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

const getMovieById = async (req, res) => {
  const content_id = req.params.id;
  try {
    connection.query('SELECT * FROM contents WHERE content_id = ?', [content_id], (err, results) => {
      if (err) {
          console.error('Database error:', err);
          res.status(500).json({ error: "Internal Server Error" });
      } else if (results.length === 0) {
          res.status(404).json({ message: "Movie not found" });
      } else {
          res.status(200).json(results[0]);
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
    getAllMovies,
    getMovieById
};
//commit test
