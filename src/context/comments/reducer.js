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
  INCREASE_REPLY_SCORE,
  DECREASE_REPLY_SCORE,
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
        if (comment.id === action.id) {
          return { ...comment, content: action.content };
        } else {
          return comment;
        }
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
      return state.map((comment) => {
        if (comment.id === action.commentId) {
          return {
            ...comment,
            replies: [...comment.replies, action.reply],
          };
        } else {
          return comment;
        }
      });
    case UPDATE_COMMENT_REPLY:
      return state.map((comment) => {
        if (comment.replies.length) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              return reply.id === action.id
                ? { ...reply, content: action.content }
                : reply;
            }),
          };
        } else {
          return comment;
        }
      });
    case REMOVE_COMMENT_REPLY:
      return state.map((comment) => {
        if (comment.replies.length) {
          return {
            ...comment,
            replies: comment.replies.filter(
              (comment) => comment.id !== action.id
            ),
          };
        } else {
          return comment;
        }
      });

    // Comment Reply Score

    case INCREASE_REPLY_SCORE:
      return state.map((comment) => {
        if (comment.id === action.commentId) {
          const reply = comment.replies.find((r) => r.id === action.id);

          return {
            ...comment,
            replies: comment.replies.map((r) => {
              return r.id !== action.id
                ? r
                : { ...reply, score: reply.score + 1 };
            }),
          };
        } else {
          return comment;
        }
      });
    case DECREASE_REPLY_SCORE:
      return state.map((comment) => {
        if (comment.id === action.commentId) {
          const reply = comment.replies.find((r) => r.id === action.id);

          return {
            ...comment,
            replies: comment.replies.map((r) => {
              return r.id !== action.id
                ? r
                : { ...reply, score: reply.score - 1 };
            }),
          };
        } else {
          return comment;
        }
      });

    default:
      throw new Error();
  }
}
