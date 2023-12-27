const rootReducer = (state = { ...stub(), windowDisplayed: false }, action) => {
  let members = state.keys.filter((key) => key.member);
  let oldKeys = state.keys;
  switch (action.type) {
    case "nextKey":
      let newKeys = [...members];
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

      oldKeys = oldKeys.map((oldKey) => {
        const matchingNewKey = newKeys.find(
          (newKey) => newKey.letter === oldKey.letter
        );
        return matchingNewKey ? matchingNewKey : oldKey;
      });

      return { ...state, keys: oldKeys };

    case "setKey":
      let newKeysWithRnd = [...members];
      newKeysWithRnd.forEach((obj) => {
        obj.active = false;
      });
      newKeysWithRnd[Number(action.payload)].active = true;

      oldKeys = oldKeys.map((oldKey) => {
        const matchingNewKey = newKeysWithRnd.find(
          (newKey) => newKey.letter === oldKey.letter
        );
        return matchingNewKey ? matchingNewKey : oldKey;
      });

      return { ...state, keys: oldKeys };

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
    time: 300,
    timeFromRnd: 150,
    started: false,
    correct: 0,
    errors: 0,
    keys: [
      {
        letter: "Й",
        hand: "left",
        keys: ["q", "й"],
        row: "top",
        active: false,
        member: true,
      },
      {
        letter: "Ц",
        hand: "left",
        keys: ["w", "ц"],
        row: "top",
        active: false,
        member: false,
      },
      {
        letter: "У",
        hand: "left",
        keys: ["у", "e"],
        row: "top",
        active: false,
        member: true,
      },
      {
        letter: "К",
        hand: "left",
        keys: ["r", "к"],
        row: "top",
        active: false,
        member: false,
      },
      {
        letter: "Е",
        hand: "left",
        keys: ["е", "t"],
        row: "top",
        active: false,
        member: true,
      },

      {
        letter: "Я",
        hand: "left",
        keys: ["z", "я"],
        row: "bottom",
        active: false,
        member: true,
      },
      {
        letter: "Ч",
        hand: "left",
        keys: ["ч", "x"],
        row: "bottom",
        active: false,
        member: false,
      },
      {
        letter: "С",
        hand: "left",
        keys: ["с", "c"],
        row: "bottom",
        active: false,
        member: true,
      },
      {
        letter: "М",
        hand: "left",
        keys: ["v", "м"],
        row: "bottom",
        active: false,
        member: false,
      },
      {
        letter: "И",
        hand: "left",
        keys: ["и", "b"],
        row: "bottom",
        active: false,
        member: true,
      },

      {
        letter: "Ф",
        hand: "left",
        keys: ["a", "ф"],
        row: "center",
        active: false,
        member: true,
      },
      {
        letter: "Ы",
        hand: "left",
        keys: ["ы", "s"],
        row: "center",
        active: false,
        member: true,
      },
      {
        letter: "В",
        hand: "left",
        keys: ["d", "в"],
        row: "center",
        active: false,
        member: true,
      },
      {
        letter: "А",
        hand: "left",
        keys: ["а", "f"],
        row: "center",
        active: false,
        member: true,
      },
      {
        letter: "П",
        hand: "left",
        keys: ["п", "g"],
        row: "center",
        active: false,
        member: false,
      },

      {
        letter: "Н",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["н", "y"],
        row: "top",
        active: false,
        member: true,
      },

      {
        letter: "Г",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["u", "г"],
        row: "top",
        active: false,
        member: false,
      },

      {
        letter: "Ш",
        hand: "right",
        keys: ["ш", "i"],
        row: "top",
        active: false,
        member: true,
      },

      {
        letter: "Щ",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["щ", "o"],
        row: "top",
        active: false,
        member: false,
      },

      {
        letter: "З",
        hand: "right",
        keys: ["з", "p"],
        row: "top",
        active: false,
        member: true,
      },

      {
        letter: "Х",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["х", "["],
        row: "top",
        active: false,
        member: false,
      },

      {
        letter: "Ъ",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["ъ", "]"],
        row: "top",
        active: false,
        member: true,
      },

      {
        letter: "Р",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["h", "р"],
        row: "center",
        active: false,
        member: false,
      },

      {
        letter: "О",
        hand: "right",
        keyKodes: [106, 1086],
        keys: ["j", "о"],
        row: "center",
        active: false,
        member: true,
      },

      {
        letter: "Л",
        hand: "right",
        keyKodes: [107, 1083],
        keys: ["л", "k"],
        row: "center",
        active: false,
        member: true,
      },
      {
        letter: "Д",
        hand: "right",
        keyKodes: [108, 1076],
        keys: ["l", "д"],
        row: "center",
        active: false,
        member: true,
      },
      {
        letter: "Ж",
        hand: "right",
        keyKodes: [59, 1078],
        keys: ["ж", ";"],
        row: "center",
        active: false,
        member: true,
      },
      {
        letter: "Э",
        hand: "right",
        keyKodes: [59, 1078],
        keys: ["э", "'"],
        row: "center",
        active: false,
        member: false,
      },
      {
        letter: "Т",
        hand: "right",
        keyKodes: [59, 1078],
        keys: ["n", "т"],
        row: "bottom",
        active: false,
        member: true,
      },
      {
        letter: "Ь",
        hand: "right",
        keyKodes: [59, 1078],
        keys: ["ь", "m"],
        row: "bottom",
        active: false,
        member: false,
      },
      {
        letter: "Б",
        hand: "right",
        keyKodes: [59, 1078],
        keys: ["б", ","],
        row: "bottom",
        active: false,
        member: true,
      },
      {
        letter: "Ю",
        hand: "right",
        keyKodes: [59, 1078],
        keys: ["ю", "."],
        row: "bottom",
        active: false,
        member: false,
      },
      {
        letter: ".",
        hand: "right",
        keyKodes: [59, 1078],
        keys: [".", "/"],
        row: "bottom",
        active: false,
        member: false,
      },
    ],
  };
}

export default rootReducer;
