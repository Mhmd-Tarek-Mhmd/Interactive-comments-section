export const storageKey = "comments";

export const addToLocalStorage = (state) =>
  localStorage.setItem(storageKey, JSON.stringify(state));

export const getFromLocalStorage = () => JSON.parse(localStorage[storageKey]);

export function commentFormat(content, user) {
  const date = new Date();

  return {
    id: date.getTime(),
    content,
    createdAt: date.getTime(),
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

export function toRelativeTime(oldTimestamp) {
  const date = new Date();
  const timestamp = date.getTime();
  const oldDate = new Date(oldTimestamp);
  const sec = Math.floor((timestamp - oldTimestamp) / 1000);
  const formatter = new Intl.RelativeTimeFormat();

  const getUnitNum = (unit) => {
    switch (unit) {
      case "second":
        return sec;
      case "minute":
        return Math.floor(sec / 60);
      case "hour":
        return Math.floor(sec / 3600); // 60 * 60
      case "day":
        return Math.floor(sec / 86400); // 60 * 60 * 24
      case "week":
        return Math.floor(sec / 604800); // 60 * 60 * 24 * 7
      case "month":
        return Math.floor(sec / 2592000); // 60 * 60 * 24 * 30
    }
  };

  const getFormat = (unit) => {
    return formatter.format(-getUnitNum(unit), unit);
  };

  if (sec < 60) {
    return getFormat("second");
  } else if (sec < 3600) {
    return getFormat("minute");
  } else if (sec < 86400) {
    return getFormat("hour");
  } else if (sec < 2620800) {
    if (getUnitNum("day") < 4) return getFormat("day");
    if (getUnitNum("week") <= 2) return getFormat("week");
    return oldDate.toLocaleDateString();
  } else if (sec < 31449600) {
    return getUnitNum("month") > 1
      ? oldDate.toLocaleDateString()
      : getFormat("month");
  }
}
