export const saveGameToLocalStorage = (nonogramId, timeSec, boardStateStr) => {
  const gameStatus = { nonogramId, timeSec, boardStateStr };
  console.log(JSON.stringify(gameStatus));
  localStorage.setItem("savedGame", JSON.stringify(gameStatus));
};
