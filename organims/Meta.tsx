import React from "react";
import Head from "next/head";

import { MetaData } from "../utils";

const Meta = ({ title, viewport, description, author, keywords }: MetaData) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content={viewport} />
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta name="keywords" content={keywords} />
  </Head>
);

Meta.defaultProps = {
  author: "Flavien Pensato",
  keywords: "Flavien, Pensato, Lyon, React, Nextjs, Meteor, Devfront",
  viewport: "initial-scale=1.0, width=device-width",
};

export default Meta;
