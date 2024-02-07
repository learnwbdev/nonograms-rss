import { constructBoardCells } from "./play-field/constructBoardCells";
import { countSumCellsForPlayField } from "./play-field/countSumCellsForPlayField";
import { countFilledCellsInPuzzle } from "./play-field/countFilledCellsInPuzzle";
import { initializeBoardStateMatrix } from "./play-field/initializeBoardStateMatrix";
import { isEmptyBoardStateMatrix } from "./play-field/isEmptyBoardStateMatrix";
import { playSoundOnWin } from "./play-field/playSoundOnWin";
import { encodePuzzle } from "./game/encodePuzzle";
import { changeCellsContentToBoardState } from "./cell/changeCellsContentToBoardState";

export class PlayField {
  #gameBoard;

  #puzzleMatrix;

  #numFilledCellsPuzzle;

  #sumCellsPlayField;

  #boardStateMatrix;

  #boardCells;

  #stopWatch;

  #gameApp;

  constructor(gameBoard, puzzleMatrix, boardStateMatrix, stopWatch, gameApp) {
    this.#gameBoard = gameBoard;
    this.#stopWatch = stopWatch;
    this.#gameApp = gameApp;
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
    if (!isEmptyBoardStateMatrix(boardStateMatrix)) {
      this.#changeCellsContentToBoardState();
    }
  }

  #constructBoardCells() {
    // TODO: check that size of puzzleMatrix and boardStateMatrix is the same
    this.#boardCells = constructBoardCells(
      this.#gameBoard,
      this.#puzzleMatrix,
      this.#boardStateMatrix
    );
  }

  #changeCellsContentToBoardState() {
    changeCellsContentToBoardState(this.#gameBoard, this.#boardCells);
  }

  #handleWinGame() {
    playSoundOnWin();
    this.#stopWatch.stop();
    this.#gameBoard.blockPlayField();
    this.#gameBoard.addLatestWin();
    const timeInSec = this.#stopWatch.getTimeInSeconds();
    const winMessageText = `Great! You have solved the nonogram in ${timeInSec} seconds!`;
    this.#gameApp.showDialog(winMessageText);
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

  getBoardStateString() {
    return encodePuzzle(this.#boardStateMatrix);
  }
}
