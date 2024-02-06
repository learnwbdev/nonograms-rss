export const createNonogramOptions = (levels, nonogramsList) => {
  const nonogramOptionNodesByLevel = [];

  for (let iLevel = 0; iLevel < levels.length; iLevel += 1) {
    const levelName = levels[iLevel];
    const levelNonograms = nonogramsList.filter(
      (nonogram) => nonogram.level === levelName
    );
    const levelNonogramsNodes = [];
    for (let jNongr = 0; jNongr < levelNonograms.length; jNongr += 1) {
      const nonogram = levelNonograms[jNongr];
      const nonogramId = nonogram.id;
      const nonogramName = nonogram.nameWithSize;
      const nonogramOption = document.createElement("option");
      nonogramOption.classList.add("select__option");
      nonogramOption.value = nonogramId;
      nonogramOption.innerText = nonogramName;
      nonogramOption.selected = jNongr === 0;
      levelNonogramsNodes.push(nonogramOption);
    }
    nonogramOptionNodesByLevel.push(levelNonogramsNodes);
  }

  return nonogramOptionNodesByLevel;
};
