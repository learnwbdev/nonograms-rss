import { getSortedLatestWins } from "../../latest-wins/getSortedLatestWins";

export const updateLatestWinsNodes = (winsListNodes) => {
  const latestWins = getSortedLatestWins();
  const cols = ["time", "name", "level"];

  for (let i = 0; i < winsListNodes.length; i += 1) {
    const winLine = winsListNodes[i];
    for (let j = 0; j < cols.length; j += 1) {
      const winNode = winLine[cols[j]];
      winNode.innerText = latestWins?.[i]?.[cols[j]] ?? "";
    }
  }
};
