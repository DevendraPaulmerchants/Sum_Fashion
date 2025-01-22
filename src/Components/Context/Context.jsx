import React, { useEffect, createContext, useState, useContext } from "react";

const Context = createContext();

export const DataProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [editedAddress, setEditedAddress] = useState(null);
  const [dress, setDress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.sumfashion.in/api/app/dress", {
      headers: {
        // 'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json())
      .then((data) => {
        setDress(data.response);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      })
  }, []);


  return (
    <Context.Provider value={{
      isLogIn, setIsLogIn, editedAddress, setEditedAddress,
      dress, setDress, isLoading, setIsLoading
    }}>
      {children}
    </Context.Provider>
  );
};

export const useCart = () => useContext(Context);
