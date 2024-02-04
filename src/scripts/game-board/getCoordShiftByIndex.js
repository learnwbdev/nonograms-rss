const getFullBlocksCells = (index, divideNumCells) => {
  const cntFullBlocks = Math.floor(index / divideNumCells);
  const cntBlockFullCells = index % divideNumCells;
  return { cntFullBlocks, cntBlockFullCells };
};

export const getCoordShiftByIndex = (
  cellIndexInPuzzle,
  blockSize,
  divideNumCells,
  dividerWidthPx,
  cellWithLinePx
) => {
  const { cntFullBlocks, cntBlockFullCells } = getFullBlocksCells(
    cellIndexInPuzzle,
    divideNumCells
  );
  const coordShift =
    cntFullBlocks * blockSize +
    dividerWidthPx +
    cntBlockFullCells * cellWithLinePx;
  return coordShift;
};
