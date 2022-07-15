import { createContext, useReducer } from "react";

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
} from "./actions";

/*
  Helpers
*/

const commentFormat = (content, user) => {
  const date = new Date();
  return {
    id: date.getTime(),
    content,
    createdAt: date.toLocaleDateString(),
    score: 0,
    user,
    replies: [],
  };
};
const replyFormat = (content, replyingTo, user) => {
  const date = new Date();
  return {
    id: date.getTime(),
    content,
    createdAt: date.toLocaleDateString(),
    score: 0,
    replyingTo,
    user,
  };
};

/*
  Context
*/

const actions = {};

export const Context = createContext();

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  actions.setComments = (comments) => dispatch(setComments(comments));

  actions.addComment = (content, user) =>
    dispatch(addComment(commentFormat(content, user)));
  actions.updateComment = (id, content) => dispatch(updateComment(id, content));
  actions.removeComment = (id) => dispatch(removeComment(id));

  actions.increaseCommentScore = (id) => dispatch(increaseCommentScore(id));
  actions.decreaseCommentScore = (id) => dispatch(decreaseCommentScore(id));

  actions.addReply = (content, user) =>
    dispatch(addReply(replyFormat(content, replyingTo, user)));
  actions.updateReply = (id, content) => dispatch(updateReply(id, content));
  actions.removeReply = (id) => dispatch(removeReply(id));

  return (
    <Context.Provider value={{ state, actions }}>
      {props.children}
    </Context.Provider>
  );
};
