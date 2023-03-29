import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import http from "./services/httpService";
import config from "./config.json";
import { Route, Routes, useNavigate } from "react-router-dom";
import FavoriteMovies from "./components/FavoriteMovies";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/common/NavBar";
import Movies from "./components/Movies";
const apikey = "ab0374d3";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate=useNavigate()

  //
  async function getMovie(e) {
    e.preventDefault();
    navigate("/")
    setLoading(true);
    try {
      const { data } = await http.get(
        `${config.endPoint}?s=${searchQuery}&apikey=${apikey}`
      );
      console.log(data)
      setMovies(data.Search);
      console.log(movies)
      setLoading(false);
    } catch (ex) {
      if (ex.response && ex.response.status == 404) {
        console.log(ex.message);
      }
    }
  }
  //
  function handleSearchInput(e) {
    setSearchQuery(e.target.value);
  }
  function handleMovieDetail(obj){
  }
  return (
    <>
      <NavBar
        onSearchInput={handleSearchInput}
        onGetMovie={getMovie}
        searchQuery={searchQuery}
      ></NavBar>
      <div className="content">
        <Routes>
          <Route path="/fav-movies" element={<FavoriteMovies />}></Route>
          <Route path="movie/:id" element={<MovieDetail movies={movies} />}></Route>
          <Route
            path="/"
            element={<Movies movies={movies} isLoading={isLoading} onImageHandle={handleMovieDetail} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
