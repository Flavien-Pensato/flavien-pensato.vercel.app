import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Contacts } from './contacts.component';
import { Title } from './title.component';

export const Layout = ({ children, className }) => (
  <main className={className}>
    <Head>
      <title>Flavien Pensato</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image" content="/static/favicons/og-image.jpg" />
      <meta property="og:image:height" content="209" />
      <meta property="og:image:width" content="400" />
      <meta property="og:title" content="An awesome page" />
      <meta property="og:description" content="Everything you need to know about the topic you are looking for" />
      <meta property="og:url" content="https://flavien-pensato.github.io/" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#000000" />
    </Head>

    <Title />
    {React.Children.only(children)}
    <Contacts />
  </main>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};
