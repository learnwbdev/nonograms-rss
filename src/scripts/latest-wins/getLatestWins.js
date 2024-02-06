export const getLatestWins = () => {
  const latestWinsDefaultArr = "[]";
  const latestWinsArr = JSON.parse(
    localStorage.latestWins ?? latestWinsDefaultArr
  );
  return latestWinsArr;
};
