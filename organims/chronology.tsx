import React from "react";
import { SectionExperience } from "../molecules";

export const Chronology = ({ experiences }) => {
  return (
    <section>
      <h2>Chronologie</h2>
      <ol>
        {experiences.map((experience, index) => (
          <li key={index}>
            <SectionExperience experience={experience} />
          </li>
        ))}
      </ol>
    </section>
  );
};
