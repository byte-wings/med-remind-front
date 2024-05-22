// Styled components
import styled from "styled-components";

// Global variables
import { theme } from "../../styles/globalStyles";

export const RegisterContain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const RegisterFormWrapper = styled.div`
  width: 300px;
  padding: 65px 45px;
  margin: 20px;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
  margin-top: 60px;
`;

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const RegisterFormInput = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border-radius: 10px;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid ${theme.colors.darkBlue};

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const CodeInput = styled(RegisterFormInput)`
  border: none;
  padding: 0;
`;

export const RegisterFormButton = styled.button`
  width: 60%;
  height: 45px;
  color: white;
  font-size: 17px;
  letter-spacing: 1px;
  background-color: ${theme.colors.darkBlue};
  border: none;
  outline: none;
  border-radius: 15px;
  margin-top: 15px;
  cursor: pointer;
`;

export const CodeSendTime = styled.div`
  width: 100%;
  text-align: end;
`;

export const NumberCodeInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 15px;
  display: ${(props) => props.display};
  border: 2px solid ${theme.colors.darkBlue};
`;

export const SendAgainText = styled.div`
  width: 100%;
  text-align: start;
  font-size: 13px;
  font-weight: 500;
  user-select: none;
  margin-left: -25px;
`;

export const CustomSpan = styled.span`
  color: ${theme.colors.darkBlue};
  margin-left: 5px;
  cursor: pointer;
`;
