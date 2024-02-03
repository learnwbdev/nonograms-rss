import { CROSS, EMPTY, FILLED } from "./cellStates";

const getStateAfterMainAction = (curState) => {
  let newState;
  switch (curState) {
    case EMPTY:
      newState = FILLED;
      break;
    case FILLED:
      newState = EMPTY;
      break;
    case CROSS:
      newState = FILLED;
      break;
    default:
      newState = curState;
  }
  return newState;
};

const getStateAfterSubAction = (curState) => {
  let newState;
  switch (curState) {
    case EMPTY:
      newState = CROSS;
      break;
    case FILLED:
      newState = CROSS;
      break;
    case CROSS:
      newState = EMPTY;
      break;
    default:
      newState = curState;
  }
  return newState;
};

export { getStateAfterMainAction, getStateAfterSubAction };
