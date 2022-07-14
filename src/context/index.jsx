import { createContext, useContext } from "react";

import { Context as ModalContext, Provider as ModalProvider } from "./modal";
import {
  Context as AuthedContext,
  Provider as AuthedProvider,
} from "./authedUser";
import {
  Context as CommentsContext,
  Provider as CommentsProvider,
} from "./comments";

/*
  [1] Providers Wrapper
*/

function ProvidersWrapper(props) {
  return (
    <ModalProvider>
      <AuthedProvider>
        <CommentsProvider>
          <ProviderConfig>{props.children}</ProviderConfig>
        </CommentsProvider>
      </AuthedProvider>
    </ModalProvider>
  );
}

/*
  [2] Global Provider
*/

const Context = createContext();

function ProviderConfig(props) {
  const modal = useContext(ModalContext);
  const authedUser = useContext(AuthedContext);
  const comments = useContext(CommentsContext);

  return (
    <Context.Provider value={{ modal, authedUser, comments }}>
      {props.children}
    </Context.Provider>
  );
}

export function Provider(props) {
  return <ProvidersWrapper>{props.children}</ProvidersWrapper>;
}
export default Context;
