import { gameAppNode } from "./getGameAppNode";

export const createRandomButton = () => {
  const randomSection = document.createElement("section");
  randomSection.classList.add("random");
  gameAppNode.appendChild(randomSection);

  const randomBtn = document.createElement("button");
  randomBtn.classList.add("random__btn", "btn");
  randomBtn.type = "button";
  randomBtn.innerText = "Random game";
  randomSection.appendChild(randomBtn);

  return randomBtn;
};
