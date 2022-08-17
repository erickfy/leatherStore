import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { capitalize, productInfo, outputWithSpace} from "utils/";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./Categories.module.css";
import Image from "next/image";

const Categories = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const key = router.query.keyword;
  console.log("key", key);
  const categories = Object.keys(productInfo);
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
      <Row className={styles.categoryContainer}>
        {product.map((i, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Link  href={{
              pathname: "/categories",
              query: { keyword: outputWithSpace(i.title) },
            }}>
            <Card style={{ width: "18rem" }} className={styles.container_card}>

              <Card.Img
                variant="top"
                src={i.image}
                width={80}
                height={300}
              ></Card.Img>
              <Card.Body className={styles.cardBody}>
                <Card.Text className={styles.cardText}>
                  Añadir al Carrito
                  <p>X&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL</p>
                </Card.Text>
                <Card.Text className={styles.cardTextTitle}>
                  {i.title}
                </Card.Text>
                <Card.Title>
                  <span className={styles.textPrice}>{i.price}</span> &nbsp;
                  <span style={{ color: "red" }}>{i.price}</span>
                </Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
        {/* {categories.map((category, index) => (
          <Link
            href={{
              pathname: "/categories",
              query: { keyword: category.toLowerCase() },
            }}
            key={index}
          >
            <div className={styles.categoryContainer}>
              <img src={productInfo[category].coverImage} alt="cover" />
              <p>testi: </p>
              <p>{key}</p>
              <p>{category.toUpperCase()}</p>
              <p>{category.toUpperCase()}</p>
            </div>
          </Link>

          // <IonButton key={c} routerLink={`/categories/${c.toLowerCase()}`}>{capitalize(c)}</IonButton>
        ))} */}
      </Row>
    </Container>
  );
};

export default Categories;
