import { EMPTY } from "../cell/cellStates";
import { getDeltaForState } from "../cell/getDeltaForState";

export const countSumCellsForPlayField = (boardStateMatrix, puzzleMatrix) => {
  const puzzle = puzzleMatrix;
  const board = boardStateMatrix;

  let sumCells = 0;
  for (let iRow = 0; iRow < board.length; iRow += 1) {
    const rowBoard = board[iRow];
    for (let jCol = 0; jCol < rowBoard.length; jCol += 1) {
      const boardValue = rowBoard[jCol];
      const correctValue = puzzle?.[iRow]?.[jCol] ?? EMPTY;
      sumCells += getDeltaForState(boardValue, correctValue);
    }
  }
  return sumCells;
};
