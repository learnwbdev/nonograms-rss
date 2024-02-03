import { charToState, regExpWithStates } from "../cell/cellStates";

export const decodePuzzle = (puzzleString) => {
  const puzzleStrArr = puzzleString.split(".");
  const numRows = +puzzleStrArr[0];
  const numCols = +puzzleStrArr[1];
  const strToDecode = puzzleStrArr[2];

  const puzzleMatrix = [...Array(numRows)].map(() => Array(numCols));
  const strMatches = [...strToDecode.matchAll(regExpWithStates)];
  let elemIdx = 0;
  for (let iGroup = 0; iGroup < strMatches.length; iGroup += 1) {
    const group = strMatches[iGroup];
    const valueStr = group[1];
    const countStr = group[2];
    const value = charToState[valueStr];
    const count = +countStr || 1;
    for (let i = 0; i < count; i += 1) {
      const iRow = Math.floor(elemIdx / numCols);
      const jCol = elemIdx % numCols;
      puzzleMatrix[iRow][jCol] = value;
      elemIdx += 1;
    }
  }

  return puzzleMatrix;
};
