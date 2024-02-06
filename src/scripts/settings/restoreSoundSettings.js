import { changeSoundsMuteValue } from "../sound/changeSoundsMuteValue";
import { getSoundMuteValue } from "../sound/getSoundMuteValue";

export const restoreSoundSettings = () => {
  const isSoundOff = getSoundMuteValue();
  localStorage.setItem("soundOff", JSON.stringify(isSoundOff));
  changeSoundsMuteValue(isSoundOff);
};
