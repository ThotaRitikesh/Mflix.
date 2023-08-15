import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {  CardActionArea} from "@mui/material";
import img from "../assets/no photo available.jpeg";

function MovieCard({ value }) {
  return (
    <Card sx={{ maxWidth: 245 ,marginY:2 }} className="card-size">
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={value.Poster}
          alt="Poster"
          onError={(e) =>
        (e.target.src =img)}
        />     
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
