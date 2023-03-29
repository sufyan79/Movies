import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const NavBar = ({searchQuery,onGetMovie,onSearchInput}) => {
  
  return (
    <>
      <div className="App">
        <form onSubmit={(e)=>onGetMovie(e)}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e)=>onSearchInput(e)}
            placeholder="Search"
          ></input>
          <input type="submit" value="Search" />
        </form>
        <div className="fav-movie-list">
          <Link to="/fav-movies">
            <FavoriteIcon></FavoriteIcon>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
