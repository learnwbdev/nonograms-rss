import { capitalizeWord } from "./utils/capitalizeWord";
import { Game } from "./Game";
import { createLatestWinsNodes } from "./layout/latest-wins/createLatestWinsNodes";
import { getSoundMuteValue } from "./sound/getSoundMuteValue";
import { getThemeName } from "./theme/getThemeName";
import { createSelectGameSection } from "./layout/select-game/createSelectGameSection";
import { createLevelOptions } from "./layout/select-game/createLevelOptions";
import { createNonogramOptions } from "./layout/select-game/createNonogramOptions";
import { handleLevelChange } from "./layout/select-game/handleLevelChange";
import { handleNonogramChange } from "./layout/select-game/handleNonogramChange";

export default class GameApp {
  #nonograms = [];

  #game;

  #levelSelectNode;

  #nonogramSelectNode;

  #nonogramOptionNodesByLevel;

  isSoundMuted;

  themeName;

  constructor(nonogramsData, canvasClassName, stopWatchClassName) {
    const latestWinsNodes = createLatestWinsNodes();
    this.#game = new Game(canvasClassName, stopWatchClassName, latestWinsNodes);
    this.#createNonogramsArray(nonogramsData);
    this.#createSelectNodes();
    this.#addSelectNodesEventListeners();
    this.isSoundMuted = getSoundMuteValue();
    this.themeName = getThemeName();
  }

  #getNonogramById(nonogramId) {
    return this.#nonograms[nonogramId];
  }

  #getRandomNonogramId() {
    const randomId = Math.floor(Math.random() * this.#nonograms.length);
    return randomId;
  }

  #createNonogramsArray(nonogramsData) {
    this.#nonograms = nonogramsData.map((nonogram) => {
      const capitalizedLevel = capitalizeWord(nonogram.level);
      const capitalizedName = capitalizeWord(nonogram.name);
      const sizeStr = `${nonogram.size[0]}x${nonogram.size[1]}`;
      const nameWithSize = `${sizeStr} ${capitalizedName}`;
      return {
        id: nonogram.id,
        level: capitalizedLevel,
        nameWithSize,
        puzzle: nonogram.puzzle,
      };
    });
  }

  #createSelectNodes() {
    const nonogramsList = this.getNonogramsList();
    const { levelSelect, nonogramSelect } = createSelectGameSection();
    this.#levelSelectNode = levelSelect;
    this.#nonogramSelectNode = nonogramSelect;
    const levels = createLevelOptions(nonogramsList, this.#levelSelectNode);
    this.#nonogramOptionNodesByLevel = createNonogramOptions(
      levels,
      nonogramsList
    );
    // add nonogram options for the initial level
    handleLevelChange(
      this.#levelSelectNode,
      this.#nonogramSelectNode,
      this.#nonogramOptionNodesByLevel,
      this
    );
  }

  #addSelectNodesEventListeners() {
    this.#levelSelectNode.addEventListener("change", () => {
      handleLevelChange(
        this.#levelSelectNode,
        this.#nonogramSelectNode,
        this.#nonogramOptionNodesByLevel,
        this
      );
    });

    this.#nonogramSelectNode.addEventListener("change", () => {
      handleNonogramChange(this.#nonogramSelectNode, this);
    });
  }

  getNonogramsList() {
    const nonogramsList = this.#nonograms.map(
      ({ id, level, nameWithSize }) => ({
        id,
        level,
        nameWithSize,
      })
    );
    return nonogramsList;
  }

  changeGameToPuzzle(nonogramId) {
    const nonogram = this.#getNonogramById(nonogramId);
    this.#game.setNonogram(nonogram);
  }

  showSolution() {
    this.#game.showSolution();
  }

  setRandomPuzzle() {
    const nonogramId = this.#getRandomNonogramId();
    this.changeGameToPuzzle(nonogramId);
  }

  resetGame() {
    this.#game.resetGame();
  }
}
