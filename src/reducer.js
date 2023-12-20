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
      return state;
    case "RandomKey":
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
