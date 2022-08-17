import React from "react";
import styles from "./Categories.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const Buying = () => {
  const [product, setProduct] = useState([]);
  const pro = [
    {
      image:
        "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/249158.jpg",
      title: "Navy Funnel Neck Coat",
      price: "£99",
    },
  ];
  const i = pro[0];
  console.log("pro", pro[0].image);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`/data/men/jackets.json`);
      const data = await response.json();
      // setProducts(data);
      // setFilteredProducts(data);
      console.log("data", data);
      setProduct(data);
    };

    getProducts();
  }, []);

  return (
    <Container className={styles.overalContainer}>
      <Row>
        <Col xs={12} sm={8} md={6} className="d-flex justifiy-content-center">
          <Card style={{ width: "18rem" }}>
            {pro ? (
              <>
                <Card.Header>
                  <Card.Subtitle className="mb-2 text-muted text-center">
                    {pro[0].title}
                  </Card.Subtitle>
                </Card.Header>

                <Card.Text className={styles.cardTextTitle}></Card.Text>
                <Card.Img
                  variant="top"
                  src={pro[0].image}
                  width={80}
                  height={300}
                ></Card.Img>
              </>
            ) : (
              ""
            )}
          </Card>
        </Col>
        <Col xs={12} sm={4} md={6} className="text-left">
          <Card border="light">
            {pro ? (
              <>
                <Card.Header className="text-center">
                  {" "}
                  {pro[0].title}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <span className={styles.textPrice}>{i.price}</span> &nbsp;
                    <span style={{ color: "red" }}>{i.price}</span>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center">
                    <div className={styles.containerBorderSize}>
                      <span className={styles.borderSize}>S</span>&nbsp;
                      <span className={styles.borderSize}>X</span>&nbsp;
                      <span className={styles.borderSize}>L</span>&nbsp;
                      <span className={styles.borderSize}>XL</span>&nbsp;
                      <span className={styles.borderSize}>XLL</span>&nbsp;
                    </div>
                  </Card.Subtitle>
                  <Card.Subtitle className="bg-grey">
                    Añadir al carrito <Button>Add</Button>
                    <span> heart</span>
                  </Card.Subtitle>
                </Card.Body>
              </>
            ) : (
              ""
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Buying;
