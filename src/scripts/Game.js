import { decodePuzzle } from "./game/decodePuzzle";
import { formPuzzleClues } from "./game/formPuzzleClues";
import { GameBoard } from "./GameBoard";
import { StopWatch } from "./StopWatch";
import { addLatestWin } from "./latest-wins/addLatestWin";
import { updateLatestWinsNodes } from "./layout/latest-wins/updateLatestWinsNodes";
import { saveGameToLocalStorage } from "./game/saveGameToLocalStorage";

export class Game {
  #nonogram = {};

  #gameBoard;

  #isGameInProgress = false;

  #stopWatch;

  #latestWinsNodes;

  #gameApp;

  constructor(stopWatchNode, latestWinsNodes, gameApp) {
    this.#stopWatch = new StopWatch(stopWatchNode);
    this.#gameBoard = new GameBoard(this.#stopWatch, this, gameApp);
    this.#latestWinsNodes = latestWinsNodes;
    this.#gameApp = gameApp;
  }

  setNonogram(nonogram, boardStateMatrix, timeSec) {
    this.#nonogram = nonogram;
    const puzzleMatrix = decodePuzzle(this.#nonogram.puzzle);
    const { rowsAllClues, colsAllClues } = formPuzzleClues(puzzleMatrix);
    this.#gameBoard.drawBoard(
      puzzleMatrix,
      { rowsAllClues, colsAllClues },
      boardStateMatrix,
      timeSec
    );
  }

  showSolution() {
    this.#gameBoard.drawSolution();
  }

  resetGame() {
    this.#gameBoard.resetGame();
  }

  saveGame() {
    const nonogramId = this.#nonogram.id;
    const timeSec = this.#stopWatch.getTimeInSeconds();
    const boardStateStr = this.#gameBoard.getBoardStateString();
    if (boardStateStr) {
      saveGameToLocalStorage(nonogramId, timeSec, boardStateStr);
    } else {
      const messageText =
        "Nothing to save: game is already solved or was not started";
      this.#gameApp.showDialog(messageText);
    }
  }

  addLatestWin() {
    addLatestWin(
      this.#nonogram.id,
      this.#nonogram.nameWithSize,
      this.#nonogram.level,
      this.#stopWatch.getTimeFormatted(),
      this.#stopWatch.getTimeInSeconds()
    );
    updateLatestWinsNodes(this.#latestWinsNodes);
  }
}
