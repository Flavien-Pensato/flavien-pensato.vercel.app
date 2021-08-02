import React from "react";
import { css } from "@emotion/css";

const SeparatorContainer = css`
  max-width: 800px;
  margin: auto;
  padding: 0 1rem;
`;

const Hr = css`
  border: 0;
  border-top: 3px dotted rgb(19, 90, 159);
`;

const Separator = () => {
  return (
    <div className={SeparatorContainer}>
      <hr className={Hr} />
    </div>
  );
};

export default Separator;
