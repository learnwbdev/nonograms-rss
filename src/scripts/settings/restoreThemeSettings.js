import { changeTheme } from "../theme/changeTheme";

export const restoreThemeSettings = () => {
  const defaultThemeName = "light";
  const themeName = localStorage.getItem("theme") ?? defaultThemeName;
  localStorage.setItem("theme", themeName);
  changeTheme(themeName);
};
