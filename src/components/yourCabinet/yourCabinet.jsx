/* eslint-disable react/prop-types */
// Icons
import { GiPill } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

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

// Hooks
import { useContext } from "react";

// Context
import { GlobalContext } from "../../context/globalContext";

export const YourCabinet = () => {
  // Context
  const { setIsModalActive, cabinetContent, setCabinetId } =
    useContext(GlobalContext);

  const handleCabinetEdit = (id) => {
    setCabinetId(id);
    setIsModalActive(true);
  };

  const handleActiveModal = () => {
    setIsModalActive(true)
    setCabinetId(null)
  }
  
  return (
    <YourCabinetContain>
      <SectionTitle>Sizning kabinetingiz</SectionTitle>
      <YourCabinets>
        {cabinetContent &&
          cabinetContent.map((item) => {
            return (
              <Cabinet key={item.id}>
                <CabinetHead>
                  <CabinetPicture>
                    <GiPill />
                  </CabinetPicture>
                  <CabinetHeadTitle>{item.name}</CabinetHeadTitle>
                  <CabinetEdit onClick={() => handleCabinetEdit(item.id)}>
                    <MdModeEdit />
                  </CabinetEdit>
                </CabinetHead>
                <CabinetBody>{item.amount} qoldi</CabinetBody>
                <CabinetDesc>{item.note}</CabinetDesc>
              </Cabinet>
            );
          })}
        <Cabinet display="grid">
          <AddCabinet onClick={handleActiveModal}>
            <FaPlus />
          </AddCabinet>
        </Cabinet>
      </YourCabinets>
    </YourCabinetContain>
  );
};
