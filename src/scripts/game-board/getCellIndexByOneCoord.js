export const getCellIndexByOneCoord = (
  coord,
  blockSize,
  divideNumCells,
  diffDividerRegLinePx,
  cellWithLinePx
) => {
  const cntFullBlocks = Math.floor(coord / blockSize);
  const coordShiftInBlock = (coord % blockSize) - diffDividerRegLinePx; // left half of divider -> previous cell
  const cntFullCells = Math.floor(coordShiftInBlock / cellWithLinePx);
  const idxBlockShift = cntFullBlocks * divideNumCells;
  const idxCellShift = cntFullCells;
  const cellIndex = idxBlockShift + idxCellShift;
  return cellIndex;
};
