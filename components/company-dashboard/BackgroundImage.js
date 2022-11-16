import styles from "../../styles/BackgroundImage.module.css"
import Image from "next/image"
import backgroundImage from "../../public/assets/img/SDistDashBkgrnd.png"

export default function BackgroundImage(){

    return(

            <Image 
            src={backgroundImage}
            alt={"techy backgound image"}
            className={styles.companyBackground}>
            </Image>



    )
}