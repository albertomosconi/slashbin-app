import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [info, setInfo] = useState(0);
  const [result, setResult] = useState(0);
  const [camera, setCamera] = useState(null);

  return (
    <AppContext.Provider
      value={{ camera, setCamera, info, setInfo, result, setResult }}
    >
      {children}
    </AppContext.Provider>
  );
};
