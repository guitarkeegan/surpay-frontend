import Image from "next/image"
import hero from "../../assets/img/heroImage.jpg"
import styles from "../../styles/Hero.module.css"


export default function Hero() {
    return (

            <Image 
            src={hero}
            alt={"dark crypto backgound image"}
            className={styles.heroImageDiv}>
            </Image>

    );
  }
  

