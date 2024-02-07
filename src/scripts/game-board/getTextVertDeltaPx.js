export const getTextVertDeltaPx = (canvasContextRef) => {
  const ctx = canvasContextRef;
  const sampleString = "0123456789";
  const textMetrics = ctx.measureText(sampleString);
  const vertDelta =
    (textMetrics.actualBoundingBoxAscent -
      textMetrics.actualBoundingBoxDescent) /
    2;

  return vertDelta;
};
