import Image from "next/image"
import surveyTaker from "../../public/assets/img/surveyTakerImage.jpg"
import ethereumImg from "../../public/assets/img/ethereumImg.jpg"
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import styles from "../../styles/Welcome.module.css"


export default function Welcome() {
    return (
        <section>
            <div className={styles.welcomeCon}>
                <div className={styles.welcomeSection}>
                    <h1 className={styles.welcomeTitle}>Welcome to Surpay</h1>
                    <h2 className={styles.welcomeStatement}>Take a survey and get paid in crypto</h2>
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
                        <h2 className={styles.firstParagraph}>lorem ipsum lorem ipsum lore heello jhshsy ksjsus ksushsjs sjsususn snsjsush nsjs sj s</h2>
                    </div>
                    
                </section>

                <section className={styles.secondCon}>
                    <div className={styles.secondSectionLeft}>
                    <h3 className={styles.secondParagraph}>lorem ipsum hello there how  jshshs jsjhs sj sk sk sj sks js s hsjshisj hsbsjsn</h3>
                    </div>
                    <div className={styles.secondSectionRight}>
                        <Image 
                        src={ethereumImg}
                        alt={"ethereum image"}
                        className={styles.surveyTakerImg}>
                        </Image>
                    </div>
                    <div className={styles.btnDiv}>
                    <Button className={styles.getStartedBtn} variant="primary" size="lg">Get Started</Button>
                    </div>
                </section>

            </div>
                <footer className={styles.footerCon}>
                    <div>
                    <h2 className="topFooterText">Surpay</h2>
                    </div>
                    <div>
                    <h2 className="middleFooterPolygon">Powered By Polygon</h2>
                    </div>
                    <div>
                    <h2 className="bottomFooterText">2022 Surpay. All Rights Reserved</h2>
                    </div>
                </footer>

        </section>
    );
  } 
                    // <div className={styles.secondSectionLeft}>
                    // <h3 className={styles.secondParagraph}>lorem ipsum hello there how </h3>
                    // </div>
                    // <div className={styles.firstSectionRight}>
                    //     <h2 className={styles.firstParagraph}>lorem ipsum lorem ipsum lore</h2>
                    // </div>