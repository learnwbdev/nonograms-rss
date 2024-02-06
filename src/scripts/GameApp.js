import { capitalizeWord } from "./utils/capitalizeWord";
import { Game } from "./Game";
import { createLatestWinsNodes } from "./layout/latest-wins/createLatestWinsNodes";
import { getSoundMuteValue } from "./sound/getSoundMuteValue";
import { getThemeName } from "./theme/getThemeName";

export default class GameApp {
  #nonograms = [];

  #game;

  isSoundMuted;

  themeName;

  constructor(nonogramsData, canvasClassName, stopWatchClassName) {
    const latestWinsNodes = createLatestWinsNodes();
    this.#game = new Game(canvasClassName, stopWatchClassName, latestWinsNodes);
    this.#createNonogramsArray(nonogramsData);
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
