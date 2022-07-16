import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from '././components/MovieList'
import './App.css';


function App() {

  const [movies, setMovies] = useState([
    {
      "Title": "Star Wars: Empire at War",
      "Year": "2006",
      "imdbID": "tt0804909",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGRiMDllMDUtOWFkZS00MGIyLWFkOTQtZjY2ZGUyNzY5YWRiXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars Empire at War: Forces of Corruption",
      "Year": "2006",
      "imdbID": "tt0879261",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGIxYTZiMmQtYjYzMS00ZmExLTljZDktMjE1ODY5OTJlYjlmXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
  ])

  return (
    <div className='container-fluid movie-app'>
      <div className="row">
        <MovieList 
          movies={movies}
        />
      </div>
    </div>
  );
}

export default App;
