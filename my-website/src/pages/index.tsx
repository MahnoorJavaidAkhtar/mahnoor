import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  return (
    <Layout>
      <header className={styles.heroSection}>
        <div className={styles.heroInner}>

          {/* LEFT SIDE TEXT */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Physical AI & Humanoid Robotics Academy</h1>
            <p className={styles.heroSubtitle}>
              Master the future of AI-powered robotics with hands-on learning
            </p>

           <Link className={styles.readButton} to="/docs/intro
">
  Read Book
</Link>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className={styles.heroImageWrapper}>
            <img
              src="/img/humanoid.png"
              alt="Humanoid Robot"
              className={styles.heroImage}
            />
          </div>

        </div>
      </header>

      {/* FEATURES SECTION BELOW HERO */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}


