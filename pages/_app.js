import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { SWRConfig } from "swr"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import SSRProvider from "react-bootstrap/SSRProvider"
import "../styles/globals.css"
import {AppWrapper} from "../lib/loginContext"

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
        // </SWRConfig>
    )
}

export default MyApp
