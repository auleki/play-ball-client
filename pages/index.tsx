import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SelectGame from "../components/macros/SelectGame"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Lets Ball</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen text-white">
        <SelectGame />
      </main>
    </div>
  )
}

export default Home
