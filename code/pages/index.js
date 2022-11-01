import Head from 'next/head'
import Home from './home'

export default function Index() {
  return (
    <>
      {/* site wide meta data */}
      <Head>
        <title>Honest Towing & Roadside</title>
        <meta name="description" content="We offer the best towing and roadside services in the Twin Cities. Tire Changes, Jumpstarts, Tows, you name it we do it! All at an affordable price!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* home page */}
      <Home />
    </>
  )
}
