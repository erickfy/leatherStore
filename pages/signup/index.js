import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Home.module.css";
import { Card } from "react-bootstrap";
import stylesProduct from "../../styles/Product.module.css";
import google from "imgs/svgs/google.svg";
import facebook from "imgs/svgs/facebook.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";
import {
  auth,
  provider,
  signInWithFacebook,
  signInWithGoogle,
} from "firebase-config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import imgLogin from "imgs/auth/login.jpg";
// schema yup
const schema = yup
  .object({
    email: yup.string().required("Campo incorrecto"),
    password: yup.string().required("Campo incorrecto"),
  })
  .required();
export default function Login() {
  console.log("renderer");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      await onAuthStateChanged(auth, (currentUser) => {
        console.log("auth", auth);
        if (currentUser) {
          const uid = user.uid;
        } else {
        }
        setUser(currentUser);
      });
    })();
  }, []);

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const login = async () => {
    try {
      const user_ = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user_);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  // hookForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((values) => {
    // const { email, password } = values;
    logout();
    console.log("values", values);
    login();
  });

  1;
  console.log(imgLogin);
  return (
    <div className={stylesProduct.loginCard}>
      <div className={stylesProduct.loginCardContainer}>
        {/* <Card.Img  src={imgLogin.src} width="100" height="400"className={stylesProduct.cardImage}/> */}
        <Card border="secondary" style={{ width: "30rem" }}>
          <Card.Header className="text-center bg-black text-white">
            Leather Store
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card.Title className="text-center">Registrate</Card.Title>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa el nombre"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  {...register("email")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.email?.message}
                </Typography>
              </Form.Group>

              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa el correo electronico"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  {...register("email")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.email?.message}
                </Typography>
              </Form.Group>
              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa la contraseña"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  {...register("password")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.password?.message}
                </Typography>
              </Form.Group>
              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Repite la contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Reingresa la contraseña"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  {...register("password")}
                />
                <Typography
                  variant="caption"
                  style={{ color: "red" }}
                  className="ms-2"
                >
                  {errors.password?.message}
                </Typography>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="text-center "
                >
                  Registrarse
                </Button>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1rem",
                }}
              >
                <Link href="#" passHref>
                  <Button
                    variant="outlined"
                    className={styles.button}
                    onClick={signInWithGoogle}
                  >
                    Iniciar Sesión con &nbsp;
                    <div>
                      <Image src={google} alt="chippy" width={25} height={25} />
                    </div>
                  </Button>
                </Link>

                <Link href="#" passHref>
                  <Button
                    variant="contained"
                    className={styles.button}
                    color="secondary"
                    onClick={signInWithFacebook}
                  >
                    Iniciar Sesión con &nbsp;
                    <Image src={facebook} alt="chippy" width={25} height={25} />
                  </Button>
                </Link>
              </div> */}
            </form>
          </Card.Body>
        </Card>
        {/* <h4> User Logged In: </h4> */}
        {user?.email}
      </div>
    </div>
  );
}

// import React, {useState} from "react";
// import style from "./SignUp.module.css";
// import {
//   Box,
//   Button,
//   Divider,
//   Typography,
//   Card,
//   CardActions,
//   CardContent,
// } from "@mui/material";
// import Image from "next/image";
// import { alpha, styled } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";
// import logo from "./logo.png";
// import google from "./google.svg";
// import tiktok from "./tiktok.svg";
// import facebook from "./facebook.svg";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// // import style from "../../styles/Auth.module.css";

// import { Form } from "react-bootstrap";
// // import imgLogin from "../../imgs/auth/login.jpg";

// const schema = yup
//   .object({
//     email: yup.string().required("Campo incorrecto"),
//     password: yup.string().required("Campo incorrecto"),
//   })
//   .required();

// const SingUp = () => {
//   const [user, setUser] = useState({});

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm({ resolver: yupResolver(schema) });
//   const onSubmit = handleSubmit((values) => {
//     // const { email, password } = values;
//     console.log(values);
//   });

//   const lazyRoot = React.useRef(null);
//   const CssTextField = styled(TextField)({
//     "& label.Mui-focused": {
//       color: "#6a6a6a",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "6a6a6a",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "grey",
//       },
//       "&:hover fieldset": {
//         borderColor: "pink",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#ee99ab",
//       },
//     },
//   });
//   const customized = styled("div")`
//     color: #ab3412;
//   `;
//   const Root = styled("div")(({ theme }) => ({
//     width: "100%",
//     marginBottom: theme.spacing(3),
//     ...theme.typography.body2,
//     "& > :not(style) + :not(style)": {},
//   }));
//   return (
//     <div className={style.loginCard}>
//     <div className={style.loginCardContainer}>

