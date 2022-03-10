import React from "react";
import { DateTime } from "luxon";

export interface ChronologyDateProps {
  startAt: string;
  endAt?: string;
  fixed?: boolean;
}

const ChronologyDate = ({ startAt, endAt, fixed }: ChronologyDateProps) => {
  if (fixed) {
    return (
      <div className="chronology">
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

  return <div className="chronology">{time}</div>;
};

export default ChronologyDate;
