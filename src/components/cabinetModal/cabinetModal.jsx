/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Hooks
import { useContext, useEffect, useState } from "react";

// Styles
import {
  CabinetModalContain,
  ModalContent,
  ModalTitle,
  CloseModal,
  ModalHead,
  ModalBody,
  ModalForm,
  ModalInput,
  ModalSelect,
  ModalSubmitBtn,
  ModalDateWrapper,
  ModalDateTitle,
  AddNewDate,
} from "./cabinetModalStyle";

// Icons
import { IoCloseSharp } from "react-icons/io5";

// Context
import { GlobalContext } from "../../context/globalContext";

// Icons
import { FaPlus } from "react-icons/fa";
import { ModalDate } from "../modalDates/modalDates";

export const CabinetModal = () => {
  // Context
  const { setIsModalActive, cabinetContent, setCabinetContent, cabinetId } =
    useContext(GlobalContext);

  // Modal input values
  const [drugName, setDrugName] = useState("");
  const [selectedOption, setSelectedOption] = useState("pill");
  const [drugAmount, setDrugAmount] = useState("");
  const [drugNote, setDrugNote] = useState("");
  const [dose, setDose] = useState("");

  const clearDrugDetails = () => {
    setDrugName("");
    setDrugAmount("");
    setDrugNote("");
    setDose("");
  };

  const updateDrugDetails = (item) => {
    setDrugName(item.name);
    setDrugAmount(item.amount);
    setDrugNote(item.note);
    setDose(item.dose);
  };

  useEffect(() => {
    const cabinetItem = cabinetContent.filter((item) => item.id === cabinetId);
    if (cabinetItem.length > 0) {
      updateDrugDetails(cabinetItem[0]);
    }
  }, [cabinetId, cabinetContent]);

  // Add new cabinet

  // Modal dates
  const [modalDates, setModalDates] = useState([{ day: "", time: "" }]);

  const handleAddNewDate = () => {
    setModalDates([...modalDates, { day: "", time: "" }]);
  };

  const handleDateChange = (index, field, value) => {
    const newModalDates = modalDates.map((modalDate, i) =>
      i === index ? { ...modalDate, [field]: value } : modalDate
    );
    setModalDates(newModalDates);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkedValues = {
      name: drugName.trim(),
      amount: drugAmount.trim(),
      dose: dose.trim(),
      note: drugNote.trim(),
    };

    const updatedCabinetContent = cabinetContent.map((item) => {
      if (item.id === cabinetId) {
        return {
          ...item,
          name: checkedValues.name,
          amount: checkedValues.amount,
          dose: checkedValues.dose,
          note: checkedValues.note,
        };
      }
      return item;
    });

    const existingItem = cabinetContent.find((item) => item.id === cabinetId);

    if (!existingItem) {
      const lastCabinet = cabinetContent[cabinetContent.length - 1];
      const newId = lastCabinet ? lastCabinet.id + 1 : 1;

      const newItem = {
        id: newId,
        name: checkedValues.name,
        amount: checkedValues.amount,
        dose: checkedValues.dose,
        note: checkedValues.note,
      };

      updatedCabinetContent.push(newItem);
    }
    setCabinetContent(updatedCabinetContent);
    setIsModalActive(false);
  };

  console.log(modalDates);

  return (
    <CabinetModalContain>
      <ModalContent>
        <ModalHead>
          <ModalTitle>Yangi kabinet qo{"'"}shish</ModalTitle>
          <CloseModal onClick={() => setIsModalActive(false)}>
            <IoCloseSharp />
          </CloseModal>
        </ModalHead>
        <ModalBody>
          <ModalForm>
            <ModalInput
              type="text"
              value={drugName}
              placeholder="Dorining nomini kiritng"
              onChange={(e) => setDrugName(e.target.value)}
            />
            <ModalSelect onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="pill">Tabletka, Kapsula</option>
              <option value="syrup">Sirob</option>
            </ModalSelect>
            <ModalInput
              type="text"
              value={drugAmount}
              placeholder="Tabletka sonini kiriting (dona)"
              onChange={(e) => setDrugAmount(e.target.value)}
              hidden={selectedOption === "pill" ? false : true}
            />
            <ModalInput
              type="text"
              value={drugAmount}
              placeholder="Sirob miqdorini kiriting (ml)"
              onChange={(e) => setDrugAmount(e.target.value)}
              hidden={selectedOption === "syrup" ? false : true}
            />
            <ModalInput
              type="text"
              value={dose}
              placeholder="Dozani kiriting"
              onChange={(e) => setDose(e.target.value)}
            />
            <ModalDateTitle>Vaqtlarni tanlang:</ModalDateTitle>
            {modalDates.map((modalDate, index) => (
              <ModalDate
                key={index}
                index={index}
                day={modalDate.day}
                time={modalDate.time}
                onChange={handleDateChange}
              />
            ))}
            <AddNewDate onClick={handleAddNewDate}>
              Kun qo{"'"}shish
              <FaPlus />
            </AddNewDate>
            <ModalInput
              type="text"
              value={drugNote}
              placeholder="Qanday xolatda ichish kerak (ovqatdan keyin)"
              onChange={(e) => setDrugNote(e.target.value)}
            />
            <ModalSubmitBtn type="submit" onClick={handleSubmit}>
              Qo{"'"}shish
            </ModalSubmitBtn>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </CabinetModalContain>
  );
};
