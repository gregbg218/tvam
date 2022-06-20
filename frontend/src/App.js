import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Box, { BoxProps } from '@mui/material/Box';


function App() {
  const [movies, setMovies] = useState([{
    "Title": "Drive",
    "Year": "2011",
    "imdbID": "tt0780504",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg"
  },
  {
    "Title": "Mulholland Drive",
    "Year": "2001",
    "imdbID": "tt0166924",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRiMzg4NDItNTc3Zi00NjBjLTgwOWYtOGZjMTFmNGU4ODY4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
    "Title": "Drive Angry",
    "Year": "2011",
    "imdbID": "tt1502404",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwNTM4Njg2NF5BMl5BanBnXkFtZTcwNDQwMTAwNA@@._V1_SX300.jpg"
  },
  {
    "Title": "Sex Drive",
    "Year": "2008",
    "imdbID": "tt1135985",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0MTcyMzg5M15BMl5BanBnXkFtZTcwMDUyOTA4MQ@@._V1_SX300.jpg"
  }]);
  return (
    <div className="App">
     
      <MovieList movies={movies} />
      
    </div>
  );
}

export default App;
