import { MetaData, Experience } from "../utils/types";

export const meta: MetaData = {
  title: "Flavien Pensato - Frontend développeur",
  description:
    "Salut, je m'appelle Flavien Pensato. Je suis un développeur passionné et enthousiaste ! J'habite à Lyon et je travaille actuellement en freelance.",
  author: "Flavien Pensato",
  keywords: "Flavien, Pensato, Lyon, React, Nextjs, Meteor, Devfront",
  viewport: "initial-scale=1.0, width=device-width",
};
export const experiences: Experience[] = [
  {
    title: "Aventus",
    subTitle: "Freelance, Javascript, Tsoa, Mongodb, React, Typescript",
    contents: [
      '<a href="https://www.aventus.io" target="_blank" rel="noreferrer" title="Aventus">Aventus</a> est une blockchain basé sur l\'Ethereum.',
      "J'ai travaillé sur une marketplace en marque blanche, qui permet de créer et vendre au enchère des NFT (non-fungible token).",
    ],
    startAt: "2021-07-16",
    endAt: "2021-05-12",
  },
  {
    title: "Unow",
    subTitle: "Salarié, React, Emotion",
    contents: [
      'Unow est une startup parisienne et lyonnaise créée en 2013.C&apos;est un organisme de formation digital spécialisé sur le format <a href="https://fr.wikipedia.org/wiki/SPOC" target="_blank" rel="noreferrer" title="SPOC (Small Private Online Course)">SPOC</a> (Small Private Online Course) et les soft-skills.',
      "Je travaille actuellement en tant que développeur front-end sur un ensemble de projets (plateforme de formation, backoffice, etc.).",
    ],
    startAt: "2019-03-01",
    endAt: "2021-03-12",
  },
  {
    title: "Peaks",
    subTitle: "Salarié, React, Sass",
    contents: [
      '<a href="https://www.peaks.fr" target="_blank" rel="noreferrer" title="Peaks">Peaks</a> est une ESN lyonnaise en plus d&apos;être une agence numérique.',
      'J&apos;ai pu y travailler pendant deux ans. J&apos;étais en mission chez un de leurs prestigieux clients, <a href="https://www.bedrockstreaming.com/" target="_blank" rel="noreferrer" title="Bedrock streaming">M6 Web</a> (bedrock srteaming), en tant que développeur front-end.',
    ],
    startAt: "2017-03-09",
    endAt: "2019-03-09",
  },
  {
    title: "Expert Meteor",
    subTitle: "Freelance, Meteor, Javascript, Mongodb",
    contents: [
      'Pendant ma scolarité, j&apos;ai créé ma micro-entreprise et proposé mon expertise <a href="https://www.meteor.com/" target="_blank" rel="noreferrer" title="Meteor">Meteor</a> à des particuliers et des startups.',
    ],
    startAt: "2013-01-01",
    endAt: "2017-01-01",
  },
  {
    title: "Epitech",
    subTitle: "Étudiant",
    contents: [
      "Bac +5. Expert en Technologies de l’Information. Niveau 1.",
      'En <time dateTime="2016-10-01">2016</time>, j&apos;ai étudié dans l&apos; <a href="https://fr.wikipedia.org/wiki/Universit%C3%A9_Tongji" target="_blank" rel="noreferrer" title="Univeristé de Tongji">Univeristé de Tongji</a>.<br />Cela a été une des meilleures années de ma vie où j&apos;ai pu y découvrir une culture, des gens ainsi qu&apos;un pays magnifique.',
    ],
    startAt: "2012-09-24",
    endAt: "2017-07-01",
  },
];

export const presentationTitle = "Salut,<br />Je m&apos;appelle Flavien&nbsp;Pensato"
export const presentationMessages = "Je suis un développeur passionné et enthousiaste ! J'habite à Lyon et je travaille actuellement en Freelance."
