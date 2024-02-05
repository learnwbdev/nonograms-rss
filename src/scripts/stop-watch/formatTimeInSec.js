export const formatTimeInSec = (timeInSec) => {
  const numToStrWithZeroPad = (number) => {
    return number.toString().padStart(2, "0");
  };

  const secInMin = 60;
  const minInHour = 60;
  const hoursNum = Math.floor(timeInSec / (secInMin * minInHour));
  const minutesNum = Math.floor(timeInSec / secInMin) % minInHour;
  const secondsNum = timeInSec % minInHour;
  const hoursStr = numToStrWithZeroPad(hoursNum);
  const minutesStr = numToStrWithZeroPad(minutesNum);
  const secondsStr = numToStrWithZeroPad(secondsNum);
  const timeStr =
    hoursNum === 0
      ? `${minutesStr}:${secondsStr}`
      : `${hoursStr}:${minutesStr}:${secondsStr}`;
  return timeStr;
};
