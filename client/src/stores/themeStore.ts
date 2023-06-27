import { create } from "zustand";
import { darkTheme, lightTheme } from "../theme";

type ThemeState = {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
};

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    return darkTheme;
  } else if (storedTheme === "light") {
    return lightTheme;
  } else {
    return lightTheme; // Set a default theme when no preference is stored
  }
};

export const themeStore = create<ThemeState>((set) => {
  const toggleTheme = () => {
    set((state) => {
      const newTheme = state.theme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
      return { theme: newTheme };
    });
  };

  return {
    theme: getInitialTheme(),
    toggleTheme,
  };
});
