import { Form } from 'react-bootstrap';
import styles from '../styles/contact.module.css'
export default function Contact() {
    return (
       <main className={styles.main} id='contact'>
        <p className={styles.heading}>Connect with me or we can grab a coffee</p>
        <Form className={styles.form}>
            <div className={styles.item}>
            <label className={styles.label}>Name </label>
        <input className={styles.input} type='text'/>
            </div>
            <div className={styles.item}>
        <label className={styles.label}>Email  </label>
        <input className={styles.input} type='email'/>
        </div>
        <div className={styles.item2}>
        <label className={styles.label}>Message</label>
        <textarea className={styles.input} cols={23} rows={3}/>
        </div>
        <div className={styles.item}>
        <button type='submit' className={styles.button}>Submit</button>
        </div>
        </Form>
       </main>
    );
}