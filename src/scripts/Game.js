import { decodePuzzle } from "./game/decodePuzzle";
import { formPuzzleClues } from "./game/formPuzzleClues";
import { GameBoard } from "./GameBoard";
import { StopWatch } from "./StopWatch";
import { addLatestWin } from "./latest-wins/addLatestWin";
import { updateLatestWinsNodes } from "./layout/latest-wins/updateLatestWinsNodes";

export class Game {
  #nonogram = {};

  #gameBoard;

  #isGameInProgress = false;

  #stopWatch;

  #latestWinsNodes;

  constructor(stopWatchNode, latestWinsNodes) {
    this.#stopWatch = new StopWatch(stopWatchNode);
    this.#gameBoard = new GameBoard(this.#stopWatch, this);
    this.#latestWinsNodes = latestWinsNodes;
  }

  setNonogram(nonogram) {
    this.#nonogram = nonogram;
    const puzzleMatrix = decodePuzzle(this.#nonogram.puzzle);
    const { rowsAllClues, colsAllClues } = formPuzzleClues(puzzleMatrix);
    const boardStateMatrix = [];
    this.#gameBoard.drawBoard(
      puzzleMatrix,
      { rowsAllClues, colsAllClues },
      boardStateMatrix
    );
  }

  showSolution() {
    this.#gameBoard.drawSolution();
  }

  resetGame() {
    this.#gameBoard.resetGame();
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
