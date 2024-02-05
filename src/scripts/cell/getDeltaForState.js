import { FILLED, EMPTY } from "./cellStates";

const convertToCountState = (state) => {
  return state <= EMPTY ? EMPTY : state;
};

export const getDeltaForState = (stateValIn, corrVal) => {
  const stateVal = convertToCountState(stateValIn);
  const deltaIncorrect = corrVal === EMPTY ? -1 * FILLED : -1 * corrVal;
  return stateVal === corrVal ? corrVal : deltaIncorrect;
};
