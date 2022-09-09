import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { capitalize, productInfo, outputWithSpace } from "utils/";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./styles/Categories.module.css";
import Image from "next/image";
import { Grid, Pagination } from "@mui/material";
import { getItemsByConditionAll } from "service/api";
import Footer from "components/footer";
import AppBarStore from "@/components/appbar";
const Categories = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [lengthPage, setLengthPage] = useState(0);
  const [rangeProduct, setRangeProduct] = useState({ min: 0, max: 10 });
  const [nameCol, setNameCol] = useState("jeans");
  const router = useRouter();
  const key = router.query.keyword;
  // console.log("key", key);
  const categories = Object.keys(productInfo);
  useEffect(() => {
    const getProducts = async () => {
//get data firebase
const allItems = await getItemsByConditionAll(nameCol);
console.log(allItems);
      setProduct(allItems[0].data);

//get data firebase

      const response = await fetch(`/data/men/coats.json`);
      const data = await response.json();
      let max = page * 10;
      let min = max - 10;
      // product.slice(min, max).map((i) => console.log("i:", i.title));
      // console.log("data", data.length, min);
      // setProduct(data);
      setLengthPage(Math.round(data.length / 10));
    };

    getProducts();
  }, [page, nameCol]);
  const handlePag = (event, value) => {
    // if()
    // console.log("e:", value);
    setPage(value);

    if (value) {
      let max = value * 10;
      let min = max - 10;
      let obj = {
        min: min,
        max: max,
      };
      setRangeProduct(obj);
      // console.log(rangeProduct);
    }
  };
  
  return (
    <>
    <AppBarStore/>

    <Container className={styles.overalContainer}>
      <Grid className={styles.containerPagination}>
        <Pagination
          count={lengthPage}
          onChange={handlePag}
          color="primary"
          size="small"
        />
      </Grid>
      <Row className={styles.categoryContainer}>
        {product.slice(rangeProduct.min, rangeProduct.max).map((i, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index}>
            <Link
              href={{
                pathname: "/buying",
                query: { keyword: outputWithSpace(i.title), type: nameCol },
              }}
            >
              <Card
                style={{ width: "18rem" }}
                className={styles.container_card}
              >
                <Card.Img
                  variant="top"
                  src={i.image}
                  width={80}
                  height={300}
                ></Card.Img>
                <Card.Body className={styles.cardBody}>
                  <Card.Text className={styles.cardText}>
                    Añadir al Carrito
                    <p>S&nbsp;X&nbsp;L&nbsp;XL&nbsp;XLL</p>
                  </Card.Text>
                  <Card.Text className={styles.cardTextTitle}>
                    {i.title}
                  </Card.Text>
                  <Card.Title>
                    <span className={styles.textPrice}>${i.price}</span> &nbsp;
                    <span style={{ color: "red" }}>
                      ${i.price - i.discount}
                    </span>
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
      </Row>{" "}
      <Grid className={styles.containerPagination}>
        <Pagination
          count={lengthPage}
          onChange={handlePag}
          color="primary"
          size="small"
        />
      </Grid>
    </Container>
    <Footer/>

    </>

  );
};

export default Categories;
