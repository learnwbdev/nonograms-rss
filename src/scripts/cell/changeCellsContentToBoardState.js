import { FILLED, EMPTY, CROSS } from "./cellStates";
import { fillCellWithColor } from "./fillCellWithColor";
import { fillCellWithCross } from "./fillCellWithCross";
import { makeCellTransparent } from "./makeCellTransparent";

export const changeCellsContentToBoardState = (gameBoard, boardCells) => {
  const ctx = gameBoard.getCanvasContext();
  const { cellSizePx, filledCellBg, cross } = gameBoard.getBoardSettings();
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
          makeCellTransparent(ctx, cell, cellSizePx);
          break;
        case FILLED:
          fillColor = filledCellBg;
          fillCellWithColor(ctx, cell, cellSizePx, fillColor);
          break;
        case CROSS:
          fillCellWithCross(ctx, cell, cellSizePx, cross);
          break;
        default:
          break;
      }
    }
  }
};
