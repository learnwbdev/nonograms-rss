import { stateToChar } from "../cell/cellStates";

export const encodePuzzle = (puzzleMatrix) => {
  const getValCounterStr = (counter, value) => {
    let valCounterStr = "";
    if (counter > 2) {
      valCounterStr = `${value}${counter}`;
    } else if (counter === 2) {
      valCounterStr = `${value}${value}`;
    } else if (counter === 1) {
      valCounterStr = `${value}`;
    }
    return valCounterStr;
  };

  const rowNum = puzzleMatrix.length;
  const colNum = puzzleMatrix?.[0].length ?? 0;
  const sizePrefix = `${rowNum}.${colNum}.`;
  const puzzleFlat = puzzleMatrix.flat();

  let puzzleStr = sizePrefix;
  let curCounter = 0;
  let prevVal = "";
  for (let i = 0; i < puzzleFlat.length; i += 1) {
    const elem = puzzleFlat[i];
    const curVal = stateToChar[elem];
    if (curVal === prevVal) {
      curCounter += 1;
    } else {
      puzzleStr += getValCounterStr(curCounter, prevVal);
      curCounter = 1;
      prevVal = curVal;
    }
  }
  puzzleStr += getValCounterStr(curCounter, prevVal);
  return puzzleStr;
};
