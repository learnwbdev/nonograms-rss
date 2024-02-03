const CROSS = -1;
const EMPTY = 0;
const FILLED = 1;

const stateToChar = {
  [CROSS]: "c",
  [EMPTY]: "e",
  [FILLED]: "f",
};

const charToState = {
  c: CROSS,
  e: EMPTY,
  f: FILLED,
};

const regExpStates = Object.keys(charToState).join("|");
const regExpStr = `([${regExpStates}])([0-9]*)`;
const regExpWithStates = new RegExp(regExpStr, "g");

export { CROSS, EMPTY, FILLED, stateToChar, charToState, regExpWithStates };
