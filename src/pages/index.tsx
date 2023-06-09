import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/modules/Home.module.scss'
import IlustrationImage from '../../public/Ilustration.png'
import Logo from '../../public/Logo.svg'
import { SignWithGoogle } from '@/components/SignWithGoogle'
import { SignInForm } from '@/components/SignInForm'


export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <main className={styles.grid}>
        <div className={styles.ilustration} >
          <Image alt='ilustration' src={IlustrationImage} width={931} height={1080} />
        </div>
        <div className={styles.content}>
          <Image width={50} height={50} alt="Logo" src={Logo} />
          <span className={styles.large_margin} >
            <h1 className={styles.title}>Login to your Account</h1>
            <p className={styles.subtitle}>See what is going on with your business</p>
          </span>
          <SignWithGoogle />
          <span className={`${styles.center_row}  ${styles.large_margin}`} >
            <p className={styles.secondary_text}>------------- or Sign in with Email ------------- </p>
          </span>
          <SignInForm />
          <span className={styles.center_row}>
            <p>Not Registered Yet? <a href="http://">Create an Account</a> </p>
          </span>

        </div>
      </main>
    </>
  )
}
