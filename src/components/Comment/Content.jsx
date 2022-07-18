import { contentTxt } from "./comment.module.css";

function Content({ replyingTo, content }) {
  return (
    <p className={contentTxt}>
      <strong>{replyingTo && `@${replyingTo}`}</strong> {content}
    </p>
  );
}

export default Content;
