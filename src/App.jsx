import { useEffect, useContext } from "react";

import Context from "./context";
import { useFetch } from "./hooks";
import { storageKey, getFromLocalStorage } from "./utils/helpers";

import Grid from "./components/Grid";
import { Add } from "./components/Forms";

function App() {
  const { authedUser, comments } = useContext(Context);
  const [data] = useFetch("data.json");

  useEffect(() => {
    if (data) {
      authedUser.actions.setAuthedUser(data.currentUser);
      localStorage[storageKey]
        ? comments.actions.setComments(getFromLocalStorage())
        : comments.actions.setComments(data.comments);
    }
  }, [data]);

  return (
    <section aria-label="Comments section">
      <Grid />
      {authedUser.state && <Add />}
    </section>
  );
}

export default App;
