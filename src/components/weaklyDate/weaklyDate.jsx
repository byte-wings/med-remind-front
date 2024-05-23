/* eslint-disable no-unused-vars */
// Styles
import { useState } from "react";
import { DateContain, DateTitle, DailyDate, DateBox } from "./weaklyDateStyle";

export const WeaklyDate = () => {
  const newDate = () => {
    const date = new Date();
    const today = date.getDate();

    return today;
  };

  //   setInterval(() => {
  //     newDate();
  //   }, 5000);

  return (
    <DateContain>
      <DateTitle>Bugun</DateTitle>
      <DailyDate>
        <DateBox>
          20 <br /> Dush
        </DateBox>
        <DateBox>
          21 <br /> Sesh
        </DateBox>
        <DateBox>
          22 <br /> Chor
        </DateBox>
        <DateBox $active="true">
          23 <br /> Pay
        </DateBox>
        <DateBox>
          24 <br /> Jum
        </DateBox>
        <DateBox>
          25 <br /> Shan
        </DateBox>
        <DateBox>
          26 <br /> Yak
        </DateBox>
        <DateBox>
          27 <br /> Dush
        </DateBox>
      </DailyDate>
    </DateContain>
  );
};
