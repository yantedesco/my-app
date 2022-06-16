import { createContext, useState } from "react";

export const estadoContexto = {
  nome: "Yan"
};

export const DataContext = createContext(null);

export const Context = (props) => {
  const [nome, setNome] = useState();

  const handleSetNome = (evento) => {
    setNome(evento.target.value);
  };

  return (
    <DataContext.Provider value={{ nome, handleSetNome }}>{props.children}</DataContext.Provider>
  );
};
