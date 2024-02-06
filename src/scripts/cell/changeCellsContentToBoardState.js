import { FILLED, EMPTY, CROSS } from "./cellStates";
import { fillCellWithColor } from "./fillCellWithColor";
import { fillCellWithCross } from "./fillCellWithCross";

export const changeCellsContentToBoardState = (gameBoard, boardCells) => {
  const ctx = gameBoard.getCanvasContext();
  const { cellSizePx, emptyCellBg, filledCellBg, cross } =
    gameBoard.getBoardSettings();
  const { cluesWidth, cluesHeight } = gameBoard.getBoard();
  for (let iRow = 0; iRow < boardCells.length; iRow += 1) {
    const rowCells = boardCells[iRow];
    for (let jCol = 0; jCol < rowCells.length; jCol += 1) {
      const cellRef = rowCells[jCol];
      const cell = cellRef.getCellData();
      cell.x += cluesWidth;
      cell.y += cluesHeight;
      let fillColor;
      switch (cell.state) {
        case EMPTY:
          fillColor = emptyCellBg;
          fillCellWithColor(ctx, cell, cellSizePx, fillColor);
          break;
        case FILLED:
          fillColor = filledCellBg;
          fillCellWithColor(ctx, cell, cellSizePx, fillColor);
          break;
        case CROSS:
          fillCellWithCross(ctx, cell, cellSizePx, emptyCellBg, cross);
          break;
        default:
          break;
      }
    }
  }
};
