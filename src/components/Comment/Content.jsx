import { Update } from "../Forms";
import { contentTxt } from "./comment.module.css";

function Content({
  isUpdate,
  parentId,
  id,
  replyingTo,
  content,
  toggleIsUpdate,
}) {
  return !isUpdate ? (
    <p className={contentTxt}>
      <strong>{replyingTo && `@${replyingTo}`}</strong> {content}
    </p>
  ) : (
    <Update
      parentId={parentId}
      id={id}
      prevContent={content}
      toggleIsUpdate={toggleIsUpdate}
    />
  );
}

export default Content;
