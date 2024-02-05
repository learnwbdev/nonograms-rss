import { restoreSoundSettings } from "./restoreSoundSettings";
import { restoreThemeSettings } from "./restoreThemeSettings";

export const restoreSavedSettings = () => {
  restoreSoundSettings();
  restoreThemeSettings();
};
