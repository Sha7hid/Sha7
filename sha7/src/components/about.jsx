import { Row, Col } from "react-bootstrap";
import styles from "../styles/about.module.css";
import Image from "next/image";
import sha from "../../public/sha.jpeg";
import san from '../../public/sanity.png';
import mongo from '../../public/mongo.png';
import re from '../../public/react.png';
import js from '../../public/js.png';
export default function About() {
  return (
    <main className={styles.main} id="about">
      <Row className={styles.row}>
        <Col className={styles.first} lg={7} sm={12}>
          <p>About Me</p>
          <Image src={sha} />
          <span>I'M SHAHID , FINAL YEAR STUDENT AT SSC AREEKODE.</span>
          <span>I HAVE DONE SEVERAL PROJECTS IN MERN STACK.</span>
          <span>
            LOOKING FOR FREELANCE PROJECTS OR INTERNSHIPS IN THE FIELD.
          </span>
          <span>
            I HAVE A BETTER UNDERSTANDING OF NEXT JS , MONGODB AND NODE JS.
          </span>
          <span>
            I HAVE USED CONTENT PLATFORM LIKE SANITY AND HEROKU ALTERNATIVE LIKE
            RAILWAY IN MY PROJECTS.
          </span>
        </Col>
        <Col className={styles.second} lg={5} sm={12}>
          <Image src={san} className={styles.san} alt=""/>
          <Image src={mongo} className={styles.mongo} alt=""/>
          <Image src={re} className={styles.re} alt=""/>
          <Image src={js} className={styles.js} alt=""/>
        </Col>
      </Row>
    </main>
  );
}
