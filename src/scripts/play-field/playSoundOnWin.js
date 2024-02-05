import { soundEffects } from "../sound/soundEffects";

export const playSoundOnWin = () => {
  const soundArr = soundEffects.win;
  const sound = soundArr.filter((el) => el.paused)[0] ?? soundArr[0];
  sound.play();
};
