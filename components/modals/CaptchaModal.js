import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import axios from "axios"
import Loader from "../loader/Loader"

// import captcha from "/assets/img/recaptchaExample.png"
import { useRouter } from "next/router"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { ModalBody } from "react-bootstrap"

export default function CaptchaCheck({ user, selectedSurveyId }) {
    
    const [isBtnDisabled, setBtnDisabled] = useState(false)
    const [response, setResponse] = useState(null)
    const { executeRecaptcha } = useGoogleReCaptcha()

    const router = useRouter()

    const handleSubmit = async () => {
        setBtnDisabled(true)

        if (!executeRecaptcha) {
            return
        }

        try {
            const token = await executeRecaptcha()
            if (!token) {
                setResponse({ message: "Failed to Send!!!", status: "Failed" })
                return
            }

            const result = await axios.post("/api/captcha", {
                token,
            })
            console.log(result)

            if (result.data) {
                setResponse({
                    message: result.data.message,
                    status: result.data.status,
                })
            }
            setBtnDisabled(false)

            router.push(`/survey/take/${selectedSurveyId}`)
        } catch (error) {
            console.log(error)
            setResponse({ message: "Failed to Send!!!", status: "Failed" })
            setBtnDisabled(false)
        }
    }

    return (
        <>
            <p>{response?.status === "Failed" && response?.message}</p>

            <Button disabled={isBtnDisabled} variant="primary" onClick={handleSubmit}>
                <span>Submit{isBtnDisabled && "ting"}</span>
                {isBtnDisabled && <Loader />}
            </Button>
        </>
    )
}
