import React from "react";
import Article from "./Article";

import lorem from "../utils/lorem";

import { Primary as HeaderPrimary } from "./Header.stories";

export default {
  title: "Article",
  component: Article,
};

const Template = (args) => <Article {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  header: <HeaderPrimary {...HeaderPrimary.args} />,
  children: (
    <>
      <p className="py-2 font-normal">{lorem.generateSentences()}</p>
      <p className="py-2 font-normal">{lorem.generateSentences()}</p>
      <p className="py-2 font-normal">{lorem.generateSentences()}</p>
    </>
  ),
};
