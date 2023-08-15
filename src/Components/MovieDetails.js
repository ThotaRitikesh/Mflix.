import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicRating from "./BasicRating";
import SkeletonShimmer from "./SkeletonSimmer";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [value,setValue]=useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{getMovieData()},[]);

  async function getMovieData(){
   const data=await fetch("https://www.omdbapi.com/?i=" + id + "&apikey=4efa7c6");
   const json=await data.json();
   setMovieDetails(json)
   // eslint-disable-next-line no-eval
   const calculatedValue=(eval(json?.Ratings[0].Value)*5);
   setValue(calculatedValue);
  }
  
  return (
    <>
      {
        movieDetails.Response==='False'? <div className="details-container"><h1 style={{color:"red"}}>Error : {movieDetails.Error}</h1></div>:
        movieDetails.length===0?<SkeletonShimmer/>:
      <div className="details-container">
        <div className="img-container">
          <img src={movieDetails.Poster}  alt="No Poster Available"  />
        </div>
        <div className="body-container">
          <h1>{movieDetails.Title}</h1>
            <BasicRating value={value} />
          <div className="plot-container">
          <span className="span-text"> Plot </span>: <br /> <br />
            {movieDetails.Plot}
          </div>
          <div className="list-container">
            <ul>
              <li>
                <span className="span-text"> Released </span>:
                {movieDetails.Released}
              </li>
              <li>
                <span className="span-text"> Genre </span>:
                {movieDetails.Genre}
              </li>
              <li>
                <span className="span-text"> Actors </span>:
                {movieDetails.Actors}
              </li>
            </ul>
            <ul>
              <li>
                <span className="span-text"> Duration </span>:
                {movieDetails.Runtime}
              </li>
              <li>
                <span className="span-text"> Country </span>:
                {movieDetails.Country}
              </li>
              <li>
                <span className="span-text"> Languages </span>:
                {movieDetails.Language}
              </li>
            </ul>
          </div>
        </div>
      </div>
}
    </>
  );
};

export default MovieDetails;
