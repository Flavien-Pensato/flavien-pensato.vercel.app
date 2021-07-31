import React from "react";
import ChronologyDate from "../atoms/ChronologyDate";
import { Experience } from "../utils";

import styles from "./SectionExperience.module.css";

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
          {title}&nbsp;<i className={styles.subTitle}>{subTitle}</i>
        </h3>
      </div>
      {contents.map((content, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: content }} />
      ))}
      <ChronologyDate startAt={startAt} endAt={endAt} />
    </>
  );
};
