import { changeTheme } from "./changeTheme";
import { themes } from "./themesList";

export const toggleTheme = (curThemeName) => {
  const newThemeName = themes.filter((theme) => theme !== curThemeName)[0];
  changeTheme(newThemeName);

  return newThemeName;
};
