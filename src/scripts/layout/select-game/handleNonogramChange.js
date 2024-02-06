export const handleNonogramChange = (nonogramSelectNode, gameApp) => {
  const defaultNonogramIdx = 0;
  let nonogramIdx = nonogramSelectNode.selectedIndex;
  nonogramIdx = nonogramIdx >= 0 ? nonogramIdx : defaultNonogramIdx;
  const nonogramValueId = nonogramSelectNode.options[nonogramIdx].value;

  gameApp.changeGameToPuzzle(nonogramValueId);
};
