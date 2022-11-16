import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/homepage/Hero'
import Welcome from '../components//homepage/Welcome'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Surpay</title>
        <meta name="description" content="A Survey site that pays users in crypto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
        <Welcome />
      </div>
  )
}
