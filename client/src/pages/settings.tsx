import { Switch, Card, CardContent, CardActionArea, Typography, Grid, Box } from "@mui/material";
import { themeStore } from "../stores/themeStore";

export const Settings = () => {
  const toggleTheme = themeStore((state) => state.toggleTheme);
  const theme = themeStore((state) => state.theme);
  return (
    <Card>
      <CardContent>Change theme</CardContent>
      <CardActionArea>
        {theme && (
          <Grid container alignItems="center">
            <Typography>Light theme</Typography>
            <Switch onChange={toggleTheme} defaultChecked={theme.palette?.mode === "dark"} />
            <Typography>Dark theme</Typography>
          </Grid>
        )}
      </CardActionArea>
    </Card>
  );
};
