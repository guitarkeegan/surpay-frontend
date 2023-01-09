import Link from "next/link"
import Container from "react-bootstrap/Container"
import { useEffect, useState } from "react"
import LoginModal from "../components/modals/LoginModal"
import styles from "../styles/Navbar.module.css"
import Button from "react-bootstrap/Button"
import ConnectWallet from "./ConnectWallet"
import Image from "next/image"
// import surpayLogoBlueImg from "/surpayLogoBlue.png"
import { useRouter } from "next/router"

function MainNav() {
    const router = useRouter()

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    async function getUser() {
        try {
            const res = await fetch("/api/account/user")
            const userData = await res.json()
            if (userData.id === undefined) {
                console.log(false)
                return false
            } else {
                return true
            }
        } catch (error) {
            console.log("something wrong with getUser")
            console.log(error)
        }
    }

    const updateUi = (bool) => {
        console.log(bool)
        setIsLoggedIn(bool)
        if (bool){
            console.log("is logged in")
            localStorage.setItem("loggedIn", "true")
        } else {
            console.log("remove logged in")
            localStorage.removeItem("loggedIn")
        }
    }

    const loggedIn = () =>{
        if (localStorage.getItem("loggedIn")){
            setIsLoggedIn(true)
        }
    }

    useEffect(() => {
        loggedIn()
    }, [])

    const handleLogout = async () => {
        try {
            await fetch("/api/logout")
            setIsLoggedIn(false)
            localStorage.removeItem("loggedIn")
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        
            <nav className={styles.navStyle}>
                <div  className={styles.logo}>
                    <img src="/assets/img/surpayLogoBlue.png" alt="Surpay Logo" height="200px" width="200px" />
                </div>
                <div className={styles.navBtns}>
                    <div className={styles.walletBtn}>
                        <ConnectWallet />
                    </div>
                    <div className={styles.logoutBtn}>
                        {isLoggedIn ? (
                            <button className={styles.navLinks} onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <LoginModal updateUi={updateUi} location={"nav"} />
                        )}
                    </div>
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
