import React from "react";
import Header from "./Header";

import lorem from "../utils/lorem";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: lorem.generateSentences(1),
  description: lorem.generateSentences(),
};
