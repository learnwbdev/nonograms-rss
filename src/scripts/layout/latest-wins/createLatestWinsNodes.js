import { updateLatestWinsNodes } from "./updateLatestWinsNodes";
import { gameAppNode } from "../getGameAppNode";

export const createLatestWinsNodes = () => {
  const latestWinsSection = document.createElement("section");
  latestWinsSection.classList.add("latest-wins");
  gameAppNode.appendChild(latestWinsSection);

  const latestWinsHeader = document.createElement("h2");
  latestWinsHeader.classList.add("latest-wins__header");
  latestWinsHeader.innerText = "High Score Table";
  latestWinsSection.appendChild(latestWinsHeader);

  const numWins = 5;
  const cols = ["time", "name", "level"];
  const winsListNodes = [];

  for (let i = 0; i < numWins; i += 1) {
    const winsLine = document.createElement("div");
    winsLine.classList.add("wins-line");
    const winNodes = {};

    for (let j = 0; j < cols.length; j += 1) {
      const winCol = document.createElement("div");
      const className = `wins-line__${cols[j]}`;
      winCol.classList.add(className);
      winNodes[cols[j]] = winCol;
      winsLine.appendChild(winCol);
    }
    winsListNodes.push(winNodes);
    latestWinsSection.appendChild(winsLine);
  }

  updateLatestWinsNodes(winsListNodes);

  return winsListNodes;
};
