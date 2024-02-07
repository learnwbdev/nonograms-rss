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
import { toggleTheme } from "./scripts/theme/toggleTheme";
import { restoreSavedSettings } from "./scripts/settings/restoreSavedSettings";
import { createActionButtonsSection } from "./scripts/layout/createActionButtonsSection";

document.body.classList.add("page");
restoreSavedSettings();
createHeader();
const randomBtn = createRandomButton();
const { soundBtn, themeBtn } = createSettingsButtons();

await document.fonts.ready;
const gameApp = new GameApp(NonogramsData);
const [resetBtn, saveBtn, loadBtn, solutionBtn] = createActionButtonsSection();

randomBtn.addEventListener("click", gameApp.setRandomPuzzle.bind(gameApp));
resetBtn.addEventListener("click", gameApp.resetGame.bind(gameApp));
saveBtn.addEventListener("click", gameApp.saveGame.bind(gameApp));
loadBtn.addEventListener("click", gameApp.loadGame.bind(gameApp));
solutionBtn.addEventListener("click", gameApp.showSolution.bind(gameApp));

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
