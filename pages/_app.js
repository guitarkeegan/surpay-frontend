import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import '../styles/globals.css'
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </NotificationProvider>
    </MoralisProvider>
  )
}

export default MyApp
