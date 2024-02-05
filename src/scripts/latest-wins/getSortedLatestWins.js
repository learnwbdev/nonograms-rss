import { getLatestWins } from "./getLatestWins";

export const getSortedLatestWins = () => {
  const compareByTimeInSeconds = (a, b) => {
    return a.timeSec - b.timeSec;
  };

  const latestWins = getLatestWins();
  const latestWinsSorted = [...latestWins].sort(compareByTimeInSeconds);
  return latestWinsSorted;
};