//         {/* <Card.Img  src={imgLogin.src} width="100" height="400"className={style.cardImage}/> */}
//       <Card border="secondary" style={{ width: "30rem" }}>
//         <Card.Header className="text-center bg-black text-white">
//           Leather Store
//         </Card.Header>
//         <Card.Body>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Card.Title className="text-center">Bienvenido</Card.Title>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Correo electronico</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 onChange={(event) => {
//                   setLoginEmail(event.target.value);
//                 }}
//                 {...register("email")}
//               />
//               <Typography variant="caption" style={{color:"red"}} className="ms-2">
//                 {errors.email?.message}
//               </Typography>

//               {/* <Form.Text className="text-muted">
//                 Nunca compartas tu email con alguien más.
//               </Form.Text> */}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Contraseña</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 onChange={(event) => {
//                   setLoginPassword(event.target.value);
//                 }}
//                 {...register("password")}
//               />
//               <Typography variant="caption" style={{color:"red"}} className="ms-2">
//                 {errors.password?.message}
//               </Typography>
//             </Form.Group>
//             {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Recordar contraseña" />
//           </Form.Group> */}
//           <div className="d-grid gap-2">

//             <Button variant="primary" type="submit" className="text-center ">
//               Ingresar
//             </Button>
//           </div>
//             {/* <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 margin: "1rem",
//               }}
//             >
//               <Link href="#" passHref>
//                 <Button
//                   variant="outlined"
//                   className={styles.button}
//                   onClick={signInWithGoogle}
//                 >
//                   Iniciar Sesión con &nbsp;
//                   <div>
//                     <Image src={google} alt="chippy" width={25} height={25} />
//                   </div>
//                 </Button>
//               </Link>

//               <Link href="#" passHref>
//                 <Button
//                   variant="contained"
//                   className={styles.button}
//                   color="secondary"
//                   onClick={signInWithFacebook}
//                 >
//                   Iniciar Sesión con &nbsp;
//                   <Image src={facebook} alt="chippy" width={25} height={25} />
//                 </Button>
//               </Link>
//             </div> */}
//           </form>
//         </Card.Body>
//       </Card>
//       {/* <h4> User Logged In: </h4> */}
//       {user?.email}
//     </div>
//   </div>
//   );
//   // return (
//   //   <Box sx={{ boxShadow: 5 }} className={styles.signupblock}>
//   //     <Card sx={{ minWidth: 230 }} className={styles.cardBlock}>
//   //       <CardContent className={styles.cardContent}>
//   //         <Image
//   //           src={logo}
//   //           lazyRoot={lazyRoot}
//   //           width="150"
//   //           height="150"
//   //           alt="chippy"
//   //         />
//   //         <Typography align="center" variant="h4">
//   //           Crear Nueva Cuenta
//   //         </Typography>
//   //       </CardContent>
//   //       <CardActions className={styles.cardActions}>
//   //         <Box
//   //           component="form"
//   //           onSubmit={handleSubmit(onSubmit)}
//   //           className={styles.form}
//   //         >
//   //           <Typography variant="h6" align="left">
//   //             C.I./Pasaporte
//   //           </Typography>
//   //           <CssTextField
//   //             label="Ej: 1710210310"
//   //             id="custom-css-outlined-input"
//   //             size="small"
//   //             className={styles.input}
//   //             fullWidth
//   //             {...register("passport")}
//   //           />
//   //           <Typography variant="caption">
//   //             {errors.passport?.message}
//   //           </Typography>

//   //           <Typography variant="h6" component="div" align="left">
//   //             Correo
//   //           </Typography>
//   //           <CssTextField
//   //             label="example@example.com"
//   //             id="custom-css-outlined-input"
//   //             className={styles.input}
//   //             size="small"
//   //             fullWidth
//   //             {...register("email")}
//   //           />
//   //           <Typography variant="caption">{errors.email?.message}</Typography>

