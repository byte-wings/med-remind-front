/* eslint-disable react/prop-types */
// Styles
import {
  ModalDateWrapper,
  ModalInput,
  ModalSelect,
} from "../cabinetModal/cabinetModalStyle";

export const ModalDate = ({ index, day, time, onChange }) => {
  const handleDayChange = (e) => {
    onChange(index, "day", e.target.value);
  };

  const handleTimeChange = (e) => {
    onChange(index, "time", e.target.value);
  };

  return (
    <ModalDateWrapper>
      <ModalSelect value={day} onChange={handleDayChange}>
        <option value="1">Dushanba</option>
        <option value="2">Seshanba</option>
        <option value="3">Chorshanba</option>
        <option value="4">Payshanba</option>
        <option value="5">Juma</option>
        <option value="6">Shanba</option>
        <option value="7">Yakshanba</option>
      </ModalSelect>
      <ModalInput type="time" value={time} onChange={handleTimeChange} />
    </ModalDateWrapper>
  );
};
