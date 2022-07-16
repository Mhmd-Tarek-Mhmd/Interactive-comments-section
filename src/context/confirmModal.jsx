import { createContext, useState } from "react";

const actions = {};

export const Context = createContext();

let resolveCallback;

export const Provider = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  actions.onConfirm = () => {
    setIsOpened(false);
    resolveCallback(true);
  };

  actions.onCancel = () => {
    setIsOpened(false);
    resolveCallback(false);
  };

  actions.confirm = () => {
    setIsOpened(true);
    return new Promise((res) => {
      resolveCallback = res;
    });
  };

  return (
    <Context.Provider value={{ isOpened, actions }}>
      {props.children}
    </Context.Provider>
  );
};
