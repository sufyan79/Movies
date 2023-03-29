import { useState } from "react";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";
let movies = [];
const MovieCard = ({ movie, currentPathname, onImageHandle, movieIndex }) => {
  function handleFavorite() {
    movies.push(movie);
    localStorage.setItem("fav-movie", JSON.stringify(movies));
  }
  return (
    <article className="movie-card-container">
      <Link to={`/movie/${movieIndex}`}>
        <img
          className="movie-img"
          src={movie?.Poster}
          alt=""
          onClick={() => onImageHandle(movie)}
        />
      </Link>
      <h2>{movie?.Title}</h2>
      <div className="movie-card-fav">
        <p>{movie?.Year}</p>
        {currentPathname === "/fav-movies" ? null : (
          <div className="fav-icon" onClick={handleFavorite}>
            <FavoriteIcon></FavoriteIcon>
          </div>
        )}
      </div>
    </article>
  );
};

export default MovieCard;
