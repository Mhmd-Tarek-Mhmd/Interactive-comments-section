export const storageKey = "comments";

export const addToLocalStorage = (state) =>
  localStorage.setItem(storageKey, JSON.stringify(state));

export const getFromLocalStorage = () => JSON.parse(localStorage[storageKey]);

export function commentFormat(content, user) {
  const date = new Date();

  return {
    id: date.getTime(),
    content,
    createdAt: date.toLocaleDateString(),
    score: 0,
    user,
    replies: [],
  };
}
export function replyFormat(content, replyingTo, user) {
  const date = new Date();

  return {
    id: date.getTime(),
    content,
    createdAt: date.toLocaleDateString(),
    score: 0,
    replyingTo,
    user,
  };
}
