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

export const tick = () => {
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

export const closeModal = () => {
  return {
    type: "setWindowDisplayed",
    payload: false,
  };
};

export const showModal = () => {
  return {
    type: "setWindowDisplayed",
    payload: true,
  };
};
