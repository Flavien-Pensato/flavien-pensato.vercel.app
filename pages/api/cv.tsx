import ReactDOMServer from "react-dom/server";
import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css";
import htmlToPdf from "html-pdf-node";

import { CVTemplate } from "../../templates/cv";

import "../../styles/global";

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

    const options = {
      format: "A4",
      margin: {
        top: 10,
        right: 30,
        bottom: 10,
        left: 30,
      },
    };

    const file = { content: html };

    htmlToPdf.generatePdf(file, options).then((pdfBuffer) => {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=Flavien-Pensato.pdf"
      );

      res.status(200).send(pdfBuffer);
    });
  } catch (e) {
    res.send(JSON.stringify(e));
  }
};
