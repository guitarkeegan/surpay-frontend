import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { SWRConfig } from "swr"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import SSRProvider from "react-bootstrap/SSRProvider"

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
                    <SSRProvider>
                        <Component {...pageProps} />
                    </SSRProvider>
                </Layout>
            </NotificationProvider>
        </MoralisProvider>
        // </SWRConfig>
    )
}

export default MyApp
