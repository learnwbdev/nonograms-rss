export const createLevelOptions = (nonogramsList, levelSelectRef) => {
  const levelSelect = levelSelectRef;
  const levels = [...new Set(nonogramsList.map((nonogram) => nonogram.level))];

  for (let i = 0; i < levels.length; i += 1) {
    const levelName = levels[i];
    const levelOption = document.createElement("option");
    levelOption.classList.add("select__option");
    levelOption.value = levelName;
    levelOption.innerText = levelName;
    levelOption.selected = i === 0;
    levelSelect.appendChild(levelOption);
  }
  levelSelect.selectedIndex = 0;

  return levels;
};
