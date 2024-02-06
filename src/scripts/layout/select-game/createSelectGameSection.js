import { gameAppNode } from "../getGameAppNode";

export const createSelectGameSection = () => {
  const selectGameSection = document.createElement("section");
  selectGameSection.classList.add("select-game");
  gameAppNode.appendChild(selectGameSection);

  const divLevelBlock = document.createElement("div");
  divLevelBlock.classList.add("select-game__level", "level");
  selectGameSection.appendChild(divLevelBlock);

  const levelLabel = document.createElement("label");
  levelLabel.classList.add("level__label", "label");
  levelLabel.htmlFor = "level-select";
  levelLabel.innerText = "Level";
  divLevelBlock.appendChild(levelLabel);

  const levelSelect = document.createElement("select");
  levelSelect.classList.add("level__select", "select");
  levelSelect.id = "level-select";
  levelSelect.name = "levels";
  divLevelBlock.appendChild(levelSelect);

  const divNonogramBlock = document.createElement("div");
  divNonogramBlock.classList.add("select-game__nonogram", "nonogram");
  selectGameSection.appendChild(divNonogramBlock);

  const nonogramLabel = document.createElement("label");
  nonogramLabel.classList.add("nonogram__label", "label");
  nonogramLabel.htmlFor = "nonogram-select";
  nonogramLabel.innerText = "Nonogram";
  divNonogramBlock.appendChild(nonogramLabel);

  const nonogramSelect = document.createElement("select");
  nonogramSelect.classList.add("nonogram__select", "select");
  nonogramSelect.id = "nonogram-select";
  nonogramSelect.name = "nonograms";
  divNonogramBlock.appendChild(nonogramSelect);

  return { levelSelect, nonogramSelect };
};
