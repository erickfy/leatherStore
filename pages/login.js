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
    (async ()=> {
      await onAuthStateChanged(auth, (currentUser) => {
        console.log("auth",auth);
        if(currentUser){
          const uid = user.uid;
        }else{

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
  return (
    <div className={stylesProduct.loginCard}>
      <div className="">
        <Card border="secondary" style={{ width: "25rem" }}>
          <Card.Header className="text-center bg-black text-white">
            Leather Store
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card.Title className="text-center">Ingresa</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  {...register("email")}
                />
                <Typography variant="caption">
                  {errors.email?.message}
                </Typography>

                <Form.Text className="text-muted">
                  Nunca compartas tu email con alguien más.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  {...register("password")}
                />
                <Typography variant="caption">
                  {errors.password?.message}
                </Typography>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordar contraseña" />
            </Form.Group> */}
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
              <div
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
              </div>
            </form>
          </Card.Body>
        </Card>
        <h4> User Logged In: </h4>
        {user?.email}
      </div>
    </div>
  );
}
