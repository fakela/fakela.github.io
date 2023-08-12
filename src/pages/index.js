import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="">
            Helping you go from clueless to confident through meticulously crafted documentation.
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="text--center padding-horiz--md">
          <img
            src="https://i.pinimg.com/originals/ec/96/74/ec9674094b3d2232d1064167953d653c.png"
            alt="Image 1"
            style={{ maxWidth: '300px', margin: '0 auto' }}
          />
          <img
            src="https://tyk.io/wp-content/uploads/2017/06/documentation_matrix.jpg"
            alt="Image 2"
            style={{ maxWidth: '300px', margin: '20px auto' }}
          />
        </div>
      </main>
    </Layout>
  );
}
