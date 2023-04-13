import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem } from 'react-bootstrap';
import Image from 'next/image';
import code from '../../public/giphy.gif'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet"/>
      </Head>
      
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container >
        <Navbar.Brand href="#home"><span className={styles.navbrand}>Sha7</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mx-auto'>
            <NavItem className={styles.nav}>Home</NavItem>
            <NavItem className={styles.nav}>About</NavItem>
            <NavItem className={styles.nav}>Works</NavItem>
            <NavItem className={styles.nav}>Contact</NavItem>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <main className={styles.main}>
     
<div className={styles.first}>
  <p>Iam a <span>Mern Stack</span><br/>
  <span>Developer</span>
  </p>
</div>
<div className={styles.second}>
  <Image src={code} width={450}/>
</div>
<div className={styles.third}>
  Icons
</div>

      </main>
    </>
  )
}
