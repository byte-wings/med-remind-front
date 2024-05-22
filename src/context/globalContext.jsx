/* eslint-disable react/prop-types */
// Hooks
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  // User access token
  const [accessToken, setAccessToken] = useState("");

  // Refresh token
  const [refreshToken, setRefreshToken] = useState("");

  return (
    <GlobalContext.Provider
      value={{ accessToken, setAccessToken, refreshToken, setRefreshToken }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
