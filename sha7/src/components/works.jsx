import styles from "../styles/works.module.css";
import fudo from "../../public/fudo.png";
import netflix from "../../public/netflix.png";
import three from "../../public/three.png";
import blog from "../../public/blog.png";
import tech from "../../public/Techit.png";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
export default function Works() {
  return (
    <main className={styles.main} id="works">
      <Row className={styles.row}>
        <Col lg={6} sm={12}>
          <Image src={tech} className={styles.project4} />
        </Col>
        <Col lg={6} sm={12}>
          <p className={styles.heading}>TechIt</p>
          <p className={styles.details}>
            A Ecommerce site for purchasing laptops.
          </p>
          <p ><a className={styles.more} href="https://github.com/Sha7hid/TechIt">Learn More</a></p>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col lg={6} sm={12}>
          <Image src={netflix} className={styles.project2} />
        </Col>
        <Col lg={6} sm={12}>
          <p className={styles.heading}>Netflix Clone</p>
          <p className={styles.details}>
            A Netflix web app with trailers when you click on posters
          </p>
          <p ><a className={styles.more} href="https://github.com/Sha7hid/Netflix-Clone">Learn More</a></p>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col lg={6} sm={12}>
          <Image src={three} className={styles.project} />
        </Col>
        <Col lg={6} sm={12}>
          <p className={styles.heading}>3D Portfolio</p>
          <p className={styles.details}>
            A Three.js site with interactive 3d objects.
          </p>
          <p ><a className={styles.more} href="https://github.com/Sha7hid/3D-portfolio">Learn More</a></p>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col lg={6} sm={12}>
          <Image src={fudo} className={styles.project} />
        </Col>
        <Col lg={6} sm={12}>
          <p className={styles.heading}>Fudo</p>
          <p className={styles.details}>
          A Ecommerce site for ordering pizzas.
          </p>
          <p ><a className={styles.more} href="https://github.com/Sha7hid/Food-Ordering-App">Learn More</a></p>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col lg={6} sm={12}>
          <Image src={blog} className={styles.project5} />
        </Col>
        <Col lg={6} sm={12}>
          <p className={styles.heading}>BlogIt</p>
          <p className={styles.details}>
            A Blog site with main page containing latest blog and all other blog in the published page
          </p>
          <p ><a className={styles.more} href="https://github.com/Sha7hid/Blog__Frontend">Learn More</a></p>
        </Col>
      </Row>
    </main>
  );
}
