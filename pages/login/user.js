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
                    key: "USER_LOGIN_ADDRESS",
                    name: "Address",
                    type: "text",
                    validation: {
                        required: true,
                    },
                    value: "",
                },
                {
                    key: "USER_LOGIN_PASSWORD",
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
