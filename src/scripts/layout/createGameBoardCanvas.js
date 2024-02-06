export const createGameBoardCanvas = () => {
  const canvasSection = document.createElement("section");
  canvasSection.classList.add("gameboard");
  document.body.append(canvasSection);

  const canvasNode = document.createElement("canvas");
  canvasNode.classList.add("gameboard__canvas");
  canvasSection.appendChild(canvasNode);

  return canvasNode;
};
