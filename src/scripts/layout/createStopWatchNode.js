export const createStopWatchNode = (className) => {
  const stopWatchNode = document.createElement("div");
  stopWatchNode.classList.add(className);
  document.body.append(stopWatchNode);
  return stopWatchNode;
};
