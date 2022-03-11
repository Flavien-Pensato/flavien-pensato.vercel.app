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
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        &nbsp;
        <i className={styles.subtitle}>{subTitle}</i>
      </div>
      {contents.map((content, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: content }} />
      ))}
      <ChronologyDate startAt={startAt} endAt={endAt} />
    </>
  );
};
