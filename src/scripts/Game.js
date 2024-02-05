import { decodePuzzle } from "./game/decodePuzzle";
import { formPuzzleClues } from "./game/formPuzzleClues";
import { GameBoard } from "./GameBoard";

export class Game {
  #nonogram = {};

  #gameBoard;

  #isGameInProgress = false;

  #gameDurationInSec = 0;

  constructor(canvasClassName) {
    this.#gameBoard = new GameBoard(canvasClassName);
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
