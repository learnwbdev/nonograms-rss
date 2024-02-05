export const getLatestWins = () => {
  const latestWinsDefaultArr = "[]";
  console.log(localStorage.latestWins);
  const latestWinsArr = JSON.parse(
    localStorage.latestWins ?? latestWinsDefaultArr
  );
  return latestWinsArr;
};
