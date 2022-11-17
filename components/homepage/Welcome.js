import Image from "next/image"
import surveyTaker from "../../public/assets/img/surveyTakerImage.jpg"
import ethereumImg from "../../public/assets/img/ethereumImg.jpg"
import Button from 'react-bootstrap/Button'
import styles from "../../styles/Welcome.module.css"

export default function Welcome() {
    return (
        <sectiion>
            <body className={styles.welcomeContainer}>
                <div className={styles.welcomeSection}>
                    <h1 className={styles.welcomeTitle}>Welcome to Surpay</h1>
                    <h2 className={styles.welcomeStatement}>Take a survey and get paid in crypto</h2>
                </div>
                <section className={styles.topContainer}>
                    <div className={styles.firstSectionLeft}>
                        <Image 
                        src={surveyTaker}
                        alt={"survey taker image"}
                        className={styles.surveyTakerImg}>
                        </Image>
                    </div>
                    <div className={styles.firstSectionRight}>
                        <h2 className={styles.firstParagraph}>lorem ipsum lorem ipsum lore</h2>
                    </div>
                    
                </section>

                <section className={styles.secondContainer}>
                    <div className={styles.secondSectionLeft}>
                    <h3 className={styles.secondParagraph}>lorem ipsum hello there how </h3>
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

                
            </body>
                <footer className={styles.footer}>
                    <h2 className="footerText">Surpay</h2>
                </footer>

        </sectiion>
    );
  } 
                    // <div className={styles.secondSectionLeft}>
                    // <h3 className={styles.secondParagraph}>lorem ipsum hello there how </h3>
                    // </div>
                    // <div className={styles.firstSectionRight}>
                    //     <h2 className={styles.firstParagraph}>lorem ipsum lorem ipsum lore</h2>
                    // </div>