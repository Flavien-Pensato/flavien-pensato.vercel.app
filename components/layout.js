import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Contacts } from './contacts.component';
import { Title } from './title.component';

export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState(({ mounted }) => ({ mounted: !mounted }));
  }

  render() {
    const { children, className } = this.props;
    const { mounted } = this.state;

    return (
      <main className={className}>
        <Head>
          <title>Flavien Pensato</title>
          {mounted
            ? <link rel="stylesheet" href="https://unpkg.com/nes.css@0.0.2/css/nes.min.css" />
            : null}
        </Head>

        <Title />
        {React.Children.only(children)}
        <Contacts />
      </main>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};
