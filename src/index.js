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
// import BurgerToOpenSvg from "./assets/icons/burger_to_open.svg";
// import BurgerToCloseSvg from "./assets/icons/burger_to_close.svg";
import { toggleTheme } from "./scripts/theme/toggleTheme";
import { restoreSavedSettings } from "./scripts/settings/restoreSavedSettings";

document.body.classList.add("page");
restoreSavedSettings();
createHeader();
const randomBtn = createRandomButton();
const { soundBtn, themeBtn, burgerBtn } = createSettingsButtons();
const canvasClassName = "gameboard";
const stopWatchClassName = "stop-watch";
const gameApp = new GameApp(NonogramsData, canvasClassName, stopWatchClassName);

randomBtn.addEventListener("click", gameApp.setRandomPuzzle.bind(gameApp));
soundBtn.addEventListener("click", () => {
  gameApp.isSoundMuted = changeSoundsMuteValue(!gameApp.isSoundMuted);
  soundBtn.innerHTML = gameApp.isSoundMuted ? VolOffSvg : VolUpSvg;
});
themeBtn.addEventListener("click", () => {
  gameApp.themeName = toggleTheme(gameApp.themeName);
  themeBtn.innerHTML =
    gameApp.themeName === "light" ? LightModeSvg : DarkModeSvg;
});

console.log(burgerBtn);

console.log(gameApp.getNonogramsList());
gameApp.changeGameToPuzzle(1);
