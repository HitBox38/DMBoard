import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  TableChart,
  Home,
  SportsMma,
  People,
  Gavel,
  Contacts,
} from "@mui/icons-material";
import { useTheme } from "../hooks/useTheme";
import { Dispatch, SetStateAction } from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface SideMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const routes = [
  {
    link: "/",
    icon: <Home />,
    text: "Home Page",
  },
  {
    link: "/initiative",
    icon: <TableChart />,
    text: "Initiative Table",
  },
  {
    link: "/players",
    icon: <People />,
    text: "Players",
  },
  {
    link: "/encounters",
    icon: <SportsMma />,
    text: "Encounter Builder",
  },
  {
    link: "/bestiary",
    icon: <Contacts />,
    text: "Bestiary",
  },
  {
    link: "/rules",
    icon: <Gavel />,
    text: "Rules",
  },
];

export const SideMenu = ({ isOpen, setIsOpen }: SideMenuProps) => {
  const { theme } = useTheme();

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={() => setIsOpen(false)}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {routes?.map(({ link, icon, text }, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton href={link}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
