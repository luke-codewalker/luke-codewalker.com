export enum Settings {
  DARK_THEME_ON = "darkThemeOn",
}

export const isDarkThemeActive = (): boolean => {
  let initialTheme = false;
  if (typeof window !== "undefined") {
    const savedThemePreference = JSON.parse(
      window.localStorage.getItem(Settings.DARK_THEME_ON)!,
    );
    if (savedThemePreference !== null) {
      initialTheme = savedThemePreference;
    } else {
      initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }
  return initialTheme;
};
