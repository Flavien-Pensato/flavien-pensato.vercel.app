import React from "react";
import { css } from "@emotion/css";
import ChronologyDate from "../atoms/ChronologyDate";
import { Experience } from "../utils";

const SubTitle = css`
  margin-left: 1rem;
  color: rgba(var(--dark), 0.7);
  font-size: 0.8rem;
`;

export interface SectionExperienceProps {
  experience: Experience;
}

export const SectionExperience = ({
  experience: { title, subTitle, contents, startAt, endAt },
}: SectionExperienceProps) => {
  return (
    <>
      <div>
        <h3>
          {title}&nbsp;<i className={SubTitle}>{subTitle}</i>
        </h3>
      </div>
      {contents.map((content, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: content }} />
      ))}
      <ChronologyDate startAt={startAt} endAt={endAt} />
    </>
  );
};
