const rootReducer = (state = { ...stub(), windowDisplayed: false }, action) => {
  switch (action.type) {
    case "nextKey":
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

    case "randomKey":
      let newKeysWithRnd = [...state.keys];
      newKeysWithRnd.forEach((obj) => {
        obj.active = false;
      });
      newKeysWithRnd[Number(action.payload)].active = true;
      return { ...state, keys: newKeysWithRnd };

    case "tick":
      let newTime = state.time;
      newTime--;
      return { ...state, time: newTime };

    case "plusCorrect":
      let newCorrect = state.correct;
      newCorrect++;
      return { ...state, correct: newCorrect };

    case "plusErrors":
      let newErrors = state.errors;
      newErrors++;
      return { ...state, errors: newErrors };

    case "chengeStart":
      return { ...stub(), started: true, windowDisplayed: false };

    case "reset":
      return { ...stub(), windowDisplayed: false };

    case "setWindowDisplayed":
      return { ...state, windowDisplayed: action.payload };

    default:
      return state;
  }
};

function stub() {
  return {
    time: 20,
    timeFromRnd: 10,
    started: false,
    correct: 0,
    errors: 0,
    keys: [
      {
        letter: "Ф",
        hand: "left",
        keyKodes: [97, 1092],
        keys: ["a", "ф"],
        row: "center",
        active: false,
      },
      {
        letter: "Ы",
        hand: "left",
        keyKodes: [115, 1099],
        keys: ["ы", "s"],
        row: "center",
        active: false,
      },
      {
        letter: "В",
        hand: "left",
        keyKodes: [100, 1074],
        keys: ["d", "в"],
        row: "center",
        active: false,
      },
      {
        letter: "А",
        hand: "left",
        keyKodes: [102, 1072],
        keys: ["а", "f"],
        row: "center",
        active: false,
      },

      {
        letter: "О",
        hand: "right",
        keyKodes: [106, 1086],
        keys: ["j", "о"],
        row: "center",
        active: false,
      },
      {
        letter: "Л",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["л", "k"],
        row: "center",
        active: false,
      },
      {
        letter: "Д",
        hand: "right",
        keyKodes: [108, 1076],
        keys: ["l", "д"],
        row: "center",
        active: false,
      },
      {
        letter: "Ж",
        hand: "right",
        keyKodes: [59, 1078],
        keys: ["ж", ";"],
        row: "center",
        active: false,
      },
    ],
  };
}

export default rootReducer;
