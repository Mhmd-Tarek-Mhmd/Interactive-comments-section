export const SET_COMMENTS = "SET_COMMENTS";

export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const INCREASE_COMMENT_SCORE = "INCREASE_COMMENT_SCORE";
export const DECREASE_COMMENT_SCORE = "DECREASE_COMMENT_SCORE";

export const ADD_COMMENT_REPLY = "ADD_COMMENT_REPLY";
export const UPDATE_COMMENT_REPLY = "UPDATE_COMMENT_REPLY";
export const REMOVE_COMMENT_REPLY = "REMOVE_COMMENT_REPLY";

// Actions

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  comments,
});

// comment

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});
export const updateComment = (id, content) => ({
  type: UPDATE_COMMENT,
  id,
  content,
});
export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  id,
});

// comment score

export const increaseCommentScore = (id) => ({
  type: INCREASE_COMMENT_SCORE,
  id,
});
export const decreaseCommentScore = (id) => ({
  type: DECREASE_COMMENT_SCORE,
  id,
});

// comment reply

export const addReply = (commentId, reply) => ({
  type: ADD_COMMENT_REPLY,
  commentId,
  reply,
});
export const updateReply = (id, content) => ({
  type: UPDATE_COMMENT_REPLY,
  id,
  content,
});
export const removeReply = (id) => ({
  type: REMOVE_COMMENT_REPLY,
  id,
});
