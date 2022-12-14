import Image from "next/image"
import hero from "../../public/assets/img/heroImage.jpg"
import styles from "../../styles/Hero.module.css"


export default function Hero() {
    return (
            <Image
                src={hero}
                alt={"Dark crypto background image"}
                layout="fill"
                objectFit="cover"
            ></Image>
    )

            {/* <Image 
            src={hero}
            alt={"dark crypto backgound image"}
            className={styles.heroImageDiv}>
            </Image> */}

    ;
  }
  

