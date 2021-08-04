import ReactDOMServer from "react-dom/server";
import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css";
import pdf from "html-pdf";
import path from "path";

import { CVTemplate } from "../../templates/cv";
import {
  meta,
  experiences,
  presentationTitle,
  presentationMessages,
} from "../../data/landing";

export default (req, res) => {
  try {
    console.log(req.body);
    const app = ReactDOMServer.renderToString(
      <CVTemplate
        data={{
          meta,
          presentationTitle,
          presentationMessages,
          experiences,
        }}
      />
    );
    const { extractCritical } = createEmotionServer(cache);
    const { ids, css } = extractCritical(app);
    const html = ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <style
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </head>
        <body dangerouslySetInnerHTML={{ __html: app }}></body>
      </html>
    );

    pdf
      .create(html, {
        base: "file://" + path.resolve("./public"),
        phantomPath: path.resolve(
          process.cwd(),
          "node_modules/phantomjs-prebuilt/bin/phantomjs"
        ),
      })
      .toBuffer(function (err, buffer) {
        if (err) {
          res.send(JSON.stringify(err));
        } else {
          // res.setHeader("Content-Length", buffer.size);
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            "attachment; filename=Flavien-Pensato.pdf"
          );
          res.status(200).send(buffer);
        }
      });
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
