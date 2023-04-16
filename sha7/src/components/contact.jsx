import { Col, Form, Row } from 'react-bootstrap';
import styles from '../styles/contact.module.css'
import cof from '../../public/coffee.png'
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
    
        const ref = useRef();
      const [success, setSuccess] = useState(null);
      const handleSubmit =e=>{
        e.preventDefault();
        emailjs.sendForm('service_owan1js', 'template_3ae6sji', ref.current, 'nwtMjQlDZi-8V2NNL')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
    }
    return (
       <main className={styles.main} id='contact'>
          <p className={styles.heading}>Connect with me or we can grab a coffee</p>
        <Row className={styles.row}>
            <Col lg={6} sm={12}>
          
        <Form className={styles.form} ref={ref}onSubmit={handleSubmit}>
            <div className={styles.item}>
            <label className={styles.label}>Name </label>
        <input name="name" className={styles.input} type='text'/>
            </div>
            <div className={styles.item}>
        <label className={styles.label}>Email  </label>
        <input className={styles.input} name="email" type='email'/>
        </div>
        <div className={styles.item2}>
        <label className={styles.label}>Message</label>
        <textarea type='text' name="message" className={styles.input} cols={23} rows={3}/>
        </div>
        <div className={styles.item}>
        <button type="submit"  className={styles.button}>Submit</button>
        
        </div>
        </Form>
        {success && <p className={styles.success}>Your message has been sent. I'll get back to you soon</p>}
            </Col>
            <Col lg={6} sm={12}>
            <Image src={cof} className={styles.cof}/>
            </Col>
       

        </Row>
       <p className={styles.copy}>© shakp2003@gmail.com</p>
       </main>

    );
}