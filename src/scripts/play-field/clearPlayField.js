export const clearPlayField = (canvasContext, playAreaRect) => {
  const ctx = canvasContext;
  ctx.clearRect(...playAreaRect);
};
