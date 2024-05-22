/* eslint-disable react-refresh/only-export-components */
// Styled Components
import styled, { createGlobalStyle } from "styled-components";

// Breakpoints size
export const breakpoints = {
  XDesktop: "1200px",
  desktop: "992px",
  tablet: "768px",
  mobile: "576px",
};

// Site themes
export const theme = {
  colors: {
    primary: "#2CA0DB",
    secondary: "#F39123",
    darkBlue: "#1D88C4",
  },
};

// Global styles
export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
      outline: none;
      border: none;
      user-select: none;
      background-color: #E3F2FD;
  }
  a {
      text-decoration: none;
      color: black;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.darkBlue};
    border-radius: 10px;
  }
`;

// Site container
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : ""};
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
  //   border: 2px solid red;
`;
