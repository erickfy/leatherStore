import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css";
import { Card } from "react-bootstrap";
import stylesProduct from "../styles/Product.module.css";
import google from "imgs/svgs/google.svg";
import facebook from "imgs/svgs/facebook.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className={stylesProduct.loginCard}>
      <div className="">
        <Card border="secondary" style={{ width: "25rem" }}>
          <Card.Header className="text-center bg-black text-white">
            Leather Store
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-center">Ingresa</Card.Title>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Nunca compartas tu email con alguien más.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
                margin: "1rem"
              }}
            >
              <Link href="#" passHref>
                <Button variant="outlined" className={styles.button}>
                  Iniciar Sesión con &nbsp;
                  <div>

                  <Image src={google} alt="chippy" width={25} height={25} />
                  </div>
                </Button>
              </Link>

              <Link href="#" passHref>
                <Button variant="contained" className={styles.button} color="secondary">
                  Iniciar Sesión con &nbsp;
                  <Image src={facebook} alt="chippy" width={25} height={25} />
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
