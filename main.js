import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});

//CRUD functionality of movies

// C- Creating movies
app.get('/movies', () => {});

// R - Read movie
app.get('/movies', () => {});

// U - Updating movie
app.get('/movies/:id', () => {});

// D - Delete the movie
app.get('/movies/:id', () => {});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
