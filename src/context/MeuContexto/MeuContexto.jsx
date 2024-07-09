import { createContext } from "react";
import UseDadosGithub from "../../hooks/UseDadosGithub";

export const MeuContexto = createContext(null);

export const UseContextProvider = ({ children }) => {
  const { data: date} = UseDadosGithub();

  return (
    <MeuContexto.Provider value={{ date }}>{children}</MeuContexto.Provider>
  );
};