//   //           <Typography variant="h6" component="div" align="left">
//   //             Contraseña
//   //           </Typography>
//   //           <CssTextField
//   //             id="outlined-password-input"
//   //             type="password"
//   //             className={styles.input}
//   //             size="small"
//   //             fullWidth
//   //             {...register("password")}
//   //           />
//   //           <Typography variant="caption">
//   //             {errors.password?.message}
//   //           </Typography>

//   //           <Typography variant="h6" component="div" align="left">
//   //             Repite la Contraseña
//   //           </Typography>
//   //           <CssTextField
//   //             id="outlined-password-input"
//   //             type="password"
//   //             className={styles.input}
//   //             size="small"
//   //             fullWidth
//   //             {...register("repassword")}
//   //           />
//   //           <Typography variant="caption">
//   //             {errors.repassword?.message}
//   //           </Typography>

//   //           <Typography variant="h6" component="div" align="left">
//   //             Ciudad
//   //           </Typography>
//   //           <CssTextField
//   //             label="Ej: Manabí"
//   //             id="custom-css-outlined-input"
//   //             className={styles.input}
//   //             size="small"
//   //             fullWidth
//   //             {...register("city")}
//   //           />
//   //           <Typography variant="caption">{errors.city?.message}</Typography>

//   //           <Typography variant="h6" component="div" align="left">
//   //             Teléfono
//   //           </Typography>
//   //           <CssTextField
//   //             label="Ej: 091234567"
//   //             id="custom-css-outlined-input"
//   //             className={styles.input}
//   //             size="small"
//   //             fullWidth
//   //             {...register("phone")}
//   //           />
//   //           <Typography variant="caption">{errors.phone?.message}</Typography>

//   //           <Typography variant="h6" component="div" align="left">
//   //             Dirección
//   //           </Typography>
//   //           <CssTextField
//   //             label=""
//   //             id="custom-css-outlined-input"
//   //             className={styles.input}
//   //             size="small"
//   //             fullWidth
//   //             {...register("address")}
//   //           />
//   //           <Typography variant="caption">{errors.address?.message}</Typography>

//   //           <Typography variant="h6" component="div" align="left">
//   //             Ubicación GPS de entrega
//   //           </Typography>
//   //           <CssTextField
//   //             label="Click para subir la ubicación"
//   //             id="custom-css-outlined-input"
//   //             fullWidth
//   //             size="small"
//   //             {...register("gps")}
//   //           />
//   //           <Typography variant="caption">{errors.gps?.message}</Typography>

//   //           <div className={styles.btnLogin}>
//   //             <Button variant="contained" type="submit">
//   //               {/* <Link href="/about">Crear Cuenta</Link> */}
//   //               Crear Cuenta
//   //             </Button>
//   //           </div>
//   //           <div className={styles.alreadycount}>
//   //             <Typography variant="subtitle2" component="div" align="center">
//   //               ¿Ya tienes cuenta?
//   //               <Link href="/about" style={{ color: "red" }} passHref>
//   //                 <Typography
//   //                   variant="subtitle2"
//   //                   style={{ color: "blue", cursor: "pointer" }}
//   //                 >
//   //                   Inicia sesión
//   //                 </Typography>
//   //               </Link>
//   //             </Typography>
//   //           </div>
//   //         </Box>
//   //       </CardActions>
//   //       <Root>
//   //         <Divider>O</Divider>

//   //         <div
//   //           style={{
//   //             display: "flex",
//   //             flexDirection: "column",
//   //             alignItems: "center",
//   //             marginTop: ".6rem",
//   //           }}
//   //         >
//   //           <Link href="/about" passHref>
//   //             <Button variant="outlined" className={styles.button}>
//   //               Crear Cuenta con
//   //               <Image src={google} alt="chippy" width={25} height={25} />
//   //             </Button>
//   //           </Link>
//   //           <Link href="/about" passHref>
//   //             <Button variant="outlined" className={styles.button}>
//   //               Crear Cuenta con
//   //               <Image src={tiktok} alt="chippy" width={25} height={25} />
//   //             </Button>
//   //           </Link>
//   //           <Link href="/about" passHref>
//   //             <Button variant="outlined" className={styles.button}>
//   //               Crear Cuenta con
//   //               <Image src={facebook} alt="chippy" width={25} height={25} />
//   //             </Button>
//   //           </Link>
//   //         </div>
//   //       </Root>
//   //     </Card>
//   //   </Box>
//   // );
// };

// export default SingUp;
