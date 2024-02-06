export const saveGameToLocalStorage = (nonogramId, timeSec, boardStateStr) => {
  const gameStatus = { nonogramId, timeSec, boardStateStr };
  localStorage.setItem("savedGame", JSON.stringify(gameStatus));
};
