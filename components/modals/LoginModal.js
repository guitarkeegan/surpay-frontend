import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import styles from "../../styles/Navbar.module.css"


function LoginModal() {
    const [show, setShow] = useState(false)
    const [select, setSelect] = useState("")

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        handleClose()

        
    }

    const handleRadio = (selection) => {
        setSelect(selection)
        
    }

    return (
        <>
            <Button className={styles.navButton} onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    Are you a company that will be administering a surveys, or a user taking the
                    survey?
                </Modal.Body>
             
                    <form>
                   
                        <fieldset className={styles.radioButtons}>
                            <div>
                                <label>company</label>
                                <input onClick={() => handleRadio("company")} className="radioButtons" value={"company"} type={"radio"} name={"person"}></input>
                            </div>
                            <div>
                                <label>user</label>
                                <input onClick={() => handleRadio("user")} className="radioButtons" value={"user"} type={"radio"} name={"person"}></input>
                            </div>
                            
                        </fieldset>
                  
                        <br />
                        <div className="d-flex justify-content-center mb-2">
                        <Button className={styles.loginSubmit} onClick={handleSubmit}>Submit</Button>
                        </div>
                    </form>
                
            </Modal>
        </>
    )
}

export default LoginModal
