import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { SideMenu } from "./SideMenu";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            onClick={() => setIsDrawerOpen(true)}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { sm: "block" } }}>
            DMBoard{currentPage.length > 1 ? currentPage.split("/").join(" / ") : ""}
          </Typography>
          {currentPage !== "/settings" && (
            <IconButton
              size="large"
              edge="end"
              onClick={() => navigate("/settings")}
              color="inherit">
              <SettingsIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <SideMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};
