export const fillCellWithCross = (
  canvasContextRef,
  cell,
  cellSizePx,
  emptyCellBg,
  cross
) => {
  const ctx = canvasContextRef;
  ctx.strokeStyle = cross.color;
  ctx.lineWidth = cross.lineWidth;

  const crossPoints = {
    leftTop: [cell.x + cross.margin, cell.y + cross.margin],
    rghtBtm: [
      cell.x + cellSizePx - cross.margin,
      cell.y + cellSizePx - cross.margin,
    ],
    rghtTop: [cell.x + cellSizePx - cross.margin, cell.y + cross.margin],
    leftBtm: [cell.x + cross.margin, cell.y + cellSizePx - cross.margin],
  };

  ctx.fillStyle = emptyCellBg;
  ctx.fillRect(cell.x, cell.y, cellSizePx, cellSizePx);

  ctx.beginPath();
  ctx.moveTo(...crossPoints.leftTop);
  ctx.lineTo(...crossPoints.rghtBtm);
  ctx.moveTo(...crossPoints.rghtTop);
  ctx.lineTo(...crossPoints.leftBtm);
  ctx.stroke();
};
