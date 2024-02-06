export const getSoundMuteValue = () => {
  const defaultIsSoundOff = "false";
  const isSoundOff = JSON.parse(localStorage.soundOff ?? defaultIsSoundOff);
  return isSoundOff;
};
