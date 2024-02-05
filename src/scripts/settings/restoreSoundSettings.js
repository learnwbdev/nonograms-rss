import { changeSoundsMuteValue } from "../sound/changeSoundsMuteValue";

export const restoreSoundSettings = () => {
  const defaultIsSoundOff = "false";
  const isSoundOff = JSON.parse(localStorage.soundOff ?? defaultIsSoundOff);
  localStorage.setItem("soundOff", JSON.stringify(isSoundOff));
  changeSoundsMuteValue(isSoundOff);
};
