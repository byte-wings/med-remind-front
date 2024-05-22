// Icons
import { GiPill } from "react-icons/gi";

// Styles
import { SectionTitle } from "../../pages/Home/homeStyles";
import {
  Cabinet,
  YourCabinetContain,
  YourCabinets,
  CabinetHead,
  CabinetPicture,
  CabinetHeadTitle,
  CabinetBody,
  CabinetDesc,
  AddCabinet,
  CabinetEdit,
} from "./yourCabinetStyle";
import { FaPlus } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

export const YourCabinet = () => {
  return (
    <YourCabinetContain>
      <SectionTitle>Sizing kabinetingiz</SectionTitle>
      <YourCabinets>
        <Cabinet>
          <CabinetHead>
            <CabinetPicture>
              <GiPill />
            </CabinetPicture>
            <CabinetHeadTitle>Vitamin A</CabinetHeadTitle>
            <CabinetEdit>
              <MdModeEdit />
            </CabinetEdit>
          </CabinetHead>
          <CabinetBody>40 tabletka qoldi</CabinetBody>
          <CabinetDesc>Ovqatdan keyin</CabinetDesc>
        </Cabinet>
        <Cabinet>
          <CabinetHead>
            <CabinetPicture>
              <GiPill />
            </CabinetPicture>
            <CabinetHeadTitle>Dimeticon</CabinetHeadTitle>
            <CabinetEdit>
              <MdModeEdit />
            </CabinetEdit>
          </CabinetHead>
          <CabinetBody>25 tabletka qoldi</CabinetBody>
          <CabinetDesc>Ovqatdan oldin</CabinetDesc>
        </Cabinet>
        <Cabinet>
          <CabinetHead>
            <CabinetPicture>
              <GiPill />
            </CabinetPicture>
            <CabinetHeadTitle>Vitamin C</CabinetHeadTitle>
            <CabinetEdit>
              <MdModeEdit />
            </CabinetEdit>
          </CabinetHead>
          <CabinetBody>9 tabletka qoldi</CabinetBody>
          <CabinetDesc>Och qoringa</CabinetDesc>
        </Cabinet>
        <Cabinet display="grid">
          <AddCabinet>
            <FaPlus />
          </AddCabinet>
        </Cabinet>
      </YourCabinets>
    </YourCabinetContain>
  );
};
