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
