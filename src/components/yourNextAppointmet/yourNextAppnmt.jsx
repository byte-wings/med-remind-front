// Styles
import { SectionTitle } from "../../pages/Home/homeStyles";
import {
  YNABox,
  YNAContain,
  YNALogo,
  YNABody,
  YNAName,
  YNADesc,
  YNADateBxo,
  YNADate,
  YNATime,
} from "./ynaStyles";

// Icons
import { BsCalendarPlus } from "react-icons/bs";

export const YourNextAppoint = () => {
  return (
    <YNAContain>
      <SectionTitle>Keyingi uchrashuvingiz</SectionTitle>
      <YNABox>
        <YNALogo>
          <BsCalendarPlus />
        </YNALogo>
        <YNABody>
          <YNAName>Nevropotolog</YNAName>
          <YNADesc>Shamollash tekshiruvi</YNADesc>
        </YNABody>
        <YNADateBxo>
          <YNADate>25 May</YNADate>
          <YNATime>10:00</YNATime>
        </YNADateBxo>
      </YNABox>
    </YNAContain>
  );
};
