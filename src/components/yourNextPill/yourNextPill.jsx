// Icons
import { GiPill } from "react-icons/gi";

// Styles
import { SectionTitle } from "../../pages/Home/homeStyles";
import {
  NextPillTimeContain,
  NextPillBox,
  NextPillDesc,
  NextPillName,
  PillImage,
  NextPillBody,
} from "./yourNextPillStyle";

export const YourNextPill = () => {
  return (
    <NextPillTimeContain>
      <SectionTitle>Keyingi qabul qilinadigan dori</SectionTitle>
      <NextPillBox>
        <PillImage>
          <GiPill />
        </PillImage>
        <NextPillBody>
          <NextPillName>Omega 3</NextPillName>
          <NextPillDesc>1 tabletga ovqatdan oldin</NextPillDesc>
        </NextPillBody>
      </NextPillBox>
    </NextPillTimeContain>
  );
};
