import { Carousel } from 'react-bootstrap';

import image1 from 'imgs/jacket.jpeg';
import image2 from 'imgs/jacketIcon.jpg';
import image3 from 'imgs/jacket.jpeg';
import Image from 'next/image';
import styles from './Carrousel.module.css'
const CarouselContainer = () => {
  return (
<Carousel fade className={styles.container}>
  <Carousel.Item>
  <div className={styles.containerImage}>

    <Image
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className={styles.containerImage}>

    <Image
      className="d-block w-100 mx-auto"
      src={image2}
      alt="Second slide"
      />
      </div>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className={styles.containerImage}>

    <Image
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    </div>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselContainer;