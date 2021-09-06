import React from "react";
import { DateTime } from "luxon";
import { css } from "@emotion/css";

const ChronologyDateContainer = css`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.8rem;
  text-align: right;
`;

export interface ChronologyDateProps {
  startAt: string;
  endAt?: string;
  fixed?: boolean;
}

const ChronologyDate = ({ startAt, endAt, fixed }: ChronologyDateProps) => {
  if (fixed) {
    return (
      <div className={ChronologyDateContainer}>
        <time dateTime={DateTime.fromISO(startAt).year.toString()}>
          {DateTime.fromISO(startAt).setLocale("fr").toFormat("dd LLL yyyy")}
        </time>
      </div>
    );
  }
  let time = (
    <>
      Depuis&nbsp;le&nbsp;
      <time dateTime={DateTime.fromISO(startAt).year.toString()}>
        {DateTime.fromISO(startAt).setLocale("fr").toFormat("dd/LL/yyyy")}
      </time>
    </>
  );

  if (endAt) {
    time = (
      <>
        Du&nbsp;
        <time dateTime={DateTime.fromISO(startAt).year.toString()}>
          {DateTime.fromISO(startAt).setLocale("fr").toFormat("dd/LL/yyyy")}
        </time>
        &nbsp;au&nbsp;
        <time dateTime={DateTime.fromISO(endAt).year.toString()}>
          {DateTime.fromISO(endAt).setLocale("fr").toFormat("dd/LL/yyyy")}
        </time>
      </>
    );
  }

  return <div className={ChronologyDateContainer}>{time}</div>;
};

export default ChronologyDate;
