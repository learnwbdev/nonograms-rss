export const setTextStyleForClues = (canvasContextRef, boardSettings) => {
  const ctx = canvasContextRef;
  ctx.fillStyle = boardSettings.cluesColor;
  ctx.font = boardSettings.cluesFont;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
};
