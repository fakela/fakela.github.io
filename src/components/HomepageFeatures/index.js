import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Work Experience',
    link: '/docs/new',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        For information about me and a link to my downloadable resume.
      </>
    ),
  },
  {
    title: 'Writing Samples',
    link: '/docs/category/writing-samples',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        For examples of my work.
      </>
    ),
  },
  {
    title: 'Articles Written',
    link: 'https://docs.google.com/spreadsheets/d/1bgPWg-X8ON2ugT5Eg2DR4boXtrEIvMxsSNq3uuaJb1U/edit#gid=0',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        List of articles written
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          {link ? (
            <a href={link}>{title}</a>
          ) : (
            title
          )}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
