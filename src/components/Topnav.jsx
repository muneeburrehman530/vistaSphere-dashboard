import { Button, Box, Typography, Menu, MenuItem } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import useAuth from "../hooks/useAuth";

const Topnav = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    logout();
  };
  return (
    <Box display={"flex"}>
      <SideDrawer />

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ boxShadow: 2 }}
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={3}
        paddingRight={3}
        flexGrow={1}
        bgcolor={"#e2e2e2"}
      >
        <Typography varient="h1" fontSize="2rem">
          {title}
        </Typography>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FaUserAlt color="black" size={20} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>logout</MenuItem>
          <MenuItem onClick={handleClose}>support</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topnav;
