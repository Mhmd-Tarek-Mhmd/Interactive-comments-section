import Counter from "../Counter";
import Controls from "./Controls";
import { bottom } from "./comment.module.css";

function Bottom({ commentId, replyId, score, username }) {
  return (
    <div className={bottom}>
      <Counter commentId={commentId} replyId={replyId} score={score} />
      <Controls username={username} />
    </div>
  );
}

export default Bottom;
