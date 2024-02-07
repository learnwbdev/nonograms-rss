import { FILLED, EMPTY, CROSS } from "./cellStates";
import { fillCellWithColor } from "./fillCellWithColor";
import { fillCellWithCross } from "./fillCellWithCross";
import { makeCellTransparent } from "./makeCellTransparent";

export const changeCellContent = (
  canvasContext,
  cellRef,
  boardSettings,
  board
) => {
  const ctx = canvasContext;
  const cell = cellRef.getCellData();
  const { cellSizePx, filledCellBg, cross } = boardSettings;
  const { cluesWidth, cluesHeight } = board;
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
};
