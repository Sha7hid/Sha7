import styles from '../styles/works.module.css'
import fudo from '../../public/fudo.png'
import netflix from '../../public/netflix.png'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
export default function Works() {
    return (
        <main className={styles.main} id='works'>
            <Row className={styles.row}>
                <Col lg={6} sm={12}>
<Image src={fudo} className={styles.project}/>
                </Col>
                <Col lg={6} sm={12}>
                <p className={styles.heading}>Fudo</p>
                <p className={styles.details}>A Ecommerce site for ordering pizzas.</p>
                <p className={styles.more}>Learn More</p>
                </Col>
            </Row>
            <Row className={styles.row}>
                <Col lg={6} sm={12}>
<Image src={netflix} className={styles.project2}/>
                </Col>
                <Col lg={6} sm={12}>
                <p className={styles.heading}>Netflix Clone</p>
                <p className={styles.details}>A Netflix web app with trailers when you click on posters</p>
                <p className={styles.more}>Learn More</p>
                </Col>
            </Row>
        </main>
    );
}