import { gameAppNode } from "./getGameAppNode";

export const createActionButtonsSection = () => {
  const actionsSection = document.createElement("section");
  actionsSection.classList.add("actions");
  gameAppNode.appendChild(actionsSection);

  const actionBtns = [
    "Reset game",
    "Save game",
    "Continue last game",
    "Solution",
  ];

  const actionBtnsNodes = [];
  for (let i = 0; i < actionBtns.length; i += 1) {
    const actionBtn = document.createElement("button");
    actionBtn.classList.add("actions__btn", "btn");
    actionBtn.type = "button";
    actionBtn.innerText = actionBtns[i];
    actionsSection.appendChild(actionBtn);
    actionBtnsNodes.push(actionBtn);
  }

  return actionBtnsNodes;
};
