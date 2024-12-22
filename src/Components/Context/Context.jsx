import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const DataProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [editedAddress,setEditedAddress]=useState(null)
  
  return (
    <Context.Provider value={{isLogIn, setIsLogIn,editedAddress,setEditedAddress}}>
      {children}
    </Context.Provider>
  );
};

export const useCart = () => useContext(Context);
