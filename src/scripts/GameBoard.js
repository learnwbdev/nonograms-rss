import { countPuzzleRowsCols } from "./game-board/countPuzzleRowsCols";
import { drawGameBoardGrid } from "./game-board/drawGameBoardGrid";
import { getGameBoardSize } from "./game-board/getGameBoardSize";
import { getTextBaseLineInCellPx } from "./game-board/getTextBaseLineInCellPx";
import { setTextStyleForClues } from "./game-board/setTextStyleForClues";
import { drawSolution } from "./game-board/drawSolution";
import { writeClues } from "./game-board/writeClues";
import { PlayField } from "./PlayField";
import { getCoordShiftByIndex } from "./game-board/getCoordShiftByIndex";
import { getCellIndexByOneCoord } from "./game-board/getCellIndexByOneCoord";
import { actionTypes } from "./actions/actionTypes";
import { clearPlayField } from "./play-field/clearPlayField";
import { createGameBoardCanvas } from "./layout/createGameBoardCanvas";

export class GameBoard {
  #canvasNode;

  #canvasContext;

  #playField;

  #isInPlayMode;

  #board = {
    width: 0,
    height: 0,
    cluesWidth: 0,
    cluesHeight: 0,
    blockSize: 0, // block - five cells with one divider and four lines if `divideNumCells` = 5
    textBaseLine: 0, // text baseline in a cell
  };

  #playArea = {
    rows: 0,
    cols: 0,
    rectPath: new Path2D(), // path of the playArea to detect mouse events
  };

  #clues = {
    rows: 0,
    cols: 0,
  };

  #boardSettings = {
    cellSizePx: 18,
    lineWidthPx: 1,
    dividerWidthPx: 2,
    divideNumCells: 5, // number of cells in one group/block
    cluesFont: "500 14px sans-serif",
    cluesColor: "black",
    lineColor: "dimgray",
    dividerColor: "gray",
    emptyCellBg: "white",
    filledCellBg: "black",
    cross: {
      color: "black",
      lineWidth: 1,
      margin: 1, // margin from the cell border
    },
  };

  #puzzleMatrix;

  #puzzleClues;

  #actions = actionTypes;

  #hasEventListeners = false;

  #stopWatch;

  #isStopWatchStarted = false;

  #game;

  constructor(stopWatch, game) {
    this.#game = game;
    this.#canvasNode = createGameBoardCanvas();
    this.#canvasContext = this.#canvasNode.getContext("2d");
    this.#stopWatch = stopWatch;
  }

  #setTextStyleForClues() {
    setTextStyleForClues(this.#canvasContext, this.#boardSettings);
  }

  #setTextBaseLineInCell() {
    this.#board.textBaseLine = getTextBaseLineInCellPx(
      this.#canvasContext,
      this.#boardSettings.cellSizePx
    );
  }

  #setCountRowsCols() {
    const { numRowForPuzzle, numColForPuzzle, numRowForClues, numColForClues } =
      countPuzzleRowsCols(this.#puzzleMatrix, this.#puzzleClues);
    this.#playArea.rows = numRowForPuzzle;
    this.#playArea.cols = numColForPuzzle;
    this.#clues.rows = numRowForClues;
    this.#clues.cols = numColForClues;
  }

  #setBoardSize() {
    const { boardWidth, boardHeight, cluesWidth, cluesHeight, blockSize } =
      getGameBoardSize(this.#playArea, this.#clues, this.#boardSettings);
    this.#canvasNode.width = boardWidth;
    this.#canvasNode.height = boardHeight;
    this.#board.width = boardWidth;
    this.#board.height = boardHeight;
    this.#board.cluesWidth = cluesWidth;
    this.#board.cluesHeight = cluesHeight;
    this.#board.blockSize = blockSize;
    this.#setPlayFieldPath2D();
  }

  #setPlayFieldPath2D() {
    const board = this.#board;
    const boardSettings = this.#boardSettings;
    const diffDividerRegLinePx =
      boardSettings.dividerWidthPx - boardSettings.lineWidthPx;
    const xLeft = board.cluesWidth + diffDividerRegLinePx; // exclude outside divider part from play field
    const yTop = board.cluesHeight + diffDividerRegLinePx;
    const width = board.width - xLeft - boardSettings.dividerWidthPx;
    const height = board.height - yTop - boardSettings.dividerWidthPx;
    const playFieldPath2D = new Path2D();
    playFieldPath2D.rect(xLeft, yTop, width, height);
    this.#playArea.rectPath = playFieldPath2D;
  }

  #drawBoardGrid() {
    drawGameBoardGrid(
      this.#canvasContext,
      this.#playArea,
      this.#clues,
      this.#board,
      this.#boardSettings
    );
  }

  #writeClues() {
    writeClues(
      this.#canvasContext,
      this.#clues,
      this.#puzzleClues,
      this.#board,
      this.#boardSettings
    );
  }

  #triggerEventInsidePlayField(event, actionType) {
    const ctx = this.#canvasContext;
    const isInsidePlayArea = ctx.isPointInPath(
      this.#playArea.rectPath,
      event.offsetX,
      event.offsetY
    );
    if (isInsidePlayArea) {
      if (!this.#isStopWatchStarted) {
        this.#stopWatch.start();
        this.#isStopWatchStarted = true;
      }
      const xInPlayArea = event.offsetX - this.#board.cluesWidth;
      const yInPlayArea = event.offsetY - this.#board.cluesHeight;
      const idxRow = this.getCellIndexByCoord(yInPlayArea);
      const idxCol = this.getCellIndexByCoord(xInPlayArea);
      this.#playField.handleAction(
        idxRow,
        idxCol,
        actionType,
        this.#canvasContext,
        this.#boardSettings,
        this.#board
      );
    }
  }

  #addListeners() {
    if (this.#hasEventListeners) {
      return;
    }
    const canvasNode = this.#canvasNode;
    const actions = Object.values(this.#actions);
    actions.forEach((actionType) =>
      canvasNode.addEventListener(actionType, (event) => {
        event.preventDefault();
        if (this.#isInPlayMode) {
          this.#triggerEventInsidePlayField(event, actionType);
        }
      })
    );
    this.#hasEventListeners = true;
  }

  getCellCoordByIndex(index) {
    return getCoordShiftByIndex(
      index,
      this.#board.blockSize,
      this.#boardSettings.divideNumCells,
      this.#boardSettings.dividerWidthPx,
      this.#boardSettings.cellSizePx + this.#boardSettings.lineWidthPx
    );
  }

  getCellIndexByCoord(coordinate) {
    return getCellIndexByOneCoord(
      coordinate,
      this.#board.blockSize,
      this.#boardSettings.divideNumCells,
      this.#boardSettings.dividerWidthPx - this.#boardSettings.lineWidthPx,
      this.#boardSettings.cellSizePx + this.#boardSettings.lineWidthPx
    );
  }

  drawBoard(puzzleMatrix, puzzleClues, boardStateMatrix) {
    this.#puzzleMatrix = puzzleMatrix;
    this.#puzzleClues = puzzleClues;
    this.#setCountRowsCols();
    this.#setBoardSize();
    this.#drawBoardGrid();
    this.#setTextStyleForClues();
    this.#setTextBaseLineInCell();
    this.#writeClues();
    this.#playField = new PlayField(
      this,
      puzzleMatrix,
      boardStateMatrix,
      this.#stopWatch
    );
    this.#addListeners();
    this.#isInPlayMode = true;
    this.#stopWatch.stop();
    this.#stopWatch.initialize(false, 0);
    this.#isStopWatchStarted = false;
  }

  drawSolution() {
    this.#isInPlayMode = false;
    this.#stopWatch.stop();
    this.#stopWatch.initialize(false, 0);
    this.#isStopWatchStarted = false;
    drawSolution(
      this.#canvasContext,
      this.#puzzleMatrix,
      this.#board,
      this.#boardSettings
    );
  }

  resetGame() {
    const emptyBoardStateMatrix = [];
    clearPlayField(
      this.#canvasContext,
      this.#playArea.rectPath,
      this.#boardSettings.emptyCellBg
    );
    this.#drawBoardGrid();
    this.#playField = new PlayField(
      this,
      this.#puzzleMatrix,
      emptyBoardStateMatrix,
      this.#stopWatch
    );
    this.#addListeners();
    this.#isInPlayMode = true;
    this.#stopWatch.stop();
    this.#stopWatch.initialize(false, 0);
    this.#isStopWatchStarted = false;
  }

  addLatestWin() {
    this.#game.addLatestWin();
  }
}
