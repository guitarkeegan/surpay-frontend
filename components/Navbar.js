import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginModal from './LoginModal';
import styles from '../styles/Navbar.module.css'

function MainNav() {

  return (
        <Navbar className={styles.navStyle} expand="lg">
          <Container>
            <Navbar.Brand href="#home">Surpay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LoginModal />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default MainNav;

{/* <>
<div>
  <ul className='' >
    <li><Link href="/">Home</Link></li>
    <li><Link href="/sign-up/company">Company Sign-up</Link></li>
    <li><Link href="/login/company">Company Login</Link></li>
    <li><Link href="/sign-up/user">User Sign-up</Link></li>
    <li><Link href="/login/user">User Login</Link></li>
    <li><Link href="/survey/create">Create Survey</Link></li>
    <li><Link href="/survey/take">Take Survey</Link></li>
  </ul>
</div>
<div>
    {children}
</div>
</> */}