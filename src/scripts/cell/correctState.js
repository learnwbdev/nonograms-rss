import { FILLED, EMPTY, CROSS } from "./cellStates";

export const correctState = (stateToCheck) => {
  let correctedState;
  switch (stateToCheck) {
    case FILLED:
    case EMPTY:
    case CROSS:
      correctedState = stateToCheck;
      break;
    default:
      correctedState = EMPTY;
  }

  return correctedState;
};
