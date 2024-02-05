import { capitalizeWord } from "./utils/capitalizeWord";
import { Game } from "./Game";
import { changeSoundsMuteValue } from "./sound/changeSoundsMuteValue";

export default class GameApp {
  #nonograms = [];

  #game;

  constructor(nonogramsData, canvasClassName) {
    this.#game = new Game(canvasClassName);
    this.#createNonogramsArray(nonogramsData);
  }

  changeGameToPuzzle(nonogramId) {
    const nonogram = this.#getNonogramById(nonogramId);
    this.#game.setNonogram(nonogram);
  }

  #getNonogramById(nonogramId) {
    return this.#nonograms[nonogramId];
  }

  getRandomNonogramId() {
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

  showSolution() {
    this.#game.showSolution();
  }

  static turnOffSoundEffects() {
    const isMuted = true;
    changeSoundsMuteValue(isMuted);
  }

  static turnOnSoundEffects() {
    const isNotMuted = false;
    changeSoundsMuteValue(isNotMuted);
  }
}
