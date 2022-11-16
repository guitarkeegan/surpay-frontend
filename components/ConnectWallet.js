import { ConnectButton } from "web3uikit"
import styles from "../styles/Navbar.module.css"

export default function ConnectWallet() {
    return (
        <ConnectButton
            moralisAuth={false}
            size={"large"}
            theme="colored"
            color="blue"
            
        />
    )
}
