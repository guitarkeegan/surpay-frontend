import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { SWRConfig } from "swr"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import SSRProvider from "react-bootstrap/SSRProvider"
import "../styles/globals.css"
import {AppWrapper} from "../lib/loginContext"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }) {
    return (
        // <SWRConfig
        //     value={{
        //         fetcher: fetchJson,
        //         onError: (err) => {
        //             console.error(err)
        //         },
        //     }}
        // >
        <GoogleReCaptchaProvider
      reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: "body", // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}>
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Layout>
                <AppWrapper>
                    <SSRProvider>
                        <Component {...pageProps} />
                    </SSRProvider>
                    </AppWrapper>
                </Layout>
            </NotificationProvider>
        </MoralisProvider>
        </GoogleReCaptchaProvider>
        // </SWRConfig>
    )
}

export default MyApp
