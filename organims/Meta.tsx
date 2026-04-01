import Head from "next/head";

import { MetaData } from "../utils";

const Meta = ({
  title,
  viewport = "initial-scale=1.0, width=device-width",
  description,
  author = "Flavien Pensato",
  keywords = "Flavien, Pensato, Lyon, React, Nextjs, Meteor, Devfront",
}: MetaData) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content={viewport} />
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta name="keywords" content={keywords} />
  </Head>
);

export default Meta;
