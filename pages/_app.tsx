import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { AnimatePresence } from "framer-motion"
import { Router } from 'next/router'
import GameContextProvider from '../contexts/GameContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])
  return (
    <Fragment>
      <GameContextProvider>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </GameContextProvider>
    </Fragment>
  )
}

export default MyApp
