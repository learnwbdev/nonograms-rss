import { capitalizeWord } from "./utils/capitalizeWord";
import { Game } from "./Game";
import AudioResCross from "../assets/sounds/cross/cross.mp3";
import AudioResEmpty from "../assets/sounds/empty/empty.mp3";
import AudioResFilled from "../assets/sounds/filled/filled.mp3";
import AudioResWin from "../assets/sounds/win/win.mp3";

export default class GameApp {
  #nonograms = [];

  #game;

  #soundEffects = {
    cross: new Audio(AudioResCross),
    filled: new Audio(AudioResFilled),
    empty: new Audio(AudioResEmpty),
    win: new Audio(AudioResWin),
  };

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

  turnOffSoundEffects() {
    const sounds = Object.values(this.#soundEffects);
    sounds.forEach((soundIn) => {
      const sound = soundIn;
      sound.muted = true;
    });
  }

  turnOnSoundEffects() {
    const sounds = Object.values(this.#soundEffects);
    sounds.forEach((soundIn) => {
      const sound = soundIn;
      sound.muted = false;
    });
  }
}
