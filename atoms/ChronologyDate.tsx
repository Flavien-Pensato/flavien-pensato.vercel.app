import React from "react";
import { DateTime } from "luxon";
import { css } from "@emotion/css";

const ChronologyDateContainer = css`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.8rem;
  text-align: right;
`;

export interface ChronologyDateProps {
  startAt: Date;
  endAt?: Date;
  fixed?: boolean;
}

const ChronologyDate = ({ startAt, endAt, fixed }: ChronologyDateProps) => {
  if (fixed) {
    return (
      <div className={ChronologyDateContainer}>
        <time dateTime={startAt.getFullYear().toString()}>
          {DateTime.fromISO(startAt.toISOString())
            .setLocale("fr")
            .toFormat("dd LLL yyyy")}
        </time>
      </div>
    );
  }
  let time = (
    <>
      Depuis&nbsp;le&nbsp;
      <time dateTime={startAt.getFullYear().toString()}>
        {DateTime.fromISO(startAt.toISOString())
          .setLocale("fr")
          .toFormat("dd/LL/yyyy")}
      </time>
    </>
  );

  if (endAt) {
    time = (
      <>
        Du&nbsp;
        <time dateTime={startAt.getFullYear().toString()}>
          {DateTime.fromISO(startAt.toISOString())
            .setLocale("fr")
            .toFormat("dd/LL/yyyy")}
        </time>
        &nbsp;au&nbsp;
        <time dateTime={endAt.getFullYear().toString()}>
          {DateTime.fromISO(endAt.toISOString())
            .setLocale("fr")
            .toFormat("dd/LL/yyyy")}
        </time>
      </>
    );
  }

  return <div className={ChronologyDateContainer}>{time}</div>;
};

export default ChronologyDate;
