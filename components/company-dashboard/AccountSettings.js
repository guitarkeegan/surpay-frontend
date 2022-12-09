import styles from "../../styles/DistributorDashboard.module.css"
import { v4 as uuid4 } from "uuid"
import {useState} from "react"

// form for user to update their account information
export default function UserAccount() {

    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("")

    const handleUpdateAccount = async (event) => {
        event.preventDefault();
        if (!password || !passwordAgain){
            setSuccessMessage("");
            setErrorMessage("Feilds cannot be empty.");
        } else if (password !== passwordAgain){
            setSuccessMessage("");
            setErrorMessage("Password fields do not match.");
        } else {
            setErrorMessage("");
            try {
                const res = await fetch("/api/update/distributor", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({password: passwordAgain})
                });
                const {message} = await res.json()
                if (message === "Password not long enough"){
                    setErrorMessage(message);
                    setSuccessMessage("")
                }
                if (res.status === 200){
                    setErrorMessage("")
                    setSuccessMessage("Password has been changed!")
                }
                
                console.log(message)
            } catch (err){
                
                console.log(err);
            }
        }
    }
    // TODO: screen responsive to 350. Need to reside Update Account Button size
    return (
        <form className={styles.formStyle}>
        {errorMessage &&
        <p className={styles.errorText}>{errorMessage}</p>
        }
        {successMessage && 
            <p className={styles.successText}>{successMessage}</p>
        }
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className={styles.inputStyle} type="password" name="password" id=""></input>
            <label>Password Again</label>
            <input onChange={(e) => setPasswordAgain(e.target.value)} className={styles.inputStyle} type="password" name="passwordAgain" id=""></input>
            <button onClick={handleUpdateAccount} className={styles.accountSubmit}>Update Changes</button>
            <button className={styles.deleteBtn}>Delete Account</button>
        </form>
    )
}
