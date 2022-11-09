import {Form} from "web3uikit"

export default function loginCompany() {
    return (
        <Form
            buttonConfig={{
                text: "Login",
                theme: "primary",
            }}
            data={[
                {
                    key: "LOGIN_COMPANY_EMAIL",
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
            title="Login"
        />
    )
}
