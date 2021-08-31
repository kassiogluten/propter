import { createContext, useContext, useState } from "react";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isServicesOpen,
        setIsServicesOpen,
        isLinksOpen,
        setIsLinksOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
