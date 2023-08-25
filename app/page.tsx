import Head from "next/head";
import Heading from "../components/Heading";
import styles from "./page.module.scss";
import Socials from "../components/Socials";
import React from "react";

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/socials');
  return await response.json();
}

const Home = async () => {
  const socials = await getData()
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next JS Application" />
      <Socials socials={socials}/>
    </div>
  );
};

export default Home;