const createGameAppNode = () => {
  const gameAppNode = document.createElement("div");
  gameAppNode.classList.add("game-app");
  document.body.appendChild(gameAppNode);

  return gameAppNode;
};

const gameAppNode = createGameAppNode();

export { gameAppNode };
