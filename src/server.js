import React from 'react';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { App } from './App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./dist'));


app.get('/*', (req, res) => {
  const context = {};
  const sheet = new ServerStyleSheet();

  const appString = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </StyleSheetManager>,
  );

  const styleTags = sheet.getStyleTags();

  const indexFile = path.resolve('./public/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);

      return res.status(500).send('Oops, better luck next time!');
    }

    if (context.status === 404) {
      res.status(404);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appString}</div>`).replace('<style></style>', styleTags),
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
