import styles from  "../styles/Layout.module.css"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Welcome from "./Welcome"

export default function Layout(){
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Welcome></Welcome>
        </>
    )
}