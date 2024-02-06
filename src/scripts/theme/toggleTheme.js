import { changeTheme } from "./changeTheme";
import { getThemeName } from "./getThemeName";
import { themes } from "./themesList";

export const toggleTheme = () => {
  const curThemeName = getThemeName();
  const newThemeName = themes.filter((theme) => theme !== curThemeName)[0];
  changeTheme(newThemeName);

  return newThemeName;
};
