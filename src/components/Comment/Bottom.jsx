import Counter from "../Counter";
import Controls from "./Controls";
import { bottom } from "./comment.module.css";

function Bottom({ id, parentId, score, username, toggleIsUpdate }) {
  return (
    <div className={bottom}>
      <Counter id={id} parentId={parentId} score={score} />
      <Controls
        id={id}
        parentId={parentId}
        username={username}
        toggleIsUpdate={toggleIsUpdate}
      />
    </div>
  );
}

export default Bottom;
