// Styled components
import styled from "styled-components";

// Global variables
import { theme } from "../../styles/globalStyles";

// Styles
import { RegisterTitle } from "../../pages/register/registerStyle";

export const HeaderContain = styled.header`
  width: 100%;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 35px;
`;

export const HeaderLogoTitle = styled(RegisterTitle)``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavListItem = styled.a`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.colors.primary};
`;

export const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const HeaderUserName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const HeaderUserPicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ${theme.colors.secondary};
`;
