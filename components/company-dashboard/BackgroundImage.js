import styles from "../../styles/BackgroundImage.module.css"
import Image from "next/image"
import backgroundImage from "/assets/img/SDistDashBkgrnd.png"

export default function BackgroundImage() {
    // const styles = {
    //     p1Mountains: {
    //     zIndex: "-2",
    //     filter: "brightness(110%)",
    //     minHeight: "100%",
    //     minWidth: "1024px",
    //     maxWidth: "1600px",

    //     width: "100%",
    //     height: "auto",
    //     position: "fixed",
    //     top: "0",
    //     left: "0",
    //     }
    // }

    return (
        <div
            style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh",
                top: 0,
                overflow: "hidden",
            }}
        >
            <Image
                src={backgroundImage}
                alt={"Colorful lines over black canvas"}
                layout="fill"
                objectFit="cover"
            ></Image>
        </div>
    )
}
// height={"1920px"}
// witdth={"1080px"}
