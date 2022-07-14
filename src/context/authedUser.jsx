import { createContext, useState } from "react";

const actions = {};

export const Context = createContext();

export const Provider = (props) => {
  const [state, setState] = useState(null);

  actions.setAuthedUser = (user) => setState(user);

  return (
    <Context.Provider value={{ state, actions }}>
      {props.children}
    </Context.Provider>
  );
};
