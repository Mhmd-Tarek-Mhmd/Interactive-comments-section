import { useContext } from "react";

import Context from "../../context";

import { Reply, Edit, Delete } from "../IconButtons";
import { controls } from "./comment.module.css";

function Controls({ username, isHidden, id, parentId }) {
  const { authedUser, comments, modal } = useContext(Context);

  const handleDelete = async () => {
    const isDelete = await modal.actions.confirm();

    if (isDelete) {
      parentId
        ? comments.actions.removeReply(parentId, id)
        : comments.actions.removeComment(id);
    }
  };

  return (
    <div hidden={isHidden} className={controls}>
      {authedUser.state?.username === username ? (
        <>
          <Delete onClick={handleDelete} />
          <Edit />
        </>
      ) : (
        <Reply />
      )}
    </div>
  );
}

export default Controls;
