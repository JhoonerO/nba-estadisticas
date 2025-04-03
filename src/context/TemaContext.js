import { createContext, useContext, useState } from "react";

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [oscuro, setOscuro] = useState(false);

  const toggleTema = () => {
    setOscuro((prev) => !prev);
    document.body.classList.toggle("modo-oscuro");
  };

  return (
    <TemaContext.Provider value={{ oscuro, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}
