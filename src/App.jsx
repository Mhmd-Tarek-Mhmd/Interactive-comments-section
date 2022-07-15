import { useEffect, useContext } from "react";

import Context from "./context";
import { storageKey, getFromLocalStorage } from "./utils/helpers";

function App() {
  const { authedUser, comments } = useContext(Context);

  useEffect(() => {
    if (localStorage[storageKey]) {
      comments.actions.setComments(getFromLocalStorage());
      fetch("data.json")
        .then((data) => data.json())
        .then((data) => authedUser.actions.setAuthedUser(data.currentUser));
    } else {
      fetch("data.json")
        .then((data) => data.json())
        .then((data) => {
          authedUser.actions.setAuthedUser(data.currentUser);
          comments.actions.setComments(data.comments);
        });
    }
  }, []);

  return <section aria-label="Comments section"></section>;
}

export default App;
