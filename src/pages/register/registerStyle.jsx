import styled from "styled-components";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
`;
export const RegisterFormInput = styled.input`
  width: 100%;
  height: 45px;
  border: 2px solid ${theme.colors.darkBlue};
  outline: none;
  border-radius: 10px;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 600;

  &::placeholder {
    font-weight: 600;
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
