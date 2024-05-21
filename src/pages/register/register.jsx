/* eslint-disable no-unused-vars */
// Site container
import { useEffect, useState } from "react";
import { Container } from "../../styles/globalStyles";

// Styles
import {
  TitleCustomSpan,
  RegisterContain,
  RegisterFormWrapper,
  RegisterTitle,
  RegisterSubtitle,
  RegisterForm,
  RegisterFormInput,
  RegisterFormButton,
  CodeSendTime,
  NumberCodeInput,
  CodeInput,
} from "./registerStyle";

export const Register = () => {
  // Input values
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [numberCode, setNumberCode] = useState();
  const [hiddenInput, setHiddenInput] = useState(true);

  // Check submit button
  const [disabled, setDisabled] = useState(true);

  // Send code time
  const [codeTime, setCodeTime] = useState(59);
  useEffect(() => {
    let interval;
    if (!hiddenInput) {
      interval = setInterval(() => {
        setCodeTime((prevCodeTime) => {
          if (prevCodeTime <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prevCodeTime - 1;
        });
      }, 1000);
    } else {
      setCodeTime(59);
    }
    return () => clearInterval(interval);
  }, [hiddenInput]);

  // Check input values
  useEffect(() => {
    const checkPhoneNumber = phoneNumber.length >= 13;
    if (checkPhoneNumber) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phoneNumber]);

  // Submit registration
  const handleRegister = (e) => {
    e.preventDefault();
    setHiddenInput(false);
    console.log(e);
  };
  return (
    <RegisterContain>
      <Container>
        <RegisterFormWrapper>
          <RegisterTitle>
            <TitleCustomSpan>Med</TitleCustomSpan>Remind
          </RegisterTitle>
          <RegisterSubtitle>Tizimga kirish</RegisterSubtitle>
          <RegisterForm onSubmit={handleRegister}>
            <RegisterFormInput
              type="text"
              placeholder="Telefon raqamingiz"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              hidden={!hiddenInput}
            />
            <NumberCodeInput display={!hiddenInput ? "flex" : "none"}>
              <CodeInput
                type="text"
                placeholder="Kodni kiriting"
                onChange={(e) => setNumberCode(e.target.value)}
                hidden={hiddenInput}
              />
              <CodeSendTime>{codeTime}</CodeSendTime>
            </NumberCodeInput>
            <RegisterFormButton type="submit" disabled={disabled}>
              Kirish
            </RegisterFormButton>
          </RegisterForm>
        </RegisterFormWrapper>
      </Container>
    </RegisterContain>
  );
};
