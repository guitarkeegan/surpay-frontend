import Image from "next/image"
// import firstWelcome from "../../assets/img/firstWelcomeImage.jpg"
// import secondWelcome from "../../assets/img/secondWelcomeImage.jpg"
import Button from 'react-bootstrap/Button'
import styles from "../../styles/Welcome.module.css"

export default function Welcome() {
    return (
        <section>
            <h1 className={styles.welcomeTitle}>Welcome to Surpay</h1>
            <h2 className="welcome-statement">Take a survey and get paid in crypto</h2>

            <div className="first-section">
               
                <p1 className="first-paragraph">lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum</p1>
            </div>

            <div className="second-section">
                <p1 className="second-paragraph">lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum</p1>
               

                <Button className="get-started-btn" variant="primary" size="lg">Get Started</Button>
            </div>

            <footer>
                <h2 className="footer">Surpay</h2>

            </footer>

        </section>
    );
  } 