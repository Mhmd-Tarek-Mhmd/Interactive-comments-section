import { useState, useEffect } from "react";

import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";
import Counter from "../Counter";
import { commentWrapper } from "./comment.module.css";

function Comment({ comment, parentId }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isMobileMedia, setIsMobileMedia] = useState(window.innerWidth < 768);

  useEffect(() => {
    const cb = () => setIsMobileMedia(window.innerWidth < 768);
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);

  const toggleIsUpdate = () => setIsUpdate(!isUpdate);

  return (
    comment && (
      <article className={commentWrapper}>
        {!isMobileMedia && (
          <Counter id={comment.id} parentId={parentId} score={comment.score} />
        )}
        <div style={{ width: "100%" }}>
          <Top
            id={comment.id}
            parentId={parentId}
            user={comment.user}
            timestamp={comment.createdAt}
            isMobileMedia={isMobileMedia}
            toggleIsUpdate={toggleIsUpdate}
          />
          <Content
            id={comment.id}
            parentId={parentId}
            isUpdate={isUpdate}
            replyingTo={comment?.replyingTo}
            content={comment.content}
            toggleIsUpdate={toggleIsUpdate}
          />
          {isMobileMedia && (
            <Bottom
              id={comment.id}
              parentId={parentId}
              score={comment.score}
              username={comment.user.username}
              toggleIsUpdate={toggleIsUpdate}
            />
          )}
        </div>
      </article>
    )
  );
}

export default Comment;
