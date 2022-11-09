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

  if (textareaInput) {
    textareaInput.addEventListener("keydown", (event) => {
      check_tab(event.target, event);
    });
  }

  function check_tab(element, event) {
    element.value;
    if ("Tab" == event.key) {
      event.preventDefault();
      insertTab();
    }
  }
  function insertTab() {
    let code = textareaInput.value;
    let before_tab = code.slice(0, textareaInput.selectionStart);
    let after_tab = code.slice(textareaInput.selectionEnd, code.length);
    let cursor_pos = textareaInput.selectionStart + 1;
    textareaInput.value = before_tab + "\t" + after_tab;
    textareaInput.selectionStart = cursor_pos;
    textareaInput.selectionEnd = cursor_pos;
  }
  function insertWhiteSpaces() {
    let code = textareaInput.value;
    let before_tab = code.slice(0, textareaInput.selectionStart);
    let after_tab = code.slice(textareaInput.selectionEnd, code.length);
    let cursor_pos = textareaInput.selectionStart + 1;
    textareaInput.value = before_tab + " " + after_tab;
    textareaInput.selectionStart = cursor_pos;
    textareaInput.selectionEnd = cursor_pos;
  }
  function insertEnter() {
    let code = textareaInput.value;
    let before_tab = code.slice(0, textareaInput.selectionStart);
    let after_tab = code.slice(textareaInput.selectionEnd, code.length);
    let cursor_pos = textareaInput.selectionStart + 1;
    textareaInput.value = before_tab + "\n" + after_tab;
    textareaInput.selectionStart = cursor_pos;
    textareaInput.selectionEnd = cursor_pos;
  }
  function deleteClick() {
    let code = textareaInput.value;
    let before_tab = code.slice(0, textareaInput.selectionStart);
    let after_tab = code.slice(textareaInput.selectionEnd + 1, code.length);
    let cursor_pos = textareaInput.selectionStart;
    textareaInput.value = before_tab + after_tab;
    textareaInput.selectionStart = cursor_pos;
    textareaInput.selectionEnd = cursor_pos;
  }
  function backspaceClick() {
    let code = textareaInput.value;
    let before_tab = code.slice(0, textareaInput.selectionStart - 1);
    let after_tab = code.slice(textareaInput.selectionEnd, code.length);
    let cursor_pos = textareaInput.selectionStart - 1;
    textareaInput.value = before_tab + after_tab;
    textareaInput.selectionStart = cursor_pos;
    textareaInput.selectionEnd = cursor_pos;
  }
  function cursorMoveUp() {
    let cursor_pos = textareaInput.selectionStart;
    let text = textareaInput.value;
    const strings = text.split("\n");
    const cursorRow = text.substr(0, cursor_pos).split("\n").length;
    const cursorCurrentTextStart =
      strings.slice(0, cursorRow - 1).join("").length + cursorRow - 1;
    const rowStartToCursorPosition = cursor_pos - cursorCurrentTextStart;
    let newCursorPosition =
      strings.slice(0, cursorRow - 2).join("").length +
      cursorRow -
      2 +
      rowStartToCursorPosition;
    if (
      strings[cursorRow - 2] &&
      rowStartToCursorPosition > strings[cursorRow - 2].length
    )
      newCursorPosition = strings.slice(0, cursorRow - 1).join("").length;
    if (1 === cursorRow) newCursorPosition = 0;
    textareaInput.selectionStart = newCursorPosition;
    textareaInput.selectionEnd = newCursorPosition;
  }
  function cursorMoveDown() {
    let cursor_pos = textareaInput.selectionStart;
    let text = textareaInput.value;
    const strings = text.split("\n");
    const cursorRow = text.substr(0, cursor_pos).split("\n").length;
    const cursorCurrentTextStart =
      strings.slice(0, cursorRow - 1).join("").length + cursorRow - 1;
    const rowStartToCursorPosition = cursor_pos - cursorCurrentTextStart;
    let newCursorPosition =
      strings.slice(0, cursorRow).join("").length +
      cursorRow +
      rowStartToCursorPosition;
    if (
      strings[cursorRow] &&
      rowStartToCursorPosition > strings[cursorRow].length
    )
      newCursorPosition =
        strings.slice(0, cursorRow + 1).join("").length + cursorRow;
    if (cursorRow === strings.length) newCursorPosition = text.length;
    textareaInput.selectionStart = newCursorPosition;
    textareaInput.selectionEnd = newCursorPosition;
  }
  function cursorMoveLeft() {
    textareaInput.selectionStart = textareaInput.selectionStart;
    textareaInput.selectionEnd = textareaInput.selectionStart - 1;
  }
  function cursorMoveRight() {
    textareaInput.selectionStart = textareaInput.selectionStart + 1;
    textareaInput.selectionEnd = textareaInput.selectionStart;
  }

  const fragment = document.createDocumentFragment();
  const keys = keyValues.find((_) => _.lang === currentLanguage).keys;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const keyContainer = document.createElement("div");
    keyContainer.className = "keyboard__key key";
    keyContainer.setAttribute("data-key-code", key.code);
    keyContainer.setAttribute("data-is-letter", key.isLetter);
    keyContainer.setAttribute("data-shift-value", key.shiftKey);
    keyContainer.setAttribute("data-without-shift-value", key.key);
    setKetEventListeners(keyContainer);
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
    fragment.appendChild(keyContainer);
  }
  keyboardBlock.appendChild(fragment);

  function setKetEventListeners(key) {
    key.addEventListener("mousedown", keyMouseDown);
    key.addEventListener("mouseup", keyMouseUp);
    key.addEventListener("mouseout", keyMouseOut);
  }

  function keyMouseDown(e) {
    const container = e.target.closest(".key");
    addActiveClassToButtonWithStickyButton(container);
    switch (container.dataset.withoutShiftValue) {
      case "Tab":
        insertTab();
        break;

      case "Caps Lock":
      case "Shift":
      case "Ctrl":
      case "Alt":
      case "Win":
        break;

      case "":
        insertWhiteSpaces();
        break;

      case "Enter":
        insertEnter();
        break;

      case "Del":
        deleteClick();
        break;

      case "Backspace":
        backspaceClick();
        break;

      case "↑":
        cursorMoveUp();
        break;

      case "←":
        cursorMoveLeft();
        break;

      case "↓":
        cursorMoveDown();
        break;

      case "→":
        cursorMoveRight();
        break;

      default:
        const isLetter = "true" === container.dataset.isLetter;
        let value;
        if (isLetter)
          value = isUppercaseLetters()
            ? container.dataset.withoutShiftValue
            : container.dataset.withoutShiftValue.toLowerCase();
        else
          value = isShiftClick()
            ? container.dataset.shiftValue
            : container.dataset.withoutShiftValue;
        insertAtCursor(textareaInput, value);
        break;
    }
  }

  function keyMouseUp(e) {
    const container = e.target.closest(".key");
    removeActive(container);
  }

  function keyMouseOut(e) {
    if (
      e.target.classList.contains("active") &&
      !isStickyKey(e.target.dataset.withoutShiftValue) &&
      e.target.dataset.withoutShiftValue !== capsLockValue
    )
      removeActive(e.target);
  }

  function removeActive(keyContainer) {
    const withoutShiftValue = keyContainer.dataset.withoutShiftValue;
    if (
      isStickyKey(withoutShiftValue) &&
      !keyContainer.hasAttribute("is-button-click")
    )
      getAllButtonsByWithoutShiftValue(withoutShiftValue).forEach((_) => {
        _.setAttribute("is-button-click", "");
      });
    else
      keyboardBlock.querySelectorAll(`[is-button-click]`).forEach((_) => {
        _.removeAttribute("is-button-click");
      });
    if (
      isStickyKey(withoutShiftValue) &&
      !keyContainer.hasAttribute("is-button-click")
    )
      if (isChangeLanguage()) changeLanguage();
    if (withoutShiftValue === capsLockValue)
      !keyContainer.hasAttribute("is-caps")
        ? keyContainer.setAttribute("is-caps", "")
        : keyContainer.removeAttribute("is-caps");
    removeActiveClassToStickyButtons(keyContainer);
  }

  function insertAtCursor(myField, myValue) {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value =
      myField.value.substring(0, startPos) +
      myValue +
      myField.value.substring(endPos, myField.value.length);
    myField.selectionEnd = (
      myField.value.substring(0, startPos) + myValue
    ).length;
  }

  window.addEventListener("blur", (event) => {
    const keys = document.querySelectorAll(".key");
    keys.forEach((_) => {
      if ("Alt" === _.dataset.withoutShiftValue) removeActiveClassToButton(_);
      _.removeAttribute("is-keyboard-click");
      _.removeAttribute("is-button-click");
      _.removeAttribute("is-caps");
    });
  });

  window.addEventListener("keydown", function (e) {
    if (9 === e.which || "AltLeft" === e.code) e.preventDefault();
    const key = document.querySelector(`[data-key-code=${e.code}]`);
    const withoutShiftValue = key.dataset.withoutShiftValue;
    if (isStickyKey(withoutShiftValue))
      getAllButtonsByWithoutShiftValue(withoutShiftValue).forEach((_) => {
        _.setAttribute("is-keyboard-click", "");
      });
    addActiveClassToButtonWithStickyButton(key);
  });

  window.addEventListener("keyup", function (e) {
    const key = document.querySelector(`[data-key-code=${e.code}]`);
    const withoutShiftValue = key.dataset.withoutShiftValue;
    if (isStickyKey(withoutShiftValue)) {
      getAllButtonsByWithoutShiftValue(withoutShiftValue).forEach((_) => {
        _.removeAttribute("is-keyboard-click");
      });
      keyboardBlock.querySelectorAll(`[is-button-click]`).forEach((_) => {
        _.removeAttribute("is-button-click");
      });
    }
    if (withoutShiftValue === capsLockValue)
      !key.hasAttribute("is-caps")
        ? key.setAttribute("is-caps", "")
        : key.removeAttribute("is-caps");
    if (isChangeLanguage()) changeLanguage();
    removeActiveClassToStickyButtons(key);
  });
})();
