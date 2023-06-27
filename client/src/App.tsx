import { ThemeProvider } from "@mui/material/styles";
import { themeStore } from "./stores/themeStore";
import { Router } from "./components/Router";
import { Box, CssBaseline } from "@mui/material";

export const App = () => {
  const theme = themeStore((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" maxHeight="100vh">
        <Router />
      </Box>
    </ThemeProvider>
  );
};
