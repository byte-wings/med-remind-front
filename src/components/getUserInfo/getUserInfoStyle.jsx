/* eslint-disable no-unused-vars */
// Styled components
import styled from "styled-components";

// Styles
import {
  RegisterForm,
  RegisterFormInput,
  RegisterFormWrapper,
  RegisterSubtitle,
} from "../../pages/register/registerStyle";

// Global variables
import { theme } from "../../styles/globalStyles";

export const GetUserInfoForm = styled(RegisterFormWrapper)`
  padding: 20px 45px;
`;

export const UserInfoSubtitle = styled(RegisterSubtitle)`
  font-size: 16px;
  margin-top: 19px;
  margin-top: 50px;
`;

export const UserInfoForm = styled(RegisterForm)`
  margin-top: 20px;
`;

export const GenderWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: start;
  margin-left: -20px;
`;

export const UserGenderLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
`;

export const UserGenderInput = styled.input`
  width: 18px;
  height: 18px;
`;

export const UserInfoInput = styled(RegisterFormInput)`
  height: 40px;
`;

export const UserDateLabel = styled.label`
  width: 100%;
  margin-left: -32px;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;
export const UserDateInfo = styled(UserInfoInput)`
  color: rgba(0, 0, 0, 0.4);
`;
