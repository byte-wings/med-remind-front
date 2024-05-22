// Styled components
import styled from "styled-components";

// Global variables
import { theme } from "../../styles/globalStyles";

export const CabinetModalContain = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  width: 500px;
  padding: 25px;
  background-color: white;
  border-radius: 15px;
`;

export const ModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.darkBlue};
`;

export const CloseModal = styled.div`
  display: grid;
  place-items: center;
  font-size: 40px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  //   border: 2px solid;
`;

export const ModalForm = styled.form`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 10px;
  border-radius: 7px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: black;
  border: 2px solid ${theme.colors.darkBlue};

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ModalSelect = styled.select`
    width: 105%;
    height: 45px;
    padding: 0 10px;
    border-radius: 7px;
    outline: none;
    border: 2px solid ${theme.colors.darkBlue};
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
`;

export const ModalSubmitBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  font-size: 17px;
  margin-top: 15px;
  background-color: ${theme.colors.primary};
`;
