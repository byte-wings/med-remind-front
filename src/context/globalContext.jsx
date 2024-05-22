/* eslint-disable react/prop-types */
// Hooks
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  // User access token
  const [accessToken, setAccessToken] = useState("");

  // Refresh token
  const [refreshToken, setRefreshToken] = useState("");

  // Cabinet modal
  const [isModalActive, setIsModalActive] = useState(false);

  // Cabinets
  const [cabinetContent, setCabinetContent] = useState([
    {
      id: 1,
      name: "Vitamin A",
      amount: "40 dona",
      note: "Ovqatdan keyin",
    },
    {
      id: 2,
      name: "Dimeticon",
      amount: "25 dona",
      note: "Ovqatdan oldin",
    },
    {
      id: 3,
      name: "Vitamin C",
      amount: "9 dona",
      note: "Och qoringa",
    },
  ]);

  const [cabinetId, setCabinetId] = useState(null)
  
  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        isModalActive,
        setIsModalActive,
        cabinetContent,
        setCabinetContent,
        cabinetId,
        setCabinetId
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
