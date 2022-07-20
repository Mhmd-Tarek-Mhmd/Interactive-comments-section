import { useState, useEffect } from "react";

import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";
import Counter from "../Counter";
import { Add } from "../Forms";
import { commentWrapper } from "./comment.module.css";

function Comment({ comment, parentId }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAddReply, setIsAddReply] = useState(false);
  const [isMobileMedia, setIsMobileMedia] = useState(window.innerWidth < 768);

  useEffect(() => {
    const cb = () => setIsMobileMedia(window.innerWidth < 768);
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);

  const toggleIsUpdate = () => setIsUpdate(!isUpdate);
  const toggleIsAddReply = () => setIsAddReply(!isAddReply);

  return (
    comment && (
      <div>
        <article className={commentWrapper}>
          {!isMobileMedia && (
            <Counter
              id={comment.id}
              parentId={parentId}
              score={comment.score}
            />
          )}
          <div style={{ width: "100%" }}>
            <Top
              id={comment.id}
              parentId={parentId}
              user={comment.user}
              timestamp={comment.createdAt}
              isMobileMedia={isMobileMedia}
              toggleIsUpdate={toggleIsUpdate}
              toggleIsAddReply={toggleIsAddReply}
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
                toggleIsAddReply={toggleIsAddReply}
              />
            )}
          </div>
        </article>
        {isAddReply && (
          <Add parent={comment} toggleIsAddReply={toggleIsAddReply} />
        )}
      </div>
    )
  );
}

export default Comment;
