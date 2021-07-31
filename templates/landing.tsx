import React from "react";

import Separator from "../atoms/Separator";
import { Chronology } from "../organims";
import { MetaData, Experience } from "../utils/types";
import Meta from "../organims/Meta";
import Menu from "../molecules/Menu";
import Footer from "../molecules/Footer";

export interface LandingProps {
  meta: MetaData;
  presentationTitle: string;
  presentationMessages: string[];
  experiences: Experience[];
}

export const Landing = ({ data }) => {
  return (
    <>
      {data.meta && <Meta {...data.meta} />}
      <Menu />
      <main>
        <section>
          <h1 dangerouslySetInnerHTML={{ __html: data.presentationTitle }}></h1>
          <p
            dangerouslySetInnerHTML={{ __html: data.presentationMessages }}
          ></p>
        </section>
        <Separator />
        <Chronology experiences={data.experiences} />
      </main>
      <Footer />
    </>
  );
};
