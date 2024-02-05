import { Cell } from "../Cell";
import { correctState } from "../cell/correctState";

export const constructBoardCells = (
  gameBoard,
  puzzleMatrix,
  boardStateMatrix
) => {
  const puzzle = puzzleMatrix;
  const board = boardStateMatrix;
  const numRow = puzzle.length;
  const numCol = puzzle?.[0].length;
  const boardCells = [...Array(numRow)].map(() => Array(numCol));

  for (let iRow = 0; iRow < numRow; iRow += 1) {
    const rowBoard = board?.[iRow];
    const yTopCell = gameBoard.getCellCoordByIndex(iRow);
    for (let jCol = 0; jCol < numCol; jCol += 1) {
      const valueBoard = rowBoard?.[jCol] ?? 0;
      const valueCorrect = puzzle[iRow]?.[jCol] ?? 0;
      const stateBoard = correctState(valueBoard);
      const stateCorrect = correctState(valueCorrect);
      const xLeftCell = gameBoard.getCellCoordByIndex(jCol);
      boardCells[iRow][jCol] = new Cell(
        xLeftCell,
        yTopCell,
        stateBoard,
        stateCorrect
      );
    }
  }

  return boardCells;
};
