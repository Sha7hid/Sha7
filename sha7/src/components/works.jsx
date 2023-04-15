import styles from '../styles/works.module.css'
import fudo from '../../public/fudo.png'
import netflix from '../../public/netflix.png'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
export default function Works() {
    return (
        <main className={styles.main}>
            <Row className={styles.row}>
                <Col>
<Image src={fudo}/>
                </Col>
                <Col>
                <p>A Ecommerce site for ordering pizzas.</p>
                <p>Learn More</p>
                </Col>
            </Row>
            <Row>
                <Col>
<Image src={netflix}/>
                </Col>
                <Col>
                <p>A Netflix web app with trailers when you click on posters</p>
                <p>Learn More</p>
                </Col>
            </Row>
        </main>
    );
}