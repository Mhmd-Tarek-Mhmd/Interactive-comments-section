import {
  SET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  ADD_COMMENT_REPLY,
  UPDATE_COMMENT_REPLY,
  REMOVE_COMMENT_REPLY,
} from "./actions";

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;

    // Comments

    case ADD_COMMENT:
      return [...state, action.comment];
    case UPDATE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) comment.content = action.content;
        return comment;
      });
    case REMOVE_COMMENT:
      return state.filter((comment) => comment.id !== action.id);

    // Comments Reply

    case ADD_COMMENT_REPLY:
      return [...state.replies, action.reply];
    case UPDATE_COMMENT_REPLY:
      return state.map((comment) => {
        if (comment.replies.id === action.id)
          comment.replies.content = action.content;
        return comment;
      });
    case REMOVE_COMMENT_REPLY:
      return state.filter((comment) => comment.replies.id !== action.id);

    default:
      throw new Error();
  }
}
