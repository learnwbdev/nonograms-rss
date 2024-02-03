export const capitalizeWord = (word) => {
  const capitalizedWord =
    word[0].toUpperCase() + word.substring(1).toLowerCase();
  return capitalizedWord;
};
