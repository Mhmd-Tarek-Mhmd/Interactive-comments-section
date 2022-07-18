import Counter from "../Counter";
import Controls from "./Controls";
import { bottom } from "./comment.module.css";

function Bottom({ id, parentId, score, username }) {
  return (
    <div className={bottom}>
      <Counter id={id} parentId={parentId} score={score} />
      <Controls username={username} />
    </div>
  );
}

export default Bottom;
