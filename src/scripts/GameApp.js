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
import { createStatusSection } from "./layout/createStatusSection";

export default class GameApp {
  #nonograms = [];

  #game;

  #levelSelectNode;

  #nonogramSelectNode;

  #nonogramOptionNodesByLevel;

  #nonogramNameNode;

  isSoundMuted;

  themeName;

  constructor(nonogramsData) {
    this.#createNonogramsArray(nonogramsData);
    const { stopWatchNode, nonogramNameNode } = createStatusSection();
    this.#nonogramNameNode = nonogramNameNode;
    const latestWinsNodes = createLatestWinsNodes();
    this.#game = new Game(stopWatchNode, latestWinsNodes);
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

  #changeNonogramSelectionById(nonogramId) {
    const nonogram = this.#getNonogramById(nonogramId);
    const levelOptions = [...this.#levelSelectNode.options];
    const isSoughtForLevel = (option) => option.value === nonogram.level;
    const levelSelectIdx = levelOptions.findIndex(isSoughtForLevel);
    this.#levelSelectNode.selectedIndex = levelSelectIdx;
    handleLevelChange(
      this.#levelSelectNode,
      this.#nonogramSelectNode,
      this.#nonogramOptionNodesByLevel,
      this
    );

    const nonogramsOptions = [...this.#nonogramSelectNode.options];
    const isSoughtForNonogram = (option) =>
      option.value === nonogram.id.toString();
    const nonogramSelectIdx = nonogramsOptions.findIndex(isSoughtForNonogram);
    this.#nonogramSelectNode.selectedIndex = nonogramSelectIdx;
    this.#nonogramSelectNode.dispatchEvent(new Event("change"));
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
    this.#nonogramNameNode.innerText = nonogram.nameWithSize;
  }

  showSolution() {
    this.#game.showSolution();
  }

  setRandomPuzzle() {
    const nonogramId = this.#getRandomNonogramId();
    this.#changeNonogramSelectionById(nonogramId);
  }

  resetGame() {
    this.#game.resetGame();
  }

  saveGame() {
    // TODO: save current game
    console.log("save game: ", this.#game);
  }

  loadGame() {
    // TODO: load game from local storage
    console.log("load game: ", this.#game);
  }
}
