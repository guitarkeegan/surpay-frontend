import Link from "next/link"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import LoginModal from "../components/modals/LoginModal"
import styles from "../styles/Navbar.module.css"
import ConnectWallet from "./ConnectWallet"
import Image from "next/image"
import surpayLogoBlueImg from "../public/assets/img/surpayLogoBlue.png"

function MainNav() {
    return (
        <Navbar className={styles.navStyle} expand="lg">
            <Container>
                <Nav className="ms-auto">
                <Navbar.Brand href="#home">
            <Image 
              src={surpayLogoBlueImg}
              width={150}
              height={150}
              className={styles.surpayLogoNav}
              alt={"Surpay Blue Logo"}
            />
            </Navbar.Brand>                   
                    <ConnectWallet />
                    <LoginModal />
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNav

{
    /* <>
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
</> */
}

               
                    // <Image 
                    // src=
                    // alt={"Surpay Blue Logo"}
                    // className={styles.surpayLogoBlueImg}
                    // width={200}
                    // height={200}>
                    // </Image> 