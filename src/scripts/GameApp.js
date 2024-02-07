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
import { loadGameFromLocalStorage } from "./game/loadGameFromLocalStorage";
import { decodePuzzle } from "./game/decodePuzzle";
import { createMessageDialog } from "./layout/message/createMessageDialog";
import { showMessageDialog } from "./layout/message/showMessageDialog";

export default class GameApp {
  #nonograms = [];

  #game;

  #levelSelectNode;

  #nonogramSelectNode;

  #nonogramOptionNodesByLevel;

  #nonogramNameNode;

  #message = {};

  isSoundMuted;

  themeName;

  latestWinsSection;

  constructor(nonogramsData) {
    this.#createNonogramsArray(nonogramsData);
    const { stopWatchNode, nonogramNameNode } = createStatusSection();
    this.#nonogramNameNode = nonogramNameNode;
    const { latestWinsSection, latestWinsNodes } = createLatestWinsNodes();
    this.latestWinsSection = latestWinsSection;
    const { messageDialog, msgText } = createMessageDialog();
    this.#message.dialogNode = messageDialog;
    this.#message.textNode = msgText;
    this.#game = new Game(stopWatchNode, latestWinsNodes, this);
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

  #changeNonogramSelectionById(
    nonogramId,
    isTriggerChangeEvent = true,
    isTriggerChangeGameToPuzzle = true
  ) {
    const nonogram = this.#getNonogramById(nonogramId);
    const levelOptions = [...this.#levelSelectNode.options];
    const isSoughtForLevel = (option) => option.value === nonogram.level;
    const levelSelectIdx = levelOptions.findIndex(isSoughtForLevel);
    this.#levelSelectNode.selectedIndex = levelSelectIdx;
    handleLevelChange(
      this.#levelSelectNode,
      this.#nonogramSelectNode,
      this.#nonogramOptionNodesByLevel,
      this,
      isTriggerChangeGameToPuzzle
    );

    const nonogramsOptions = [...this.#nonogramSelectNode.options];
    const isSoughtForNonogram = (option) =>
      option.value === nonogram.id.toString();
    const nonogramSelectIdx = nonogramsOptions.findIndex(isSoughtForNonogram);
    this.#nonogramSelectNode.selectedIndex = nonogramSelectIdx;
    if (isTriggerChangeEvent) {
      this.#nonogramSelectNode.dispatchEvent(new Event("change"));
    }
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

  changeGameToPuzzle(nonogramId, boardStateMatrix = [], timeSec = 0) {
    const nonogram = this.#getNonogramById(nonogramId);
    this.#game.setNonogram(nonogram, boardStateMatrix, timeSec);
    this.#nonogramNameNode.innerText = nonogram.nameWithSize;
  }

  showSolution() {
    this.#game.showSolution();
  }

  showDialog(messageText) {
    showMessageDialog(this.#message, messageText);
  }

  setRandomPuzzle() {
    const nonogramId = this.#getRandomNonogramId();
    this.#changeNonogramSelectionById(nonogramId);
  }

  resetGame() {
    this.#game.resetGame();
  }

  saveGame() {
    this.#game.saveGame();
  }

  loadGame() {
    const {
      nonogramId: nonogramDataID,
      timeSec,
      boardStateStr,
    } = loadGameFromLocalStorage();
    if (nonogramDataID === -1) {
      const messageText = "Nothing to load: there is no saved games";
      this.showDialog(messageText);
    } else {
      // TODO: check if id exists
      // TODO: find nonogramId in GameApp by id = nonogramDataID
      const nonogramId = nonogramDataID;
      const boardStateMatrix = decodePuzzle(boardStateStr);
      this.#changeNonogramSelectionById(nonogramId, false, false);
      this.changeGameToPuzzle(nonogramId, boardStateMatrix, timeSec);
    }
  }
}
