import { useEffect, useContext } from "react";

import Context from "./context";

function App() {
  const { authedUser, comments } = useContext(Context);

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => {
        authedUser.actions.setAuthedUser(data.currentUser);
        comments.actions.setComments(data.comments);
      });
  }, []);

  return <section aria-label="Comments section"></section>;
}

export default App;
