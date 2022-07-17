import { useContext, useState, useEffect } from "react";

import Context from "../../context";
import { toRelativeTime } from "../../utils/helpers.js";

import Controls from "./Controls.jsx";
import { top, info, username } from "./comment.module.css";

function Top({ user, timestamp }) {
  const { authedUser } = useContext(Context);
  const [isHidden, setTsHidden] = useState(window.innerWidth < 767);

  useEffect(() => {
    const cb = () => setTsHidden(window.innerWidth < 767);
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);

  const date = typeof timestamp !== "number" ? "" : new Date(timestamp);
  const relativeTime =
    typeof timestamp !== "number" ? timestamp : toRelativeTime(timestamp);

  return (
    user && (
      <div className={top}>
        <div className={info}>
          <picture>
            <source srcSet={user.images.webp} type="image/webp" />
            <source srcSet={user.images.png} type="image/png" />
            <img src={user.images.png} alt={`Avatar of ${user.username}`} />
          </picture>

          <h2 className={username}>
            {user.username}
            {authedUser.state.username === user.username && <span>you</span>}
          </h2>

          <time dateTime={date ? date.toLocaleDateString() : ""}>
            {relativeTime}
          </time>
        </div>

        <Controls username={user.username} isHidden={isHidden} />
      </div>
    )
  );
}

export default Top;
