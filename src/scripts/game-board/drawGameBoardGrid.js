export const drawGameBoardGrid = (
  canvasContextRef,
  playAreaIn,
  cluesIn,
  board,
  boardSettings
) => {
  const ctx = canvasContextRef;
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
  const lineShiftPx = lineWidthPx / 2; // to make crisp lines for odd line widths (e.g., 1px)
  const dividerShiftPx = dividerWidthPx / 2; // coordinate is the center of the lineWidth
  const isDivider = (index, dividerShiftCnt) => {
    return (index % divideNumCells) - dividerShiftCnt === 0;
  };
  const getShiftInPx = (index, dividerShiftCnt) => {
    return isDivider(index, dividerShiftCnt) ? dividerShiftPx : lineShiftPx;
  };
  const getLineCoordinate = (lineIndex, dividerShift) => {
    const coordShiftPx = getShiftInPx(lineIndex, dividerShift);
    const numDividersBeforeLine = Math.ceil(
      (lineIndex - dividerShift) / divideNumCells
    );
    const numRegLinesBeforeLine = lineIndex - numDividersBeforeLine;
    const numCellsBeforeLine = lineIndex;
    const lineCoordPx =
      numDividersBeforeLine * dividerWidthPx +
      numRegLinesBeforeLine * lineWidthPx +
      numCellsBeforeLine * cellSizePx +
      coordShiftPx;
    return lineCoordPx;
  };

  const getLineWidth = (lineIndex, dividerShift) => {
    return isDivider(lineIndex, dividerShift) ? dividerWidthPx : lineWidthPx;
  };

  const getLineColor = (lineIndex, dividerShift) => {
    return isDivider(lineIndex, dividerShift)
      ? boardSettings.dividerColor
      : boardSettings.lineColor;
  };

  const drawLine = (x0, y0, x1, y1, lineWidth, lineColor) => {
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  };

  const drawColumnLinesForClues = (numCols, dividerShift) => {
    const yBottom = board.height;
    const boardTopEdge = 0;
    for (let i = 0; i < numCols; i += 1) {
      const yTop = i === 0 ? boardTopEdge : board.cluesHeight;
      const x = getLineCoordinate(i, dividerShift);
      const lineWidth = getLineWidth(i, dividerShift);
      const lineColor = getLineColor(i, dividerShift);
      drawLine(x, yTop, x, yBottom, lineWidth, lineColor);
    }
  };
  const drawRowLinesForClues = (numRows, dividerShift) => {
    const xRight = board.width;
    const boardLeftEdge = 0;
    for (let i = 0; i < numRows; i += 1) {
      const xLeft = i === 0 ? boardLeftEdge : board.cluesWidth;
      const y = getLineCoordinate(i, dividerShift);
      const lineWidth = getLineWidth(i, dividerShift);
      const lineColor = getLineColor(i, dividerShift);
      drawLine(xLeft, y, xRight, y, lineWidth, lineColor);
    }
  };
  const drawColumnLinesForPlayArea = (numCols, dividerShift) => {
    const boardTopEdge = 0;
    const yTop = boardTopEdge;
    const yBottom = board.height;
    for (let i = 0; i <= numCols; i += 1) {
      const x = board.cluesWidth + getLineCoordinate(i, dividerShift);
      const lineWidth = getLineWidth(i, dividerShift);
      const lineColor = getLineColor(i, dividerShift);
      drawLine(x, yTop, x, yBottom, lineWidth, lineColor);
    }
  };
  const drawRowLinesForPlayArea = (numRows, dividerShift) => {
    const boardLeftEdge = 0;
    const xLeft = boardLeftEdge;
    const xRight = board.width;
    for (let i = 0; i <= numRows; i += 1) {
      const y = board.cluesHeight + getLineCoordinate(i, dividerShift);
      const lineWidth = getLineWidth(i, dividerShift);
      const lineColor = getLineColor(i, dividerShift);
      drawLine(xLeft, y, xRight, y, lineWidth, lineColor);
    }
  };

  clues.cols.dividerShiftCnt = clues.cols.cells % divideNumCells; // start dividing from play area to board top edge
  clues.rows.dividerShiftCnt = clues.rows.cells % divideNumCells;
  playArea.cols.dividerShiftCnt = 0; // always 0, because always start with divider
  playArea.rows.dividerShiftCnt = 0;

  drawColumnLinesForClues(clues.cols.cells, clues.cols.dividerShiftCnt);
  drawRowLinesForClues(clues.rows.cells, clues.rows.dividerShiftCnt);
  drawColumnLinesForPlayArea(
    playArea.cols.cells,
    playArea.cols.dividerShiftCnt
  );
  drawRowLinesForPlayArea(playArea.rows.cells, playArea.rows.dividerShiftCnt);
};
