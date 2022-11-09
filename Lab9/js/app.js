(() => {
  "use strict";
  const keyValues = [
    {
      lang: "en",
      keys: [
        {
          shiftKey: "`",
          key: "~",
          code: "Backquote",
          isLetter: false,
        },
        {
          shiftKey: "!",
          key: "1",
          code: "Digit1",
          isLetter: false,
        },
        {
          shiftKey: "@",
          key: "2",
          code: "Digit2",
          isLetter: false,
        },
        {
          shiftKey: "#",
          key: "3",
          code: "Digit3",
          isLetter: false,
        },
        {
          shiftKey: "$",
          key: "4",
          code: "Digit4",
          isLetter: false,
        },
        {
          shiftKey: "%",
          key: "5",
          code: "Digit5",
          isLetter: false,
        },
        {
          shiftKey: "^",
          key: "6",
          code: "Digit6",
          isLetter: false,
        },
        {
          shiftKey: "&",
          key: "7",
          code: "Digit7",
          isLetter: false,
        },
        {
          shiftKey: "*",
          key: "8",
          code: "Digit8",
          isLetter: false,
        },
        {
          shiftKey: "(",
          key: "9",
          code: "Digit9",
          isLetter: false,
        },
        {
          shiftKey: ")",
          key: "0",
          code: "Digit0",
          isLetter: false,
        },
        {
          shiftKey: "_",
          key: "-",
          code: "Minus",
          isLetter: false,
        },
        {
          shiftKey: "+",
          key: "=",
          code: "Equal",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Backspace",
          code: "Backspace",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Tab",
          code: "Tab",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Q",
          code: "KeyQ",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "W",
          code: "KeyW",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "E",
          code: "KeyE",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "R",
          code: "KeyR",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "T",
          code: "KeyT",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Y",
          code: "KeyY",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "U",
          code: "KeyU",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "I",
          code: "KeyI",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "O",
          code: "KeyO",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "P",
          code: "KeyP",
          isLetter: true,
        },
        {
          shiftKey: "{",
          key: "[",
          code: "BracketLeft",
          isLetter: false,
        },
        {
          shiftKey: "}",
          key: "]",
          code: "BracketRight",
          isLetter: false,
        },
        {
          shiftKey: "|",
          key: "\\",
          code: "Backslash",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Del",
          code: "Delete",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Caps Lock",
          code: "CapsLock",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "A",
          code: "KeyA",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "S",
          code: "KeyS",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "D",
          code: "KeyD",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "F",
          code: "KeyF",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "G",
          code: "KeyG",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "H",
          code: "KeyH",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "J",
          code: "KeyJ",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "K",
          code: "KeyK",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "L",
          code: "KeyL",
          isLetter: true,
        },
        {
          shiftKey: ":",
          key: ";",
          code: "Semicolon",
          isLetter: false,
        },
        {
          shiftKey: '"',
          key: "'",
          code: "Quote",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Enter",
          code: "Enter",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Shift",
          code: "ShiftLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Z",
          code: "KeyZ",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "X",
          code: "KeyX",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "C",
          code: "KeyC",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "V",
          code: "KeyV",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "B",
          code: "KeyB",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "N",
          code: "KeyN",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "M",
          code: "KeyM",
          isLetter: true,
        },
        {
          shiftKey: "<",
          key: ",",
          code: "Comma",
          isLetter: false,
        },
        {
          shiftKey: ">",
          key: ".",
          code: "Period",
          isLetter: false,
        },
        {
          shiftKey: "?",
          key: "/",
          code: "Slash",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "↑",
          code: "ArrowUp",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Shift",
          code: "ShiftRight",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Ctrl",
          code: "ControlLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Win",
          code: "MetaLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Alt",
          code: "AltLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "",
          code: "Space",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Alt",
          code: "AltRight",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Ctrl",
          code: "ControlRight",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "←",
          code: "ArrowLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "↓",
          code: "ArrowDown",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "→",
          code: "ArrowRight",
          isLetter: false,
        },
      ],
    },
    {
      lang: "ru",
      keys: [
        {
          shiftKey: null,
          key: "Ё",
          code: "Backquote",
          isLetter: true,
        },
        {
          shiftKey: "!",
          key: "1",
          code: "Digit1",
          isLetter: false,
        },
        {
          shiftKey: "@",
          key: "2",
          code: "Digit2",
          isLetter: false,
        },
        {
          shiftKey: "#",
          key: "3",
          code: "Digit3",
          isLetter: false,
        },
        {
          shiftKey: "$",
          key: "4",
          code: "Digit4",
          isLetter: false,
        },
        {
          shiftKey: "%",
          key: "5",
          code: "Digit5",
          isLetter: false,
        },
        {
          shiftKey: "^",
          key: "6",
          code: "Digit6",
          isLetter: false,
        },
        {
          shiftKey: "&",
          key: "7",
          code: "Digit7",
          isLetter: false,
        },
        {
          shiftKey: "*",
          key: "8",
          code: "Digit8",
          isLetter: false,
        },
        {
          shiftKey: "(",
          key: "9",
          code: "Digit9",
          isLetter: false,
        },
        {
          shiftKey: ")",
          key: "0",
          code: "Digit0",
          isLetter: false,
        },
        {
          shiftKey: "_",
          key: "-",
          code: "Minus",
          isLetter: false,
        },
        {
          shiftKey: "+",
          key: "=",
          code: "Equal",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Backspace",
          code: "Backspace",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Tab",
          code: "Tab",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Й",
          code: "KeyQ",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ц",
          code: "KeyW",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "У",
          code: "KeyE",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "К",
          code: "KeyR",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Е",
          code: "KeyT",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Н",
          code: "KeyY",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Г",
          code: "KeyU",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ш",
          code: "KeyI",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Щ",
          code: "KeyO",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "З",
          code: "KeyP",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Х",
          code: "BracketLeft",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ъ",
          code: "BracketRight",
          isLetter: true,
        },
        {
          shiftKey: "/",
          key: "\\",
          code: "Backslash",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Del",
          code: "Delete",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Caps Lock",
          code: "CapsLock",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Ф",
          code: "KeyA",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ы",
          code: "KeyS",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "В",
          code: "KeyD",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "А",
          code: "KeyF",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "П",
          code: "KeyG",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Р",
          code: "KeyH",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "О",
          code: "KeyJ",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Л",
          code: "KeyK",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Д",
          code: "KeyL",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ж",
          code: "Semicolon",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Э",
          code: "Quote",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Enter",
          code: "Enter",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Shift",
          code: "ShiftLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Я",
          code: "KeyZ",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ч",
          code: "KeyX",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "С",
          code: "KeyC",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "М",
          code: "KeyV",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "И",
          code: "KeyB",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Т",
          code: "KeyN",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ь",
          code: "KeyM",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Б",
          code: "Comma",
          isLetter: true,
        },
        {
          shiftKey: null,
          key: "Ю",
          code: "Period",
          isLetter: true,
        },
        {
          shiftKey: ",",
          key: ".",
          code: "Slash",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "↑",
          code: "ArrowUp",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Shift",
          code: "ShiftRight",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Ctrl",
          code: "ControlLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Win",
          code: "MetaLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Alt",
          code: "AltLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "",
          code: "Space",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Alt",
          code: "AltRight",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "Ctrl",
          code: "ControlRight",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "←",
          code: "ArrowLeft",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "↓",
          code: "ArrowDown",
          isLetter: false,
        },
        {
          shiftKey: null,
          key: "→",
          code: "ArrowRight",
          isLetter: false,
        },
      ],
    },
  ];

  const keyboardBlock = document.querySelector(".keyboard");
  const textareaInput = document.querySelector("#editing");
  const stickyKeysWithoutShiftValue = ["Shift", "Alt", "Ctrl"];
  const capsLockValue = "Caps Lock";

  var currentLanguage = localStorage.getItem("lang");
  if (!currentLanguage) currentLanguage = "en";

  function setBigLetters() {
    var keys = keyboardBlock.querySelectorAll(`[data-is-letter="true"]`);
    keys.forEach((_) => {
      _.innerHTML = _.dataset.withoutShiftValue;
    });
  }

  function setSmallLetters() {
    var keys = keyboardBlock.querySelectorAll(`[data-is-letter="true"]`);
    keys.forEach((_) => {
      _.innerHTML = _.dataset.withoutShiftValue.toLowerCase();
    });
  }

  function addActiveClassToButton(key) {
    textareaInput.focus();
    key.classList.add("active");
  }

  function removeActiveClassToButton(key) {
    if (key.classList.contains("active")) {
      key.classList.remove("active");
      key.classList.add("remove");
      setTimeout(() => {
        key.classList.remove("remove");
      }, 200);
    }
    textareaInput.focus();
  }

  function addActiveClassToButtonWithStickyButton(container) {
    const withoutShiftValue = container.dataset.withoutShiftValue;
    if (isStickyKey(withoutShiftValue)) {
      keyboardBlock
        .querySelectorAll(`[data-without-shift-value="${withoutShiftValue}"]`)
        .forEach((_) => addActiveClassToButton(_));
      isUppercaseLetters() ? setBigLetters() : setSmallLetters();
      return;
    }
    addActiveClassToButton(container);
  }

  function removeActiveClassToStickyButtons(keyContainer) {
    const withoutShiftValue = keyContainer.dataset.withoutShiftValue;
    if (isStickyKey(withoutShiftValue))
      keyboardBlock
        .querySelectorAll(
          `:not([is-caps]).active:not([is-button-click]).active`
        )
        .forEach((_) => {
          removeActiveClassToButton(_);
        });
    if (!isStickyKey(withoutShiftValue))
      keyboardBlock
        .querySelectorAll(
          `:not([is-caps]).active:not([is-keyboard-click]).active`
        )
        .forEach((_) => {
          removeActiveClassToButton(_);
        });
    isUppercaseLetters() ? setBigLetters() : setSmallLetters();
  }

  function getAllButtonsByWithoutShiftValue(value) {
    return keyboardBlock.querySelectorAll(
      `[data-without-shift-value="${value}"]`
    );
  }

  function isStickyKey(value) {
    return stickyKeysWithoutShiftValue.includes(value);
  }

  function isUppercaseLetters() {
    const isCaps = keyboardBlock.querySelector("[is-caps]") ? true : false;
    const isShift = keyboardBlock.querySelector(
      '[data-without-shift-value="Shift"].active'
    )
      ? true
      : false;
    return isCaps ^ isShift;
  }

  function isShiftClick() {
    return keyboardBlock.querySelector(
      '[data-without-shift-value="Shift"].active'
    )
      ? true
      : false;
  }

  function isChangeLanguage() {
    return (
      keyboardBlock.querySelector(
        '[data-without-shift-value="Shift"].active'
      ) &&
      keyboardBlock.querySelector('[data-without-shift-value="Alt"].active')
    );
  }

  function changeLanguage() {
    const keys = keyValues.find((_) => _.lang !== currentLanguage);
    currentLanguage = keys.lang;
    localStorage.setItem("lang", currentLanguage);
    for (let i = 0; i < keys.keys.length; i++) {
      const key = keys.keys[i];
      const keyContainer = keyboardBlock.querySelector(
        `[data-key-code="${key.code}"]`
      );
      keyContainer.setAttribute("data-key-code", key.code);
      keyContainer.setAttribute("data-is-letter", key.isLetter);
      keyContainer.setAttribute("data-shift-value", key.shiftKey);
      keyContainer.setAttribute("data-without-shift-value", key.key);
      keyContainer.innerHTML = "";
      if (key.shiftKey) {
        const shiftKey = document.createElement("span");
        shiftKey.className = "key__shift";
        shiftKey.innerText = key.shiftKey;
        const withoutShiftKey = document.createElement("span");
        withoutShiftKey.className = "without-shift";
        withoutShiftKey.innerText = key.isLetter
          ? key.key.toLowerCase()
          : key.key;
        keyContainer.appendChild(shiftKey);
        keyContainer.appendChild(withoutShiftKey);
      } else
        keyContainer.innerText = key.isLetter ? key.key.toLowerCase() : key.key;
    }
  }
})();
