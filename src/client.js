function client(title) {
  let scripts = '';
    scripts = ' <script src="assets/bundle.js"> </script> ';
  }
  const page = `
  <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div id="app">
                  ${content}
                </div>
                ${scripts}
              </body>
              </html>
              `;

  return page;
}

module.exports = client;
