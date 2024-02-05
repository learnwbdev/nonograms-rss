import AudioResCross from "../../assets/sounds/cross/cross.mp3";
import AudioResEmpty from "../../assets/sounds/empty/empty.mp3";
import AudioResFilled from "../../assets/sounds/filled/filled.mp3";
import AudioResWin from "../../assets/sounds/win/win.mp3";

// create several copies of Audio to play sound on several clicks with the same state
const createSeveralAudioElem = (number, soundFile) => {
  return [...Array(number)].map(() => new Audio(soundFile));
};

export const soundEffects = {
  cross: createSeveralAudioElem(6, AudioResCross),
  filled: createSeveralAudioElem(6, AudioResFilled),
  empty: createSeveralAudioElem(6, AudioResEmpty),
  win: createSeveralAudioElem(3, AudioResWin),
};
