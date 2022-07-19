import { useContext, useEffect, useRef } from "react";

import Context from "../../context";

import { backdrop, dialog, title, desc } from "./modal.module.css";

function Modal() {
  const confirm = useRef();
  const cancel = useRef();
  const { modal } = useContext(Context);

  useEffect(() => {
    const html = document.querySelector("html");
    const handleTrapFocus = (e) => {
      if (e.key !== "Tab") return;
      switch (document.activeElement) {
        case cancel.current:
          if (e.shiftKey) {
            e.preventDefault();
            confirm.current.focus();
          }
          break;
        case confirm.current:
          if (!e.shiftKey) {
            e.preventDefault();
            cancel.current.focus();
          }
          break;
      }
    };

    if (modal.isOpened) {
      cancel.current.focus();
      html.style.overflow = "hidden";
      window.addEventListener("keydown", handleTrapFocus);
    } else {
      html.style.overflow = "auto";
      window.removeEventListener("keydown", handleTrapFocus);
    }

    return () => window.removeEventListener("keydown", handleTrapFocus);
  }, [modal.isOpened]);

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
          <button ref={cancel} onClick={modal.actions.onCancel}>
            No, Cancel
          </button>
          <button ref={confirm} onClick={modal.actions.onConfirm}>
            Ok, Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
