import { useState, useEffect } from "react";

import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";
import Counter from "../Counter";
import { commentWrapper } from "./comment.module.css";

function Comment({ comment, replyId, replyingTo }) {
  const [isMobileMedia, setIsMobileMedia] = useState(window.innerWidth < 768);

  useEffect(() => {
    const cb = () => setIsMobileMedia(window.innerWidth < 767);
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);

  return (
    comment && (
      <article className={commentWrapper}>
        {!isMobileMedia && (
          <Counter commentId={comment.id} score={comment.score} />
        )}
        <div>
          <Top user={comment.user} timestamp={comment.createdAt} />
          <Content replyingTo={replyingTo} content={comment.content} />
          {isMobileMedia && (
            <Bottom
              commentId={comment.id}
              replyId={replyId}
              score={comment.score}
              username={comment.user.username}
            />
          )}
        </div>
      </article>
    )
  );
}

export default Comment;
