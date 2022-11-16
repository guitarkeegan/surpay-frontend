import styles from "../../styles/BackgroundImage.module.css"
import Image from "next/image"
import backgroundImage from "../../assets/img/tech-background.jpg"

export default function BackgroundImage(){

    return(

            <Image 
            src={backgroundImage}
            alt={"techy backgound image"}
            styles={styles.companyBackground}>
            </Image>



    )
}