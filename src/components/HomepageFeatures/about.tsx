  import clsx from "clsx";
  import React from "react";
  import styles from './styles.module.css';
  
  interface Callout {
    title: string;
    text: string;
    link: string;
  }
  
  const callouts: Callout[] = [
    {
      title: "Never Rebuilds Same Code Twice",
      text: "Lerna won't run the tasks it executed before, and instead will restore the files and the terminal output from its cache.",
      link: "/docs/features/cache-tasks",
    },
    {
      title: "Distributed Cache",
      text: "Computation cache can be shared between developers or CI/CD machines, drastically reducing average CI times.",
      link: "/docs/features/cache-tasks#distributed-computation-caching",
    },
    {
      title: "Target Dependencies",
      text: "Lerna lets you specify how different targets (npm scripts) depend on each other.",
      link: "/docs/features/run-tasks#target-dependencies-aka-task-pipelines",
    },
  ];
  
  function Callout(props: Callout): JSX.Element {
    return (
      <div className={clsx("margin-top--xl card shadow--lw", styles.callout)}>
        <div className="card__header">
          <h3 className={styles.callout__title}>
            {props.title}
          </h3>
        </div>
        <div className="card__body">
          <p>
            <a href={props.link} className={styles.callout__link}>
              <span className="link--inset" aria-hidden="true"></span>
              {props.text}
            </a>
          </p>
        </div>
        <div className={styles.callout__bottom} />
      </div>
    );
  }
  
  export default function AboutLerna(): JSX.Element {
    return (
      <section className="padding-vert--xl container">
        <div className="row">
          {callouts.map((c) => (
            <div key={c.title} className="col col--4">
              <Callout title={c.title} text={c.text} link={c.link} icon={c.icon} />
            </div>
          ))}
        </div>
      </section>
    );
  }