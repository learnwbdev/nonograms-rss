import VolUpSvg from "../../assets/icons/volume_up.svg";
import VolOffSvg from "../../assets/icons/volume_off.svg";
import LightModeSvg from "../../assets/icons/light_mode.svg";
import DarkModeSvg from "../../assets/icons/dark_mode.svg";
import BurgerToOpenSvg from "../../assets/icons/burger_to_open.svg";
import BurgerToCloseSvg from "../../assets/icons/burger_to_close.svg";
import { getSoundMuteValue } from "../sound/getSoundMuteValue";
import { getThemeName } from "../theme/getThemeName";

export const createSettingsButtons = () => {
  const settingsSection = document.createElement("section");
  settingsSection.classList.add("settings");

  const soundBtn = document.createElement("button");
  soundBtn.classList.add("settings__sound", "btn", "btn_round");
  soundBtn.type = "button";
  const isSoundOff = getSoundMuteValue();
  soundBtn.innerHTML = isSoundOff ? VolOffSvg : VolUpSvg;
  soundBtn.firstChild.classList.add("btn__icon");
  settingsSection.appendChild(soundBtn);

  const themeBtn = document.createElement("button");
  themeBtn.classList.add("settings__theme", "btn", "btn_round");
  themeBtn.type = "button";
  const themeName = getThemeName();
  themeBtn.innerHTML = themeName === "light" ? LightModeSvg : DarkModeSvg;
  themeBtn.firstChild.classList.add("btn__icon");
  settingsSection.appendChild(themeBtn);

  const burgerBtn = document.createElement("button");
  burgerBtn.classList.add("settings__burger", "btn", "btn_round");
  burgerBtn.type = "button";
  // TODO: get state of the burger menu
  const isBurgerClose = true;
  burgerBtn.innerHTML = isBurgerClose ? BurgerToOpenSvg : BurgerToCloseSvg;
  burgerBtn.firstChild.classList.add("btn__icon");
  settingsSection.appendChild(burgerBtn);

  document.body.appendChild(settingsSection);

  return { soundBtn, themeBtn, burgerBtn };
};
