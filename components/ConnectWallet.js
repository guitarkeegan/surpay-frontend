import { ConnectButton } from "web3uikit"
import styles from "../styles/Navbar.module.css"

export default function ConnectWallet() {
    return (
        <ConnectButton
            theme="custom"
            moralisAuth={false}
            customize={{
                backgroundColor: "rgb(123, 176, 253)",
                fontSize: "2rem",
                onHover: "darken",
                textColor: "black",
                padding: "5px 40px",
                fontWeight: "400",
                borderRadium: "40px"
            }}
            style={{
                backgroundColor: "rgb(123, 176, 253)",
                fontSize: "2rem",
                onHover: "darken",
                textColor: "black",
                padding: "5px 40px",
                fontWeight: "400",
                borderRadium: "40px"
            }}
        />
    )
}
