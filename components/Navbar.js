import Link from "next/link"
import Container from "react-bootstrap/Container"
import { useEffect, useState } from "react"
import LoginModal from "../components/modals/LoginModal"
import styles from "../styles/Navbar.module.css"
import Button from "react-bootstrap/Button"
import ConnectWallet from "./ConnectWallet"
import Image from "next/image"
import surpayLogoBlueImg from "../public/assets/img/surpayLogoBlue.png"
import { useRouter } from "next/router"

function MainNav() {
    const router = useRouter()

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    async function getUser() {
        try {
            const res = await fetch("/api/account/user")
            const userData = await res.json()
            if (userData.id === undefined) {
                setIsLoggedIn(false)
            } else {
                setIsLoggedIn(true)
                console.log(userData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleLogout = async () => {
        try {
            await fetch("/api/logout")
            setIsLoggedIn(false)
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className={styles.navStyle} expand="lg">
            <Container>
                <Link href={"/"}>
                    <Image
                        src={surpayLogoBlueImg}
                        width={150}
                        height={150}
                        className={styles.surpayLogoNav}
                        alt={"Surpay Blue Logo"}
                    />
                </Link>
            </Container>

            <div className={"twoNavButtons"}>
                <ConnectWallet />
                <Container>
                    {isLoggedIn ? (
                        <Button className={styles.navButton} onClick={handleLogout}>
                            Logout
                        </Button>
                    ) : (
                        <LoginModal updateUi={setIsLoggedIn} location={"nav"} />
                    )}
                </Container>
            </div>
        </nav>
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
