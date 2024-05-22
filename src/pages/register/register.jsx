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
  SendAgainText,
  CustomSpan
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
  const [sendMsgAgain, setSendMsgAgain] = useState(false);
  const [newCodeTime, setNewCodeTime] = useState(false)
  useEffect(() => {
    let interval;
    if (!hiddenInput || newCodeTime) {
      interval = setInterval(() => {
        setCodeTime((prevCodeTime) => {
          if (prevCodeTime <= 1) {
            clearInterval(interval);
            setNewCodeTime(false)
            return 0;
          }
          return prevCodeTime - 1;
        });
      }, 1000);
    } else {
      setCodeTime(59);
      setNewCodeTime(false)
    }
    return () => clearInterval(interval);
  }, [hiddenInput, newCodeTime]);

  useEffect(() => {
    if (codeTime === 0) {
      setSendMsgAgain(true);
    } else {
      setSendMsgAgain(false);
    }
  }, [codeTime]);

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

  const handleSendAgain = (e) => {
    e.preventDefault();
    console.log("Sent again");
    setCodeTime(59)
    setNewCodeTime(true)
  }
  
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
            {sendMsgAgain && (
              <SendAgainText>
                SMS kod kelmadi.
                <CustomSpan onClick={handleSendAgain}>Qayta yuboring</CustomSpan>
              </SendAgainText>
            )}
            <RegisterFormButton type="submit" disabled={disabled}>
              Kirish
            </RegisterFormButton>
          </RegisterForm>
        </RegisterFormWrapper>
      </Container>
    </RegisterContain>
  );
};
