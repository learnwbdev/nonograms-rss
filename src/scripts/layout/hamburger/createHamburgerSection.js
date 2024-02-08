import { gameAppNode } from "../getGameAppNode";

export const createHamburgerSection = () => {
  const hambSection = document.createElement("section");
  hambSection.classList.add("hamburger");
  gameAppNode.appendChild(hambSection);

  const hambBtns = [
    "High Score Table",
    "Random game",
    "Continue last game",
    "Solution",
  ];

  const hambBtnsNodes = [];
  for (let i = 0; i < hambBtns.length; i += 1) {
    const hambBtn = document.createElement("button");
    hambBtn.classList.add("hamburger__btn", "btn", "btn_text");
    hambBtn.type = "button";
    hambBtn.innerText = hambBtns[i];
    hambSection.appendChild(hambBtn);
    hambBtnsNodes.push(hambBtn);
  }

  return { hambSection, hambBtnsNodes };
};
