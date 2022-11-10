import {Form} from "web3uikit"

export default function signUpUser() {
    return (
        <Form
            buttonConfig={{
                text: "Sign-Up",
                theme: "primary",
            }}
            data={[
                {
                    key: "SIGN_UP_ADDRESS",
                    name: "Wallet Address",
                    type: "text",
                    validation: {
                        required: true,
                    },
                    value: "",
                },
                {
                    key: "LOGIN_PASSWORD",
                    name: "Password",
                    type: "password",
                    validation: {
                        required: true,
                    },
                    value: "",
                },
            ]}
            onSubmit={function noRefCheck() {}}
            title="User Sign-Up"
        />
    )
}
