import { EMPTY } from "../cell/cellStates";

export const initializeBoardStateMatrix = (puzzleMatrix) => {
  const numRows = puzzleMatrix.length;
  const numCols = puzzleMatrix?.[0].length ?? 0;
  const boardStateMatrix = [...Array(numRows)].map(() =>
    Array(numCols).fill(EMPTY)
  );
  return boardStateMatrix;
};
