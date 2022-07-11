import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import styles from "./Footer.module.css";
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.container}>
      <Grid container rowSpacing={{ xs: 3, sm: 4,}} columnSpacing={{xs: 12, sm: 10, md: 20 }} columns={{ xs: 12, sm: 12, }}>
        {Array.from(Array("Quienes Somos", "Redes Sociales", "Descarga la Aplicación")).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Item>{_}</Item>
          </Grid>
        ))}
      </Grid>
      <Typography variant="subtitle2" display="block" align='center'>
        Created by University Project
      </Typography>


    </Box>
    </>
  );
}

export default Footer;
