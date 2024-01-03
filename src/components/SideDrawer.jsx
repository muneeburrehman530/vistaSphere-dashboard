import { useState } from "react";
import { Box, Icon, Stack, Typography } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Drawer, IconButton, List, ListItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SideDrawer = () => {
  const navLinks = [
    {
      icon: <RxDashboard />,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: <LuArrowUpDown />,
      text: "Transcation",
      link: "/transcations",
    },
    {
      icon: <FaHeadphonesAlt />,
      text: "Support",
      link: "/support",
    },
  ];

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <Box display={{ lg: "none" }} sx={{ boxShadow: 1 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List className="mobile-sidebar">
          {/* Add your menu items here */}
          <ListItem button onClick={toggleDrawer(false)}>
            <Stack>
              {navLinks.map((nav) => (
                <Box key={nav.text}>
                  <Box
                    display={"flex"}
                    gap="1.5rem"
                    alignItems={"center"}
                    margin={"0.5rem"}
                    className="sidebar-text"
                  >
                    <Icon sx={{ fontSize: 20 }}>{nav.icon}</Icon>
                    <Typography varient="body1" fontSize={"2rem"}>
                      {nav.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
