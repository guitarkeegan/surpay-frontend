import {Form} from "web3uikit"

export default function signUpCompany() {
    
    return (
        <Form
            buttonConfig={{
                text: "Sign-Up",
                theme: "primary",
            }}
            data={[
                {
                    key: "SIGN_UP_COMPANY_NAME",
                    name: "Company Name",
                    type: "text",
                    validation: {
                        required: true,
                    },
                    value: "",
                },
                {
                    key: "LOGIN_EMAIL",
                    name: "Email",
                    type: "email",
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
            title="Sign-up"
        />
    )
}
