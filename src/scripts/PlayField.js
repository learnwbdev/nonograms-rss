import { constructBoardCells } from "./play-field/constructBoardCells";
import { countSumCellsForPlayField } from "./play-field/countSumCellsForPlayField";
import { countFilledCellsInPuzzle } from "./play-field/countFilledCellsInPuzzle";
import { initializeBoardStateMatrix } from "./play-field/initializeBoardStateMatrix";
import { isEmptyBoardStateMatrix } from "./play-field/isEmptyBoardStateMatrix";
import { playSoundOnWin } from "./play-field/playSoundOnWin";

export class PlayField {
  #gameBoard;

  #puzzleMatrix;

  #numFilledCellsPuzzle;

  #sumCellsPlayField;

  #boardStateMatrix;

  #boardCells;

  #stopWatch;

  constructor(gameBoard, puzzleMatrix, boardStateMatrix, stopWatch) {
    this.#gameBoard = gameBoard;
    this.#stopWatch = stopWatch;
    this.#puzzleMatrix = puzzleMatrix;
    this.#numFilledCellsPuzzle = countFilledCellsInPuzzle(puzzleMatrix);
    if (isEmptyBoardStateMatrix(boardStateMatrix)) {
      this.#boardStateMatrix = initializeBoardStateMatrix(puzzleMatrix);
      this.#sumCellsPlayField = -1 * this.#numFilledCellsPuzzle;
    } else {
      this.#boardStateMatrix = boardStateMatrix;
      this.#sumCellsPlayField = countSumCellsForPlayField(
        this.#boardStateMatrix,
        this.#puzzleMatrix
      );
    }
    this.#constructBoardCells();
  }

  #constructBoardCells() {
    // TODO: check that size of puzzleMatrix and boardStateMatrix is the same
    this.#boardCells = constructBoardCells(
      this.#gameBoard,
      this.#puzzleMatrix,
      this.#boardStateMatrix
    );
  }

  #handleWinGame() {
    playSoundOnWin();
    this.#stopWatch.stop();
    this.#gameBoard.blockPlayField();
    this.#gameBoard.addLatestWin();
    const timeInSec = this.#stopWatch.getTimeInSeconds();
    // TODO: show win message
    const winMsg = document.createElement("h4");
    winMsg.innerText = `Great! You have solved the nonogram in ${timeInSec} seconds!`;
    document.body.appendChild(winMsg);
    setTimeout(() => {
      winMsg.remove();
    }, 10000);
  }

  handleAction(
    cellIndexRow,
    cellIndexColumn,
    actionType,
    canvasContext,
    boardSettings,
    board
  ) {
    const iRow = cellIndexRow;
    const jCol = cellIndexColumn;
    const cell = this.#boardCells[iRow][jCol];
    const { newCellState, stateDelta } = cell.handleAction(
      actionType,
      canvasContext,
      boardSettings,
      board
    );
    this.#boardStateMatrix[iRow][jCol] = newCellState;
    this.#sumCellsPlayField += stateDelta;
    if (this.#sumCellsPlayField === this.#numFilledCellsPuzzle) {
      this.#handleWinGame();
    }
  }
}
