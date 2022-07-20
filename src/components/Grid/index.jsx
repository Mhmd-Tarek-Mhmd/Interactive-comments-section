import { useContext } from "react";

import Context from "../../context";

import Comment from "../Comment";
import Replies from "./Replies";
import { grid } from "./grid.module.css";

function Grid() {
  const { comments } = useContext(Context);

  return (
    <ul className={grid}>
      {comments.state.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
          {comment.replies.length ? <Replies comment={comment} /> : null}
        </li>
      ))}
    </ul>
  );
}

export default Grid;
