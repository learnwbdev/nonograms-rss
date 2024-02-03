import { EMPTY, FILLED } from "../cell/cellStates";

export const formPuzzleClues = (puzzleMatrix) => {
  const numRows = puzzleMatrix.length;
  const numCols = puzzleMatrix[0].length;
  const rowsAllClues = [];
  const colsAllClues = [...Array(numCols)].map(() => []);
  const colsCluesCounter = Array(numCols).fill(0);
  for (let iRow = 0; iRow < numRows; iRow += 1) {
    const rowClues = [];
    let rowCluesCounter = 0;
    for (let jCol = 0; jCol < numCols; jCol += 1) {
      const value = puzzleMatrix[iRow]?.[jCol] ?? 0;
      switch (value) {
        case EMPTY:
          if (rowCluesCounter > 0) {
            rowClues.push(rowCluesCounter);
          }
          if (colsCluesCounter[jCol] > 0) {
            colsAllClues[jCol].push(colsCluesCounter[jCol]);
          }
          rowCluesCounter = 0;
          colsCluesCounter[jCol] = 0;
          break;
        case FILLED:
        default:
          rowCluesCounter += 1;
          colsCluesCounter[jCol] += 1;
          if (jCol === numCols - 1) {
            rowClues.push(rowCluesCounter);
          }
          if (iRow === numRows - 1) {
            colsAllClues[jCol].push(colsCluesCounter[jCol]);
          }
      }
    }
    rowsAllClues.push(rowClues);
  }

  return { rowsAllClues, colsAllClues };
};
