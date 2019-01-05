import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Contacts } from './contacts.component';
import { Title } from './title.component';

export const Layout = ({ children, className }) => (
  <main className={className}>
    <Head>
      <title>Flavien Pensato</title>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
      <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
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
