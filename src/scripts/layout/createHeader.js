import LogoSvg from "../../assets/images/logo.svg";

import { gameAppNode } from "./getGameAppNode";

export const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  gameAppNode.appendChild(header);

  const divLogo = document.createElement("div");
  divLogo.classList.add("header__logo");
  header.appendChild(divLogo);
  divLogo.innerHTML = LogoSvg;
  const logo = divLogo.firstChild;
  logo.classList.add("logo");

  const title = document.createElement("h1");
  title.classList.add("header__title");
  title.innerText = "Nonograms";
  header.appendChild(title);
};
