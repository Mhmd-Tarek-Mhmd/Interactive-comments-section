import { createContext, useReducer, useContext, useEffect } from "react";
import { Context as AuthedContext } from "../authedUser";

import {
  addToLocalStorage,
  commentFormat,
  replyFormat,
} from "../../utils/helpers";

import reducer from "./reducer";
import {
  setComments,
  addComment,
  updateComment,
  removeComment,
  increaseCommentScore,
  decreaseCommentScore,
  addReply,
  updateReply,
  removeReply,
  increaseReplyScore,
  decreaseReplyScore,
} from "./actions";

const actions = {};

export const Context = createContext();

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);
  const authedUser = useContext(AuthedContext);

  // addToLocalStorage when state changes (works as a middleware)
  useEffect(() => {
    state.length && addToLocalStorage(state);
  }, [state]);

  // Add actions
  actions.setComments = (comments) => dispatch(setComments(comments));

  actions.addComment = (content) =>
    dispatch(addComment(commentFormat(content, authedUser.state)));
  actions.updateComment = (id, content) => dispatch(updateComment(id, content));
  actions.removeComment = (id) => dispatch(removeComment(id));

  actions.increaseCommentScore = (id) => dispatch(increaseCommentScore(id));
  actions.decreaseCommentScore = (id) => dispatch(decreaseCommentScore(id));

  actions.addReply = (commentId, content, replyingTo) =>
    dispatch(
      addReply(commentId, replyFormat(content, replyingTo, authedUser.state))
    );
  actions.updateReply = (id, content) => dispatch(updateReply(id, content));
  actions.removeReply = (id) => dispatch(removeReply(id));

  actions.increaseReplyScore = (commentId, id) =>
    dispatch(increaseReplyScore(commentId, id));
  actions.decreaseReplyScore = (commentId, id) =>
    dispatch(decreaseReplyScore(commentId, id));

  return (
    <Context.Provider value={{ state, actions }}>
      {props.children}
    </Context.Provider>
  );
};
