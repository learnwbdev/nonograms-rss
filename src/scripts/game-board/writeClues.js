import { getCoordShiftByIndex } from "./getCoordShiftByIndex";

export const writeClues = (
  canvasContextRef,
  clues,
  puzzleClues,
  board,
  boardSettings
) => {
  const ctx = canvasContextRef;
  const { cellSizePx, lineWidthPx, dividerWidthPx, divideNumCells } =
    boardSettings;
  const { colsAllClues, rowsAllClues } = puzzleClues;
  const cellWithLinePx = cellSizePx + lineWidthPx;

  const getCoordShiftWithDividers = (cellIndexInPuzzle) => {
    return getCoordShiftByIndex(
      cellIndexInPuzzle,
      board.blockSize,
      divideNumCells,
      dividerWidthPx,
      cellWithLinePx
    );
  };

  const getCoordShiftWoutDividers = (cellIndexInPuzzle) => {
    const cntFullCells = cellIndexInPuzzle;
    const coordShift = dividerWidthPx + cntFullCells * cellWithLinePx;
    return coordShift;
  };

  const writeClueInCell = (cell, clueText) => {
    const clueTextStr = clueText.toString();
    const textMetrics = ctx.measureText(clueTextStr);
    const textWidth = textMetrics.width;
    const textStartShiftPx = Math.floor((cellSizePx - textWidth) / 2);
    const textXStart = cell.x + textStartShiftPx;
    const textYBaseline = cell.y + board.textBaseLine;
    ctx.fillText(clueText, textXStart, textYBaseline);
  };

  const writeRowClues = () => {
    const cell = {
      x: 0,
      y: 0,
    };
    for (let iRow = 0; iRow < rowsAllClues.length; iRow += 1) {
      cell.y = board.cluesHeight + getCoordShiftWithDividers(iRow);
      const rowClues = rowsAllClues[iRow];
      const colShiftCnt = clues.cols - rowClues.length;
      for (let jCol = 0; jCol < rowClues.length; jCol += 1) {
        const clueText = rowClues[jCol];
        const colIndex = colShiftCnt + jCol;
        cell.x = getCoordShiftWoutDividers(colIndex);
        writeClueInCell(cell, clueText);
      }
    }
  };

  const writeColClues = () => {
    const cell = {
      x: 0,
      y: 0,
    };
    for (let jCol = 0; jCol < colsAllClues.length; jCol += 1) {
      cell.x = board.cluesWidth + getCoordShiftWithDividers(jCol);
      const colClues = colsAllClues[jCol];
      const rowShiftCnt = clues.rows - colClues.length;
      for (let iRow = 0; iRow < colClues.length; iRow += 1) {
        const clueText = colClues[iRow];
        const rowIndex = rowShiftCnt + iRow;
        cell.y = getCoordShiftWoutDividers(rowIndex);
        writeClueInCell(cell, clueText);
      }
    }
  };

  writeRowClues();
  writeColClues();
};
