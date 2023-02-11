import { useContext } from "react";

import Context from "../../context";
import { toRelativeTime } from "../../utils/helpers.js";

import UserImage from "./UserImage";
import Controls from "./Controls.jsx";
import { top, info, username } from "./comment.module.css";

function Top({ user, timestamp, isMobileMedia, id, parentId, toggleIsUpdate, toggleIsAddReply }) {
  const { authedUser } = useContext(Context);

  const date = typeof timestamp !== "number" ? "" : new Date(timestamp);
  const relativeTime =
    typeof timestamp !== "number" ? timestamp : toRelativeTime(timestamp);

  return (
    user && (
      <div className={top}>
        <div className={info}>
          <UserImage user={user} />
          <h2 className={username}>
            {user.username}
            {authedUser.state.username === user.username && <span>you</span>}
          </h2>
          <span>{relativeTime}</span>
        </div>

        <Controls
          id={id}
          parentId={parentId}
          username={user.username}
          isHidden={isMobileMedia}
          toggleIsUpdate={toggleIsUpdate}
          toggleIsAddReply={toggleIsAddReply}
        />
      </div>
    )
  );
}

export default Top;
