import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Contacts } from './contacts.component';
import { Title } from './title.component';

export const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <title>Flavien Pensato</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Title />
    {children}
    <Contacts />
  </Fragment>
)
