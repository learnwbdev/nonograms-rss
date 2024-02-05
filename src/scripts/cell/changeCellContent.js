import { FILLED, EMPTY, CROSS } from "./cellStates";
import { fillCellWithColor } from "./fillCellWithColor";
import { fillCellWithCross } from "./fillCellWithCross";

export const changeCellContent = (
  canvasContext,
  cellRef,
  boardSettings,
  board
) => {
  const ctx = canvasContext;
  const cell = cellRef.getCellData();
  const { cellSizePx, emptyCellBg, filledCellBg, cross } = boardSettings;
  const { cluesWidth, cluesHeight } = board;
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
};
