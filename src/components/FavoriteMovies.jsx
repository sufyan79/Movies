import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "./common/MovieCard";

const FavoriteMovies = () => {
  const { pathname } = useLocation();
  const [favMovies, setFavMoies] = useState(
    JSON.parse(localStorage.getItem("fav-movie"))
  );
  return (
    <>
      {(!favMovies && <h1>First add movies to favorite</h1>) || (
        <div className="movie-list-container">
          {favMovies.map((movieItem) => {
            return (
              <MovieCard
                movie={movieItem}
                currentPathname={pathname}
              ></MovieCard>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FavoriteMovies;
