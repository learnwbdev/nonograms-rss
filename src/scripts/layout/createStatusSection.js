export const createStatusSection = () => {
  const statusSection = document.createElement("section");
  statusSection.classList.add("status");
  document.body.append(statusSection);

  const stopWatchBlock = document.createElement("div");
  stopWatchBlock.classList.add("status__stop-watch", "stop-watch");
  statusSection.appendChild(stopWatchBlock);

  const stopWatchNode = document.createElement("div");
  stopWatchNode.classList.add("stop-watch__value");
  stopWatchBlock.appendChild(stopWatchNode);

  const nonogramNameBlock = document.createElement("div");
  nonogramNameBlock.classList.add("status__nonogram-name", "nonogram-name");
  statusSection.appendChild(nonogramNameBlock);

  const nonogramNameNode = document.createElement("div");
  nonogramNameNode.classList.add("nonogram-name__text");
  nonogramNameBlock.appendChild(nonogramNameNode);

  return { stopWatchNode, nonogramNameNode };
};
