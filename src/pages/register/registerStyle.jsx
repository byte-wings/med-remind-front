import styled from "styled-components";
import { theme } from "../../styles/globalStyles";

export const RegisterContain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const RegisterFormWrapper = styled.div`
  width: 350px;
  padding: 25px 10px;
  border-radius: 18px;
  border: 3px solid ${theme.colors.darkBlue};
`;

export const RegisterTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

export const TitleCustomSpan = styled.span`
  color: ${theme.colors.secondary};
`;

export const RegisterSubtitle = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin-top: 100px;
`;
