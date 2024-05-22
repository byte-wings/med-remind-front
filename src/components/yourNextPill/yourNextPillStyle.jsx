// Styled components
import styled from "styled-components";

// Global variables
import { theme } from "../../styles/globalStyles";

export const NextPillTimeContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NextPillBox = styled.div`
  width: 500px;
  height: 130px;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: ${theme.colors.darkBlue};
  border-radius: 25px;
`;

export const PillImage = styled.div`
  font-size: 75px;
  color: #eee;
  display: grid;
  place-items: center;
`;

export const NextPillName = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: white;
`;

export const NextPillDesc = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #eee;
`;

export const NextPillBody = styled.div`
  display: flex;
  flex-direction: column;
`;