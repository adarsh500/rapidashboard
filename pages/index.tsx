import React from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    //this is the home page
    <div className={styles.container}>
      <h1 style={{
        "textAlign": "center",
        "padding": "30px",
      }}>Home</h1>
    </div>
  );
}

export default Home
