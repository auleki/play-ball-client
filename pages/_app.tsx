import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Layout from '../layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
