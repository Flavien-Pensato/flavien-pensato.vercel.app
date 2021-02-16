import React from "react";

import Layout from "../layouts";

import styles from "./index.module.css";

const Home = () => (
  <Layout
    meta={{ title: "Flavien Pensato - Frontend développeur", description: "" }}
  >
    <section className={styles.presentation}>
      <h1>
        Salut,
        <br />
        Je m&apos;appelle Flavien&nbsp;Pensato
      </h1>
      <p>
        Je suis un développeur passioné et enthousiaste !
        <br />
        J&apos;habite à Lyon et je travaille actuellement chez Unow.
      </p>
    </section>
    <div className={styles["separator-wrapper"]}>
      <hr className={styles.separator} />
    </div>
    <section className={styles.chronology}>
      <h2>Chronologie</h2>
      <ol>
        <li>
          <h3>Unow</h3>
          <p>
            Unow est une startup Parisienne et Lyonnaise créée en 2013.
            C&apos;est un organisme de formation digital et spécialisé sur le
            format{" "}
            <a
              href="https://fr.wikipedia.org/wiki/SPOC"
              target="_blank"
              rel="noreferrer"
              title="SPOC (Small Private Online Course)"
            >
              SPOC
            </a>{" "}
            (Small Private Online Course) et les soft-skills.
          </p>
          <p>
            J&apos;y travaille actuellement en tant que développeur front-end
            sur un ensemble de projet (plateforme de formation, backoffice,
            etc.).
          </p>
          <div className={styles.startAt}>
            Depuis <time dateTime="2019-03-01">2019</time>
          </div>
        </li>
        <li>
          <h3>Peaks</h3>
          <p>
            <a
              href="https://www.peaks.fr"
              target="_blank"
              rel="noreferrer"
              title="Peaks"
            >
              Peaks
            </a>{" "}
            est une ESN Lyonnaise en plus d&apos;être une agence numérique.
          </p>
          <p>
            J&apos;ai pu y travailler pendant deux ans. J&apos;étais en mission
            chez un de leurs prestigieux clients,{" "}
            <a
              href="https://www.bedrockstreaming.com/"
              target="_blank"
              rel="noreferrer"
              title="Bedrock streaming"
            >
              M6 Web
            </a>{" "}
            (bedrock srteaming), en tant que développeur front-end.
          </p>
          <div className={styles.startAt}>
            De <time dateTime="2017-03-9">2017</time> à{" "}
            <time dateTime="2019-03-09">2019</time>
          </div>
        </li>
        <li>
          <h3>Freelance</h3>
          <p>
            J&apos;ai pu, pendant ma scolarité, créer ma micro-entreprise et
            proposer mon expertise{" "}
            <a
              href="https://www.meteor.com/"
              target="_blank"
              rel="noreferrer"
              title="Meteor"
            >
              Meteor
            </a>{" "}
            à des particuliers et des startups.
          </p>
          <div className={styles.startAt}>
            De <time dateTime="2013-01-01">2013</time> à{" "}
            <time dateTime="2017-01-01">2017</time>
          </div>
        </li>
        <li>
          <h3>Epitech</h3>
          <p>Bac +5. Expert en Technologies de l’Information. Niveau 1.</p>
          <p>
            En <time dateTime="2016-10-01">2016</time>, j&apos;ai étudier dans
            l&apos;
            <a
              href="https://fr.wikipedia.org/wiki/Universit%C3%A9_Tongji"
              target="_blank"
              rel="noreferrer"
              title="Meteor"
            >
              Univeristé de Tongji
            </a>
            .
            <br />
            Cela a été une des meilleurs années de ma vie ou j&apos;ai pu y
            découvrir une culture, des gens ainsi qu&apos;un pays magnifique.
          </p>
          <div className={styles.startAt}>
            De <time dateTime="2012-01-01">2012</time> à{" "}
            <time dateTime="2017-01-01">2017</time>
          </div>
        </li>
      </ol>
    </section>
  </Layout>
);

export default Home;
