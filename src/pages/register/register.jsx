// Site container
import { Container } from "../../styles/globalStyles";

// Styles
import {
  TitleCustomSpan,
  RegisterContain,
  RegisterFormWrapper,
  RegisterTitle,
  RegisterSubtitle,
} from "./registerStyle";

export const Register = () => {
  return (
    <RegisterContain>
      <Container>
        <RegisterFormWrapper>
          <RegisterTitle>
            <TitleCustomSpan>Med</TitleCustomSpan>Remind
          </RegisterTitle>
          <RegisterSubtitle>Tizimga kirish</RegisterSubtitle>
          <form>
            
          </form>
        </RegisterFormWrapper>
      </Container>
    </RegisterContain>
  );
};
