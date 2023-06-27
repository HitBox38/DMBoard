import { themeStore } from "../stores/themeStore";
import { useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme, toggleTheme } = themeStore();

  const currentTheme =
    theme === (prefersDarkMode ? darkTheme : lightTheme)
      ? theme
      : prefersDarkMode
      ? darkTheme
      : lightTheme;

  return {
    theme: currentTheme,
    toggleTheme,
  };
};
