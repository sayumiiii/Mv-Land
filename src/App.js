import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [findMovie, setFindMovie] = useState(false);
console.log(movies);
  useEffect(() => {
    searchMovies("Batman");
  }, []);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  return (
    <>
    <div className="app">
    <button class="cssbuttons-io-button" onClick={() => searchMovies('Batman')}>
      <span>Home</span>
    </button>
 
      <h1>MovieSearch</h1>
     <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
       <div className="container">
         <button class="btn" onClick={() => searchMovies('Catwomen')}>
            <span class="btn-text-one">Suggest me a movie</span>
            <span class="btn-text-two">Click</span>
        </button>
      </div>
    </div>
    <footer class="footer">
      <div className="container">
        <p>MovieSearch - 2023</p>
      </div>
    </footer>
    </>
  );
};

export default App;