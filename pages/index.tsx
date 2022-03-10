import React from "react";

import { Landing } from "../templates/landing";
import { meta, experiences, presentationTitle, presentationMessages } from "../data/landing";

const Home = () => {
  return (
    <Landing
      data={{
        meta,
        presentationTitle,
        presentationMessages,
        experiences,
      }}
    />
  );
};

export default Home;
