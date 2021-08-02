import React from "react";

import Separator from "../atoms/Separator";
import { Chronology } from "../organims";
import { Experience } from "../utils/types";

export interface CVTemplateProps {
  presentationTitle: string;
  presentationMessages: string[];
  experiences: Experience[];
}

export const CVTemplate = ({ data }) => {
  return (
    <main>
      <section>
        <h1 dangerouslySetInnerHTML={{ __html: "Flavien Pensato" }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data.presentationMessages }}></p>
      </section>
      <Separator />
      <Chronology experiences={data.experiences} />
    </main>
  );
};
