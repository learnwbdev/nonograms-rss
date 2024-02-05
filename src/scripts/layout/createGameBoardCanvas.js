export const createGameBoardCanvas = (className) => {
  const canvasNode = document.createElement("canvas");
  canvasNode.classList.add(className);
  document.body.append(canvasNode);
  return canvasNode;
};
