import React, { useEffect, useContext } from "react";
import img1 from "../assets/too-much-data.jpg";
import img2 from "../assets/movie not available.png";
import axios from "axios";
import { movieContext } from "../utiles/context";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import ErrorCard from "./ErrorCard";

const Body = () => {
  const { movie, setMovie, errorMessage } = useContext(movieContext);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=king&apikey=4efa7c6`)
      .then((response) => {
        setMovie(response?.data?.Search);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movie && typeof movie === "object" ? (
          movie.map((value) => {
            return (
              <Link to={value.imdbID} key={value.imdbID}>
                <MovieCard value={value} />
              </Link>
            );
          })
        ) : errorMessage === "Too many results." ? (
          <div className="error-card-container">
          <ErrorCard
            title={"The Fallback UI has been displayed!"}
            img={img1}
            errorMessage={errorMessage}
            info={
              " I would appreciate it if you entered the complete title of the movie and tried again !"
            }
          />
          </div>
        ) : (   <div className="error-card-container">
                 <ErrorCard
                 title={"The Fallback UI has been displayed!"}
                 img={img2}
                 errorMessage={errorMessage}
                 info={
                   "  I would appreciate it if you entered the right movie name &  tried again!"
                 }
               />
               </div>
        )}
      </div>
    </div>
  );
};

export default Body;
