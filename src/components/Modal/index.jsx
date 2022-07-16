import { useContext } from "react";

import Context from "../../context";

import { backdrop, dialog, title, desc } from "./modal.module.css";

function Modal() {
  const { modal } = useContext(Context);

  return (
    <div className={backdrop} hidden={!modal.isOpened}>
      <div
        className={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <h2 className={title} id="modal-title">
          Delete comment
        </h2>
        <p className={desc} id="modal-desc">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>

        <form method="dialog">
          <button onClick={modal.actions.onCancel}>No, Cancel</button>
          <button onClick={modal.actions.onConfirm}>Ok, Delete</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
