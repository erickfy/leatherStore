import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fab, Grid } from "@mui/material";
import style from "./styles/Profile.module.css";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const profile = () => {
  return (
    <Grid className={style.container}>
      <Card sx={{ maxWidth: 345 }}>
        <div className={style.container}></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <AccessibilityIcon fontSize="large" color="primary" />
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Correo electronico: 
          </Typography>
        </CardContent>
        <CardActions>
        <Fab aria-label="like" color="primary">
  <FavoriteIcon />
</Fab>
<Fab aria-label="like" color="primary">
  <ShoppingCartIcon />
</Fab>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default profile;
