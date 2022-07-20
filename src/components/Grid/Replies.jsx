import Comment from "../Comment";
import { replies } from "./grid.module.css";

function Replies({ comment }) {
  return (
    <ul className={replies}>
      {comment.replies.map((reply) => (
        <li key={reply.id}>
          <Comment comment={reply} parentId={comment.id} />
        </li>
      ))}
    </ul>
  );
}

export default Replies;
