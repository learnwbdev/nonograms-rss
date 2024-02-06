export const loadGameFromLocalStorage = () => {
  const defaultSavedGame = JSON.stringify({
    nonogramId: -1,
  });
  const savedGame = JSON.parse(localStorage.savedGame ?? defaultSavedGame);
  const { nonogramId, timeSec, boardStateStr } = savedGame;
  return { nonogramId, timeSec, boardStateStr };
};
