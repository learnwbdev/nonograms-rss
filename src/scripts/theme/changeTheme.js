import { themeList } from "./themesList";

export const changeTheme = (themeName) => {
  const { body } = document;
  const classNameForTheme = `theme-${themeName}`;
  body.classList.remove(...themeList);
  body.classList.add(classNameForTheme);
  localStorage.setItem("theme", themeName);
};
