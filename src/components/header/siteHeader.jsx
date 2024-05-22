/* eslint-disable no-unused-vars */
// Global styles
import { TitleCustomSpan } from "../../pages/register/registerStyle";
import { Container } from "../../styles/globalStyles";

// Styles
import {
  HeaderContain,
  HeaderContent,
  HeaderLogo,
  HeaderLogoTitle,
  Nav,
  NavListItem,
  HeaderUserPicture,
  HeaderUserInfo,
  HeaderUserName,
} from "./headerStyle";

// User images
import maleUserImg from "../../assets/userImages/male-user.png";
import femaleUserImg from "../../assets/userImages/female-user.png";
import { useState } from "react";

export const SiteHeader = () => {
  // User gender info
  const [userGender, setUserGender] = useState("female");

  return (
    <HeaderContain>
      <Container>
        <HeaderContent>
          <HeaderLogo>
            <img src="med-remind.svg" alt="logo" width="70px" />
            <HeaderLogoTitle>
              <TitleCustomSpan>Med</TitleCustomSpan>Remind
            </HeaderLogoTitle>
          </HeaderLogo>
          <Nav>
            <NavListItem href="">Home</NavListItem>
            <NavListItem href="">Analysis</NavListItem>
            <NavListItem href="">News</NavListItem>
            <NavListItem href="">Health Advices</NavListItem>
            <NavListItem href="">Contact</NavListItem>
          </Nav>
          <HeaderUserInfo>
            <HeaderUserName>Hi&#128075;, Aliya</HeaderUserName>
            <HeaderUserPicture>
              <img
                src={userGender === "male" ? maleUserImg : femaleUserImg}
                alt="user"
                width="100%"
              />
            </HeaderUserPicture>
          </HeaderUserInfo>
        </HeaderContent>
      </Container>
    </HeaderContain>
  );
};
