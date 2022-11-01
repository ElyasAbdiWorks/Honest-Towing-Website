// components
import Layout from '../components/Layout'
// global styles
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
