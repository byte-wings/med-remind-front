// Styled components
import styled from "styled-components";

// Global variables
import { theme } from "../../styles/globalStyles";

// Styles from other components
import {
  NextPillBody,
  NextPillBox,
  NextPillDesc,
  NextPillName,
  NextPillTimeContain,
} from "../yourNextPill/yourNextPillStyle";

export const YNAContain = styled(NextPillTimeContain)``;

export const YNABox = styled(NextPillBox)`
  background-color: ${theme.colors.secondary};
`;

export const YNALogo = styled.div`
  font-size: 75px;
  color: #eee;
  display: grid;
  place-items: center;
`;

export const YNABody = styled(NextPillBody)``;

export const YNAName = styled(NextPillName)``;

export const YNADesc = styled(NextPillDesc)``;

export const YNADateBxo = styled.div`
  height: 80px;
  padding-left: 20px;
  margin-left: auto;
  display: grid;
  place-items: center;
  border-left: 3px solid black;
`;

export const YNADate = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

export const YNATime = styled.div`
font-size: 20px;
`