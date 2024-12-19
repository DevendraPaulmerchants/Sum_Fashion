import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const DataProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(true);
  
  return (
    <Context.Provider value={{isLogIn, setIsLogIn}}>
      {children}
    </Context.Provider>
  );
};

export const useCart = () => useContext(Context);
