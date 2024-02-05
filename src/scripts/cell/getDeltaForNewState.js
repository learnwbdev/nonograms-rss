import { getDeltaForState } from "./getDeltaForState";

export const getDeltaForNewState = (newState, correctValue, previousState) => {
  const prevDelta = getDeltaForState(previousState, correctValue);
  const curDelta = getDeltaForState(newState, correctValue);
  const stateDelta = curDelta - prevDelta;
  return stateDelta;
};
