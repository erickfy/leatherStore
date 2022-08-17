import { Typography } from "@mui/material";
import Link from "next/link";
import styles from "./Men.module.css";
import Filter from '@/components/filter'
import Card from '@/components/card'

function Home() {
  return (
    <div className={styles.container_title}>
      <Typography
        variant="subtitle1"
        // noWrap
        component="div"
        align="left"
      >
        Venta de chaquetas de cuero
      </Typography>
      <Typography
        variant="subtitle2"
        // noWrap={false }
        paragraph
        component="div"
        align="left"
      >
        Echa un vistazo a nuestras chaquetas de cuero en oferta para hombre.
        Compra nuestras exclusivas chaquetas moteras, confeccionadas en cuero y
        ante y terminadas con herrajes metálicos.
      </Typography>
      <Filter />
      <Card />
    </div>
  );
}

export default Home;
