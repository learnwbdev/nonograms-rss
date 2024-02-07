export const makeCellTransparent = (canvasContextRef, cell, cellSizePx) => {
  const ctx = canvasContextRef;
  ctx.clearRect(cell.x, cell.y, cellSizePx, cellSizePx);
};
