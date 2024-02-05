import { soundEffects } from "./soundEffects";

export const changeSoundsMuteValue = (isMuted) => {
  const soundsArrs = Object.values(soundEffects);
  soundsArrs.forEach((soundArr) => {
    soundArr.forEach((soundIn) => {
      const sound = soundIn;
      sound.muted = isMuted;
    });
  });
  localStorage.setItem("soundOff", JSON.stringify(isMuted));
};
