import "./sass/style.scss";
import NonogramsData from "./data/nonograms.json";
import GameApp from "./scripts/GameApp";
import { createHeader } from "./scripts/layout/createHeader";
import { createRandomButton } from "./scripts/layout/createRandomButton";
import { createSettingsButtons } from "./scripts/layout/createSettingsButtons";
import { changeSoundsMuteValue } from "./scripts/sound/changeSoundsMuteValue";
import VolUpSvg from "./assets/icons/volume_up.svg";
import VolOffSvg from "./assets/icons/volume_off.svg";
import LightModeSvg from "./assets/icons/light_mode.svg";
import DarkModeSvg from "./assets/icons/dark_mode.svg";
import BurgerToOpenSvg from "./assets/icons/burger_to_open.svg";
import BurgerToCloseSvg from "./assets/icons/burger_to_close.svg";
import { toggleTheme } from "./scripts/theme/toggleTheme";
import { restoreSavedSettings } from "./scripts/settings/restoreSavedSettings";
import { createActionButtonsSection } from "./scripts/layout/createActionButtonsSection";
import { createHamburgerSection } from "./scripts/layout/hamburger/createHamburgerSection";
import { showHamburgerLatestWins } from "./scripts/layout/hamburger/showHamburgerLatestWins";
import { closeHamburgerMenu } from "./scripts/layout/hamburger/closeHamburgerMenu";
import { createDrawerOverlayLatestWins } from "./scripts/layout/hamburger/createDrawerOverlayLatestWins";
import { createDrawerOverlayHamburg } from "./scripts/layout/hamburger/createDrawerOverlayHamburg";
import { handleHamburgBtnClick } from "./scripts/layout/hamburger/handleHamburgBtnClick";
import { hideHamburgerLatestWins } from "./scripts/layout/hamburger/hideHamburgerLatestWins";

document.body.classList.add("page");
// create in this order for the correct order in the stacking context
restoreSavedSettings();
createHeader();
await document.fonts.ready;
const { soundBtn, themeBtn, burgerBtn } = createSettingsButtons();
const gameApp = new GameApp(NonogramsData);
const randomBtn = createRandomButton();
const drawerOverlayLatestWins = createDrawerOverlayLatestWins();
const {
  hambSection,
  hambBtnsNodes: [scoreHambBtn, randomHambBtn, loadHambBtn, solutionHambBtn],
} = createHamburgerSection();
const drawerOverlayHamburg = createDrawerOverlayHamburg();
const [resetBtn, saveBtn, loadBtn, solutionBtn] = createActionButtonsSection();

randomBtn.addEventListener("click", gameApp.setRandomPuzzle.bind(gameApp));
resetBtn.addEventListener("click", gameApp.resetGame.bind(gameApp));
saveBtn.addEventListener("click", gameApp.saveGame.bind(gameApp));
loadBtn.addEventListener("click", gameApp.loadGame.bind(gameApp));
solutionBtn.addEventListener("click", gameApp.showSolution.bind(gameApp));

const closeHamburger = () => {
  closeHamburgerMenu(
    hambSection,
    drawerOverlayHamburg,
    burgerBtn,
    BurgerToOpenSvg
  );
};

scoreHambBtn.addEventListener("click", () => {
  showHamburgerLatestWins(
    hambSection,
    gameApp.latestWinsSection,
    drawerOverlayLatestWins
  );
});
randomHambBtn.addEventListener("click", () => {
  gameApp.setRandomPuzzle();
  closeHamburger();
});
loadHambBtn.addEventListener("click", () => {
  gameApp.loadGame();
  closeHamburger();
});
solutionHambBtn.addEventListener("click", () => {
  gameApp.showSolution();
  closeHamburger();
});

soundBtn.addEventListener("click", () => {
  gameApp.isSoundMuted = changeSoundsMuteValue(!gameApp.isSoundMuted);
  soundBtn.innerHTML = gameApp.isSoundMuted ? VolOffSvg : VolUpSvg;
  soundBtn.firstChild.classList.add("btn__icon");
});
themeBtn.addEventListener("click", () => {
  gameApp.themeName = toggleTheme(gameApp.themeName);
  themeBtn.innerHTML =
    gameApp.themeName === "light" ? LightModeSvg : DarkModeSvg;
  themeBtn.firstChild.classList.add("btn__icon");
});
burgerBtn.addEventListener("click", () => {
  handleHamburgBtnClick(
    hambSection,
    gameApp.latestWinsSection,
    drawerOverlayHamburg,
    drawerOverlayLatestWins,
    burgerBtn,
    BurgerToOpenSvg,
    BurgerToCloseSvg
  );
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    hideHamburgerLatestWins(
      hambSection,
      gameApp.latestWinsSection,
      drawerOverlayLatestWins
    );
    closeHamburger();
  }
});
