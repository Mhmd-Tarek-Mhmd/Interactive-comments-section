import { useState, useContext } from "react";

import Context from "../../context";

import UserImage from "../Comment/UserImage";
import { addForm, comment, reply } from "./forms.module.css";

function Add({ parent, toggleIsAddReply }) {
  const [content, setContent] = useState("");
  const { comments, authedUser } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    parent
      ? comments.actions.addReply(parent.id, content, parent.user.username)
      : comments.actions.addComment(content);

    setContent("");
    toggleIsAddReply && toggleIsAddReply();
  };

  return (
    <form
      className={`${addForm} ${parent ? reply : comment}`}
      onSubmit={handleSubmit}
    >
      {authedUser.state && <UserImage user={authedUser.state} />}
      <textarea
        value={content}
        placeholder={`Add a ${parent ? "reply" : "comment"}...`}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>{parent ? "Reply" : "Send"}</button>
    </form>
  );
}

export default Add;
