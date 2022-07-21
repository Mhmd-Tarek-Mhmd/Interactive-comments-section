import { useEffect, useContext } from "react";

import Context from "./context";
import { useFetch } from "./hooks";
import { storageKey, getFromLocalStorage } from "./utils/helpers";

import Grid from "./components/Grid";
import { Add } from "./components/Forms";

function App() {
  const { authedUser, comments } = useContext(Context);
  const [data, isLoading] = useFetch("data.json");

  useEffect(() => {
    if (!isLoading) {
      authedUser.actions.setAuthedUser(data.currentUser);
      localStorage[storageKey]
        ? comments.actions.setComments(getFromLocalStorage())
        : comments.actions.setComments(data.comments);
    }
  }, [isLoading]);

  return (
    <div role="region" aria-label="Comments section">
      <Grid />
      {authedUser.state && <Add />}
    </div>
  );
}

export default App;
