import { soundStateMap } from "../sound/soundStateMap";

export const playSoundOnStateChange = (newState) => {
  const soundArr = soundStateMap[newState];
  const sound = soundArr.filter((el) => el.paused)[0] ?? soundArr[0];
  sound.play();
};
