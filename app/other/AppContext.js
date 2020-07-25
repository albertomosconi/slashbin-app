import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [info, setInfo] = useState(0);

  return (
    <AppContext.Provider value={{ info, setInfo }}>
      {children}
    </AppContext.Provider>
  );
};
