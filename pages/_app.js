import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import '../styles/globals.css'
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react"

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </NotificationProvider>
    </MoralisProvider>
    </SessionProvider>
  )
}

export default MyApp
