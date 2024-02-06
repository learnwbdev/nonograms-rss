import { gameAppNode } from "./getGameAppNode";

export const createGameBoardCanvas = () => {
  const canvasSection = document.createElement("section");
  canvasSection.classList.add("gameboard");
  gameAppNode.appendChild(canvasSection);

  const canvasNode = document.createElement("canvas");
  canvasNode.classList.add("gameboard__canvas");
  canvasSection.appendChild(canvasNode);

  return canvasNode;
};
