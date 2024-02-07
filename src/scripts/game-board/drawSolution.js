import { EMPTY, FILLED } from "../cell/cellStates";
import { fillCellWithColor } from "../cell/fillCellWithColor";
import { makeCellTransparent } from "../cell/makeCellTransparent";
import { getCoordShiftByIndex } from "./getCoordShiftByIndex";

export const drawSolution = (
  canvasContextRef,
  puzzleMatrix,
  board,
  boardSettings
) => {
  const ctx = canvasContextRef;
  const { cellSizePx, lineWidthPx, dividerWidthPx, divideNumCells } =
    boardSettings;
  const cellWithLinePx = cellSizePx + lineWidthPx;

  const getCoordShift = (cellIndexInPuzzle) => {
    return getCoordShiftByIndex(
      cellIndexInPuzzle,
      board.blockSize,
      divideNumCells,
      dividerWidthPx,
      cellWithLinePx
    );
  };

  const cell = {
    x: 0,
    y: 0,
  };
  for (let iRow = 0; iRow < puzzleMatrix.length; iRow += 1) {
    const puzzleRow = puzzleMatrix[iRow];
    cell.y = board.cluesHeight + getCoordShift(iRow);
    for (let jCol = 0; jCol < puzzleRow.length; jCol += 1) {
      const value = puzzleRow[jCol];
      cell.x = board.cluesWidth + getCoordShift(jCol);
      let fillColor;
      switch (value) {
        case FILLED:
          fillColor = boardSettings.filledCellBg;
          fillCellWithColor(ctx, cell, cellSizePx, fillColor);
          break;
        case EMPTY:
        default:
          makeCellTransparent(ctx, cell, cellSizePx);
      }
    }
  }
};
