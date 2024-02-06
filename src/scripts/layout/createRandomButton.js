export const createRandomButton = () => {
  const randomSection = document.createElement("section");
  randomSection.classList.add("random");
  const randomBtn = document.createElement("button");
  randomBtn.classList.add("random__btn", "btn");
  randomBtn.innerText = "Random game";
  randomSection.appendChild(randomBtn);
  document.body.appendChild(randomSection);
  return randomBtn;
};
