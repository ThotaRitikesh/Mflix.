import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ErrorCard({ title, img, errorMessage, info }) {
  return (
    <>
      <Card sx={{ maxWidth: 345,backgroundColor:"black"}}  >
        <Typography variant="h6" color="gray">
              {title}
            </Typography>
        <CardActionArea>
          <CardMedia component="img"  height="240" image={img} alt="image" />
          <CardContent style={{backgroundColor:"black"}}>
            <Typography gutterBottom variant="h5" color="red">
              {errorMessage}
            </Typography>
            <Typography variant="body2" color="gray">
              {info}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
export default ErrorCard;
