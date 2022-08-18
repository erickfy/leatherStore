import React from "react";
import styles from "./SignUp.module.css";
import {
  Box,
  Button,
  Divider,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import logo from "./logo.png";
import google from "./google.svg";
import tiktok from "./tiktok.svg";
import facebook from "./facebook.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    passport: yup.string().required("Campo incorrecto"),
    email: yup.string().required("Campo incorrecto"),
    password: yup.string().required("Campo incorrecto"),
    repassword: yup.string().required("Campo incorrecto"),
    city: yup.string().required("Campo incorrecto"),
    phone: yup.string().required("Campo incorrecto"),
    address: yup.string().required("Campo incorrecto"),
    gps: yup.string().required("Campo incorrecto"),
  })
  .required();

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((values) => {
    // const { email, password } = values;
    console.log(values);
  });

  const lazyRoot = React.useRef(null);
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#6a6a6a",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "6a6a6a",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "pink",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ee99ab",
      },
    },
  });
  const customized = styled("div")`
    color: #ab3412;
  `;
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    marginBottom: theme.spacing(3),
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {},
  }));
  return (
    <Box sx={{ boxShadow: 5 }} className={styles.signupblock}>
      <Card sx={{ minWidth: 230 }} className={styles.cardBlock}>
        <CardContent className={styles.cardContent}>
          <Image
            src={logo}
            lazyRoot={lazyRoot}
            width="150"
            height="150"
            alt="chippy"
          />
          <Typography align="center" variant="h4">
            Crear Nueva Cuenta
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <Typography variant="h6" align="left">
              C.I./Pasaporte
            </Typography>
            <CssTextField
              label="Ej: 1710210310"
              id="custom-css-outlined-input"
              size="small"
              className={styles.input}
              fullWidth
              {...register("passport")}
            />
            <Typography variant="caption">
              {errors.passport?.message}
            </Typography>

            <Typography variant="h6" component="div" align="left">
              Correo
            </Typography>
            <CssTextField
              label="example@example.com"
              id="custom-css-outlined-input"
              className={styles.input}
              size="small"
              fullWidth
              {...register("email")}
            />
            <Typography variant="caption">{errors.email?.message}</Typography>

            <Typography variant="h6" component="div" align="left">
              Contraseña
            </Typography>
            <CssTextField
              id="outlined-password-input"
              type="password"
              className={styles.input}
              size="small"
              fullWidth
              {...register("password")}
            />
            <Typography variant="caption">
              {errors.password?.message}
            </Typography>

            <Typography variant="h6" component="div" align="left">
              Repite la Contraseña
            </Typography>
            <CssTextField
              id="outlined-password-input"
              type="password"
              className={styles.input}
              size="small"
              fullWidth
              {...register("repassword")}
            />
            <Typography variant="caption">
              {errors.repassword?.message}
            </Typography>

            <Typography variant="h6" component="div" align="left">
              Ciudad
            </Typography>
            <CssTextField
              label="Ej: Manabí"
              id="custom-css-outlined-input"
              className={styles.input}
              size="small"
              fullWidth
              {...register("city")}
            />
            <Typography variant="caption">{errors.city?.message}</Typography>

            <Typography variant="h6" component="div" align="left">
              Teléfono
            </Typography>
            <CssTextField
              label="Ej: 091234567"
              id="custom-css-outlined-input"
              className={styles.input}
              size="small"
              fullWidth
              {...register("phone")}
            />
            <Typography variant="caption">{errors.phone?.message}</Typography>

            <Typography variant="h6" component="div" align="left">
              Dirección
            </Typography>
            <CssTextField
              label=""
              id="custom-css-outlined-input"
              className={styles.input}
              size="small"
              fullWidth
              {...register("address")}
            />
            <Typography variant="caption">{errors.address?.message}</Typography>

            <Typography variant="h6" component="div" align="left">
              Ubicación GPS de entrega
            </Typography>
            <CssTextField
              label="Click para subir la ubicación"
              id="custom-css-outlined-input"
              fullWidth
              size="small"
              {...register("gps")}
            />
            <Typography variant="caption">{errors.gps?.message}</Typography>

            <div className={styles.btnLogin}>
              <Button variant="contained" type="submit">
                {/* <Link href="/about">Crear Cuenta</Link> */}
                Crear Cuenta
              </Button>
            </div>
            <div className={styles.alreadycount}>
              <Typography variant="subtitle2" component="div" align="center">
                ¿Ya tienes cuenta?
                <Link href="/about" style={{ color: "red" }} passHref>
                  <Typography
                    variant="subtitle2"
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Inicia sesión
                  </Typography>
                </Link>
              </Typography>
            </div>
          </Box>
        </CardActions>
        <Root>
          <Divider>O</Divider>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: ".6rem",
            }}
          >
            <Link href="/about" passHref>
              <Button variant="outlined" className={styles.button}>
                Crear Cuenta con
                <Image src={google} alt="chippy" width={25} height={25} />
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="outlined" className={styles.button}>
                Crear Cuenta con
                <Image src={tiktok} alt="chippy" width={25} height={25} />
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="outlined" className={styles.button}>
                Crear Cuenta con
                <Image src={facebook} alt="chippy" width={25} height={25} />
              </Button>
            </Link>
          </div>
        </Root>
      </Card>
    </Box>
  );
};

export default SingUp;
