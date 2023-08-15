import React, { useState } from "react";
import { createContext } from "react";

export const movieContext = createContext("");

const Context = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <movieContext.Provider value={{ movie, setMovie, errorMessage, setErrorMessage }}>
        {children}
    </movieContext.Provider>
  );
};

export default Context;
