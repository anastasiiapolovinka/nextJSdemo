'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import styles from "./not-found.module.scss"
import Heading from "../components/Heading";
import Head from "next/head";


const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  } , [router])

return (
    <div className={styles.wrapper}>
      <div>
        <Head>
          <title>Error</title>
        </Head>
        <Heading text="404"/>
        <Heading tag="h2" text="Something went wrong..."/>
      </div>
    </div>
    )
};
  
  export default NotFound;