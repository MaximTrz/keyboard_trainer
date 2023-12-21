export const nextKey = () => {
  return {
    type: "NextKey",
  };
};

export const setKey = (payload) => {
  return {
    type: "RandomKey",
    payload,
  };
};

export const tick = (payload) => {
  return {
    type: "Tick",
  };
};
