import { createContext, useState } from "react";

const actions = {};

export const Context = createContext();

export const Provider = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  actions.openModal = () => setIsOpened(true);
  actions.closeModal = (bool) =>
    new Promise((res) => {
      setIsOpened(false);
      res(bool);
    });

  return (
    <Context.Provider value={{ isOpened, actions }}>
      {props.children}
    </Context.Provider>
  );
};
