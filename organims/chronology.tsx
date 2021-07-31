import React from "react";
import { SectionExperience } from "../molecules";

export const Chronology = ({ experiences }) => {
  return (
    <section>
      <h2>Chronologie</h2>
      <ol>
        {experiences.map((experience, index) => (
          <li>
            <SectionExperience key={index} experience={experience} />
          </li>
        ))}
      </ol>
    </section>
  );
};
