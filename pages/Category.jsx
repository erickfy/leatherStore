import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row } from 'react-bootstrap';
// import { useParams } from 'react-router';
import { capitalize, productInfo } from '../utils';

// import styles from "./Categories.module.scss";

const Category = () => {

  const router = useRouter();
  const { category } = useParams();
  const productTypes = Object.keys(productInfo[category].productTypes);
console.log("router", router)
  return (
    <Container>


        <Row>
          {/* {productTypes.map(product => (

            <Link key={`${category}_${product}`} routerLink={`/categories/${category}/${product.toLowerCase().replaceAll(" ", "_")}`}>
              <div className={styles.categoryContainer}>
                <img src={productInfo[category].productTypes[product].coverImage} alt="cover" />
                <p>{capitalize(product)}</p>
              </div>
            </Link>
          ))} */}
        </Row>
    </Container>
  );
};

export default Category;
