export const handleLevelChange = (
  levelSelectNode,
  nonogramSelectNodeRef,
  nonogramOptionNodesByLevel,
  gameApp,
  isTriggerChangeGameToPuzzle = true
) => {
  const nonogramSelectNode = nonogramSelectNodeRef;
  const defaultLevelIdx = 0;
  let levelIdx = levelSelectNode.selectedIndex;
  levelIdx = levelIdx >= 0 ? levelIdx : defaultLevelIdx;

  const levelNonogramNodes = nonogramOptionNodesByLevel[levelIdx];
  nonogramSelectNode.replaceChildren(...levelNonogramNodes);
  nonogramSelectNode.selectedIndex = 0;
  const nonogramValueId = nonogramSelectNode.options[0].value;
  if (isTriggerChangeGameToPuzzle) {
    gameApp.changeGameToPuzzle(nonogramValueId);
  }
};
