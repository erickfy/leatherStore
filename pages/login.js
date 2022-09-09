import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css";
import { Card } from "react-bootstrap";
import stylesProduct from "../styles/Product.module.css";
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
import { useRouter } from 'next/router'
import { createItem } from "../service/api";
// schema yup
const schema = yup
  .object({
    email: yup.string().required("Campo incorrecto"),
    password: yup.string().required("Campo incorrecto"),
  })
  .required();
export default function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const router = useRouter()

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
  }, [user.uid]);



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
  const onSubmit = handleSubmit(async (values) => {
    let email = values.email;
    let password = values.password;

    try {
      const user_ = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("correct:", user_);
      setError("")
      if(email === "admin@gmail.com" && password === "superadmin"){
        router.push({pathname: '/admin', query: {jwt: "pdvwSchhINbT69qmUDNN"}})
      }else{
        router.push("/categories")
      }
    } catch (error) {
      console.log("not working", error.message);
      setError("Usuario no registrado")
    }
    // add user to firestore
    // createItem()
  });
  return (
    <div className={stylesProduct.loginCard}>
      <div className={stylesProduct.loginCardContainer}>
        {/* <button onClick={logout}>salir</button> */}
        <Card.Img
          src={imgLogin.src}
          width="100"
          height="400"
          className={stylesProduct.cardImage}
        />
        <Card border="secondary" style={{ width: "30rem" }}>
          <Card.Header className="text-center bg-black text-white">
            Leather Store
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card.Title className="text-center">Bienvenido</Card.Title>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  placeholder="Ingresa el email"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, email: target.value })
                  }
                  type="email"
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  placeholder="Ingresa la contraseña"
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value })
                  }
                  type="password"
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
                  Ingresar
                </Button>
                {error ? 
                   <Typography
                   variant="caption"
                   style={{ color: "red" }}
                   className="ms-2"
                 >
                   Usuario no encontrado 
                   <Link href="/signup"> Registrate aqui!</Link>
                 
                 </Typography>
                : ""}
             
                
              </div>
            </form>
          </Card.Body>
        </Card>
        {/* {user?.email} */}
      </div>
    </div>
  );
}
