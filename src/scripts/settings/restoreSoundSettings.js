import { changeSoundsMuteValue } from "../sound/changeSoundsMuteValue";

export const restoreSoundSettings = () => {
  const defaultIsSoundOff = false;
  const isSoundOff = localStorage.getItem("soundOff") ?? defaultIsSoundOff;
  localStorage.setItem("soundOff", isSoundOff);
  changeSoundsMuteValue(isSoundOff);
};
