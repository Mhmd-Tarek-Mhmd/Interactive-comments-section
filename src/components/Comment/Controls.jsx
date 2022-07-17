import { useContext } from "react";

import Context from "../../context";

import { Reply, Edit, Delete } from "../IconButtons";
import { controls } from "./comment.module.css";

function Controls({ username, isHidden }) {
  const { authedUser } = useContext(Context);

  return (
    <div hidden={isHidden} className={controls}>
      {authedUser.state?.username === username ? (
        <>
          <Delete />
          <Edit />
        </>
      ) : (
        <Reply />
      )}
    </div>
  );
}

export default Controls;
