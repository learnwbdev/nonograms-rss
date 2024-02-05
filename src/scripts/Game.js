import { decodePuzzle } from "./game/decodePuzzle";
import { formPuzzleClues } from "./game/formPuzzleClues";
import { GameBoard } from "./GameBoard";
import { StopWatch } from "./StopWatch";

export class Game {
  #nonogram = {};

  #gameBoard;

  #isGameInProgress = false;

  #stopWatch;

  constructor(canvasClassName, stopWatchClassName) {
    this.#stopWatch = new StopWatch(stopWatchClassName);
    this.#gameBoard = new GameBoard(canvasClassName, this.#stopWatch);
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
}
