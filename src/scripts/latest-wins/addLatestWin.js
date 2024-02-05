import { getLatestWins } from "./getLatestWins";

export const addLatestWin = (
  nonogramId,
  nonogramName,
  nonogramLevel,
  timeFormattedStr,
  timeSeconds
) => {
  const latestWins = getLatestWins();
  const currentWin = {
    id: nonogramId,
    name: nonogramName,
    level: nonogramLevel,
    time: timeFormattedStr,
    timeSec: timeSeconds,
  };
  latestWins.push(currentWin);
  while (latestWins.length > 5) {
    latestWins.shift();
  }
  localStorage.setItem("latestWins", JSON.stringify(latestWins));
};
