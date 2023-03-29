import { useParams } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movieObj = movies.filter((item, index) => index === parseInt(id));
  return (
    <>
      {movieObj.map((movie) => {
        return (
          <div className="movie-detail-container">
            <img src={movie?.Poster} alt="" />
            <h1>{movie?.Title}</h1>
            <p>{movie?.Year}</p>
          </div>
        );
      })}
    </>
  );
};

export default MovieDetail;
