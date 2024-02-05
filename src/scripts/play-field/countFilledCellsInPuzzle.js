import { FILLED } from "../cell/cellStates";

export const countFilledCellsInPuzzle = (puzzleMatrixRef) => {
  const isFilled = (value) => {
    return value === FILLED;
  };

  let cntFilled = 0;
  for (let iRow = 0; iRow < puzzleMatrixRef.length; iRow += 1) {
    const rowPuzzle = puzzleMatrixRef[iRow];
    const cntRowFilled = rowPuzzle.filter(isFilled).length;
    cntFilled += cntRowFilled;
  }
  return cntFilled;
};
