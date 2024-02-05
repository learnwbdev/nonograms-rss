export const clearPlayField = (canvasContext, playFieldPath2D, emptyCellBg) => {
  const ctx = canvasContext;
  ctx.fillStyle = emptyCellBg;
  ctx.fill(playFieldPath2D);
};
