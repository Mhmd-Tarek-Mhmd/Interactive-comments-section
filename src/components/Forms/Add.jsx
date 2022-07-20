import { useState, useContext } from "react";

import Context from "../../context";

import UserImage from "../Comment/UserImage";
import { addForm, comment, reply } from "./forms.module.css";

function Add({ parent, user }) {
  const [content, setContent] = useState("");
  const { comments } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    parent
      ? comments.actions.addReply(parent.id, content, parent.user.username)
      : comments.actions.addComment(content);
  };

  return (
    <form
      className={`${addForm} ${parent ? reply : comment}`}
      onSubmit={handleSubmit}
    >
      <UserImage user={user} />
      <textarea
        defaultValue={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>{parent ? "Reply" : "Send"}</button>
    </form>
  );
}

export default Add;
