import { useEffect, useState } from "react";

import MovieCard from "./common/MovieCard";
import Loading from "./common/Loading"
const Movies = ({ isLoading,movies,onImageHandle }) => {
    console.log(isLoading)
  return (
    <>
      {(isLoading && <Loading/>) || (
        <div className="movie-list-container">
          {movies?.map((movieItem,index) => {
            return <MovieCard onImageHandle={onImageHandle} movie={movieItem} movieIndex={index}></MovieCard>;
          })}
        </div>
      )}
    </>
  );
};

export default Movies;
