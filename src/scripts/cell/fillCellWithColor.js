export const fillCellWithColor = (
  canvasContextRef,
  cell,
  cellSizePx,
  fillColor
) => {
  const ctx = canvasContextRef;
  ctx.fillStyle = fillColor;
  ctx.fillRect(cell.x, cell.y, cellSizePx, cellSizePx);
};
