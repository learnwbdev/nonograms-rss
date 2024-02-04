export const getGameBoardSize = (playAreaIn, cluesIn, boardSettings) => {
  const { cellSizePx, lineWidthPx, dividerWidthPx, divideNumCells } =
    boardSettings;
  const clues = {
    rows: {
      cells: cluesIn.rows,
    },
    cols: {
      cells: cluesIn.cols,
    },
  };
  const playArea = {
    rows: {
      cells: playAreaIn.rows,
    },
    cols: {
      cells: playAreaIn.cols,
    },
  };

  const countDividers = (numCells) => {
    return Math.floor(numCells / divideNumCells);
  };
  const isEndLineDivider = (numCellsPuzzle) => {
    const isDivider = numCellsPuzzle % divideNumCells === 0;
    return isDivider;
  };

  clues.cols.dividers = countDividers(clues.cols.cells);
  clues.cols.lines = clues.cols.cells - clues.cols.dividers;
  playArea.cols.dividers = countDividers(playArea.cols.cells);
  playArea.cols.lines = playArea.cols.cells - playArea.cols.dividers;
  const sizeRightEndLine = isEndLineDivider(playArea.cols.cells)
    ? dividerWidthPx
    : lineWidthPx;
  const numColDividers = clues.cols.dividers + playArea.cols.dividers;
  const numColLines = clues.cols.lines + playArea.cols.lines;
  const numCol = clues.cols.cells + playArea.cols.cells;
  const boardWidth =
    numCol * cellSizePx +
    numColLines * lineWidthPx +
    numColDividers * dividerWidthPx +
    sizeRightEndLine;
  const cluesWidth =
    clues.cols.cells * cellSizePx +
    clues.cols.lines * lineWidthPx +
    clues.cols.dividers * dividerWidthPx;

  clues.rows.dividers = countDividers(clues.rows.cells);
  clues.rows.lines = clues.rows.cells - clues.rows.dividers;
  playArea.rows.dividers = countDividers(playArea.rows.cells);
  playArea.rows.lines = playArea.rows.cells - playArea.rows.dividers;
  const sizeBottomEndLine = isEndLineDivider(playArea.rows.cells)
    ? dividerWidthPx
    : lineWidthPx;
  const numRowDividers = clues.rows.dividers + playArea.rows.dividers;
  const numRowLines = clues.rows.lines + playArea.rows.lines;
  const numRow = clues.rows.cells + playArea.rows.cells;
  const boardHeight =
    numRow * cellSizePx +
    numRowLines * lineWidthPx +
    numRowDividers * dividerWidthPx +
    sizeBottomEndLine;
  const cluesHeight =
    clues.rows.cells * cellSizePx +
    clues.rows.lines * lineWidthPx +
    clues.rows.dividers * dividerWidthPx;

  return { boardWidth, boardHeight, cluesWidth, cluesHeight };
};
