import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/homepage/Hero"
import Welcome from "../components/homepage/Welcome"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Surpay</title>
                <meta name="description" content="A Survey site that pays users in crypto" />

                <link rel="icon" href="/favicon.ico" />
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');
                </style>
            </Head>
            <div style={{
                zIndex: 0,
                position: "absolute",
                width: "100vw",
                height: "auto",
                minHeight: "600px",
                top: 0,
                overflow: "hidden",
                boxShadow: "0 7px 7px gray",
            }}
        >
        <Hero />
            </div>
            <Welcome />
        </div>
    )
}
