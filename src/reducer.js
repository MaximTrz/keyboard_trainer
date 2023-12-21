const rootReducer = (
  state = {
    keys: keysStub(),
    started: false,
    time: 360,
    scores: 0,
    correct: 0,
    errors: 0,
  },
  action
) => {
  switch (action.type) {
    case "NextKey":
      let newKeys = [...state.keys];
      let currentActiveKey = newKeys.findIndex((key) => key.active === true);
      newKeys.forEach((obj) => {
        obj.active = false;
      });
      let newActiveIndex;
      if (currentActiveKey === -1 || currentActiveKey === newKeys.length - 1) {
        newActiveIndex = 0;
      } else {
        newActiveIndex = currentActiveKey + 1;
      }
      newKeys[newActiveIndex].active = true;
      return { ...state, keys: newKeys };

    case "RandomKey":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

function keysStub() {
  return [
    {
      letter: "Ф",
      hand: "left",
      keyKode: 97,
      row: "center",
      active: true,
    },
    {
      letter: "Ы",
      hand: "left",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "В",
      hand: "left",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "А",
      hand: "left",
      keyKode: 13,
      row: "center",
      active: false,
    },

    {
      letter: "О",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "Л",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "Д",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
    {
      letter: "Ж",
      hand: "right",
      keyKode: 13,
      row: "center",
      active: false,
    },
  ];
}

export default rootReducer;
