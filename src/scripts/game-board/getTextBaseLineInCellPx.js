export const getTextBaseLineInCellPx = (canvasContextRef, cellSizePx) => {
  const ctx = canvasContextRef;
  const sampleString = "0123456789";
  const textMetrics = ctx.measureText(sampleString);
  const textHeight =
    textMetrics.fontBoundingBoxAscent - textMetrics.fontBoundingBoxDescent;
  const baseLineInCellPx = Math.ceil((cellSizePx + textHeight) / 2);
  return baseLineInCellPx;
};
