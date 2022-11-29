import styles from "../../styles/UserDashboard.module.css"
import { v4 as uuid4 } from "uuid"

export default function UserAccount() {
    return (
        <form className={styles.formStyle}>
            <label>Email</label>
            <input className={styles.inputStyle} type="email" name="" id=""></input>
            <label>Password</label>
            <input className={styles.inputStyle} type="password" name="" id=""></input>
            <label>Wallet</label>
            <input className={styles.inputStyle} type="text" name="" id=""></input>
            <button className={styles.accountSubmit}>Update Changes</button>
            <button className={styles.deleteBtn}>Delete Account</button>
        </form>
    )
}
