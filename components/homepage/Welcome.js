import Image from "next/image"
import surveyTaker from "../../public/assets/img/surveyTakerImage.jpg"
import ethereumImg from "../../public/assets/img/ethereumImg.jpg"
import surpayLogoImg from "../../public/assets/img/surpayLogo.png"
import Button from 'react-bootstrap/Button'
import styles from "../../styles/Welcome.module.css"
import LoginModal from "../modals/LoginModal"


export default function Welcome() {
    return (

        <section className={styles.bottomHalf}>
            <div className={styles.welcomeCon}>
                <div className={styles.welcomeSection}>
                    <h1 className={styles.welcomeTitle}>Welcome to Surpay, Take a survey and get paid in crypto</h1>
                </div>

                <section className={styles.topCon}>
                    <div className={styles.firstSectionLeft}>
                        <Image 
                        src={surveyTaker}
                        alt={"survey taker image"}
                        className={styles.surveyTakerImg}>
                        </Image>
                    </div>
                    <div className={styles.firstSectionRight}>
                        <h2 className={styles.firstParagraph}>It is as easy as signing up, choosing a survey, completing it, and getting paid in crypto. Convenience for the company and the user.</h2>
                    </div>
                </section>

                <section className={styles.secondCon}>
                    <div className={styles.secondSectionLeft}>
                    <h3 className={styles.secondParagraph}>Connecting companies straight to the user while maintaining user&apos;s privacy. Users can give companies the information they need, while earning crypto, without sacrificing their privacy, and transacting trustlessly.</h3>
                    </div>
                    <div className={styles.secondSectionRight}>
                        <Image 
                        src={ethereumImg}
                        alt={"ethereum image"}
                        className={styles.surveyTakerImg}>
                        </Image>
                    </div>
                </section>
                <div className={styles.btnDiv}>
                    <LoginModal location={"home"} />
                    </div>

            </div>
            <footer className={styles.footerCon}>
                <div className={styles.footerLogo}>
                     <Image 
                    src={surpayLogoImg}
                    alt={"Surpay Logo"}
                    className={styles.surpayLogoImg}>
                    </Image>
                    </div>
                <div>
                    <h2 className={styles.topFooterChainlink}>Powered By Chainlink</h2>
                 </div>
                <div>
                    <h2 className={styles.middleFooterPolygon}>Powered By Polygon</h2>
                </div>
                <div>
                    <h2 className={styles.bottomFooterText}>2022 Surpay. All Rights Reserved</h2>
                </div>
            </footer>
        </section>


    );
}
    