export const countPuzzleRowsCols = (puzzleMatrix, puzzleClues) => {
  const { rowsAllClues, colsAllClues } = puzzleClues;

  const numRowForClues = Math.max(
    ...colsAllClues.map((colClues) => colClues.length)
  );
  const numColForClues = Math.max(
    ...rowsAllClues.map((rowClues) => rowClues.length)
  );

  const numRowForPuzzle = puzzleMatrix.length;
  const numColForPuzzle = puzzleMatrix?.[0].length;

  return { numRowForPuzzle, numColForPuzzle, numRowForClues, numColForClues };
};
