import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, NavItem, Row } from 'react-bootstrap';
import Image from 'next/image';
import code from '../../public/giphy.gif'
import github from '../../public/github.png'
import linkd from '../../public/linkedin.png'
import twit from '../../public/twitter.png'
import email from '../../public/email.png'
import down from '../../public/down.png'
import About from '@/components/about';
import Link from 'next/link';
import Works from '@/components/works'
import Contact from '@/components/contact';
export default function Home() {
  return (
    <>
      <Head>
        <title>Sha7 Developer</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/s.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet"/> 

      </Head>
      
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container >
        <Navbar.Brand href="#home"><span className={styles.navbrand}>Sha7</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mx-auto'>
            <NavItem className={styles.nav}><Link className={styles.nav} href={'/'}>Home</Link></NavItem>
            <NavItem className={styles.nav}><Link className={styles.nav} href={'#about'}>About</Link></NavItem>
            <NavItem className={styles.nav}><Link className={styles.nav} href={'#works'}>Works</Link></NavItem>
            <NavItem className={styles.nav}><Link className={styles.nav} href={'#contact'}>Contact</Link></NavItem>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <main className={styles.main}>
     <Row>
      <Col className={styles.first} lg={6} md={7} sm={12}>
     
  <p>Iam a <span className={styles.changetext}></span><br/>
  <span>Developer</span>
  </p>
  <a href='https://drive.google.com/file/d/1o44f1CebTfJ3xs4QEKZ-xc-smpZifWJX/view?usp=sharing'><button className={styles.button}>Resume   <Image src={down} className={styles.down}/></button></a>
  
      </Col>
<Col className={styles.second} lg={4} md={5} sm={12}>

  <Image src={code} className={styles.code}/>

</Col>
<Col className={styles.third} lg={2} md={12} sm={12}>

  <a href='https://github.com/Sha7hid'> <Image src={github} className={styles.git} /></a>
 <a href='https://www.linkedin.com/in/shahid-k-p-a9b488227/'><Image src={linkd} className={styles.linkd}/></a> 
 <a href='https://twitter.com/sha7hid'><Image src={twit} className={styles.twit}/></a> 
<a href='mailto:shakp2003@gmail.com'><Image src={email} className={styles.email} /></a>  

</Col>

</Row>
      </main>
      <About/>
      <Works/>
      <Contact/>
    </>
  )
}
