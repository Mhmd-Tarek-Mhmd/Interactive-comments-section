import { useState, useContext } from "react";

import Context from "../../context";

import { updateForm } from "./forms.module.css";

function Update({ parentId, id, prevContent, toggleIsUpdate }) {
  const [content, setContent] = useState(prevContent);
  const { comments } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    parentId
      ? comments.actions.updateReply(parentId, id, content)
      : comments.actions.updateComment(id, content);

    toggleIsUpdate();
  };

  return (
    <form className={updateForm} onSubmit={handleSubmit}>
      <textarea
        defaultValue={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>Update</button>
    </form>
  );
}

export default Update;
