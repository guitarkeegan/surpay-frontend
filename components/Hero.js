import styles from "../styles/Hero.module.css"

function Hero() {
    return (
        <section>
            <h1 className={styles.test}>Welcome to Surpay</h1>
            <div className="container">
                <div className={styles.heroImageDiv}></div>
            </div>
        </section>
    );
  }
  
  export default Hero;