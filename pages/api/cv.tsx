import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import htmlToPdf from "html-pdf-node";

import { CVTemplate } from "../../templates/cv";

import { meta, experiences, presentationTitle, presentationMessages } from "../../data/landing";

export default async (_req, res) => {
  try {
    const stylePath = path.join(process.cwd(), "styles/global.css");
    const styles = fs.readFileSync(stylePath, "utf8");

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
    const html = ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <style>{styles}</style>
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
      res.setHeader("Content-Disposition", "attachment; filename=Flavien-Pensato.pdf");

      res.status(200).send(pdfBuffer);
    });
  } catch (e) {
    res.send(JSON.stringify(e));
  }
};
