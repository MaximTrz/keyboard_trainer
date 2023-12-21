export const nextKey = () => {
  return {
    type: "nextKey",
  };
};

export const setKey = (payload) => {
  return {
    type: "randomKey",
    payload,
  };
};

export const tick = (payload) => {
  return {
    type: "tick",
  };
};

export const plusCorrect = () => {
  return {
    type: "plusCorrect",
  };
};

export const plusErrors = () => {
  return {
    type: "plusErrors",
  };
};

export const chengeStart = () => {
  return {
    type: "chengeStart",
  };
};
