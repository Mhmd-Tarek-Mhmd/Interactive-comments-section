import {
  SET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  INCREASE_COMMENT_SCORE,
  DECREASE_COMMENT_SCORE,
  ADD_COMMENT_REPLY,
  UPDATE_COMMENT_REPLY,
  REMOVE_COMMENT_REPLY,
} from "./actions";

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;

    // Comment

    case ADD_COMMENT:
      return [...state, action.comment];
    case UPDATE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.id) comment.content = action.content;
        return comment;
      });
    case REMOVE_COMMENT:
      return state.filter((comment) => comment.id !== action.id);

    // Comment Score

    case INCREASE_COMMENT_SCORE:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return { ...comment, score: comment.score + 1 };
        } else {
          return comment;
        }
      });
    case DECREASE_COMMENT_SCORE:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return { ...comment, score: comment.score - 1 };
        } else {
          return comment;
        }
      });

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
      console.log("test");
      throw new Error();
  }
}
