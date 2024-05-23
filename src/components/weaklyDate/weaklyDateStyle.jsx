// Styled components
import styled from "styled-components";

// Global variables
import { theme } from "../../styles/globalStyles";

export const DateContain = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const DateTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const DailyDate = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const DateBox = styled.div`
  width: 90px;
  height: 100px;
  border-radius: 15px;
  border: 3px solid ${theme.colors.darkBlue};
  background-color: ${(props) =>
    props.$active === "true" ? theme.colors.darkBlue : "transparent"};
  color: ${(props) => (props.$active === "true" ? "white" : "black")};
  display: grid;
  place-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
