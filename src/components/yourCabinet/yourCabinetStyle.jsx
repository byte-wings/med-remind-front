// Styled components
import styled from "styled-components";

// Global variables
import { theme } from "../../styles/globalStyles";

export const YourCabinetContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const YourCabinets = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  white-space: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.darkBlue};
  }
`;

export const Cabinet = styled.div`
  width: 280px;
  height: 120px;
  border-radius: 20px;
  flex: 0 0 auto;
  padding: 15px;
  border: 2px solid ${theme.colors.darkBlue};
  background-color: rgb(44, 160, 219, 0.3);
  display: ${(props) => props.display};
  place-items: center;
`;

export const CabinetHead = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CabinetPicture = styled.div`
  display: grid;
  place-items: center;
  font-size: 50px;
  color: ${theme.colors.secondary};
`;

export const CabinetHeadTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const CabinetEdit = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  font-size: 25px;
  cursor: pointer; 
  color: ${theme.colors.darkBlue};
`;

export const CabinetBody = styled.div`
  font-size: 14px;
  margin-top: 5px;
  margin-left: 20px;
  color: ${theme.colors.darkBlue};
`;

export const CabinetDesc = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 20px;
`;

export const AddCabinet = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 50px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
`;
