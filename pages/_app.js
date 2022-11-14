import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
            <MoralisProvider initializeOnMount={false}>
                <NotificationProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </NotificationProvider>
            </MoralisProvider>
    )
}

export default MyApp
