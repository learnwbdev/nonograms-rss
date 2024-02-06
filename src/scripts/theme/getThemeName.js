export const getThemeName = () => {
  const defaultThemeName = "light";
  const themeName = localStorage.getItem("theme") ?? defaultThemeName;
  return themeName;
};
