import { Box, Icon, Stack, Typography } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    {
      icon: <RxDashboard />,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: <LuArrowUpDown />,
      text: "Transcation",
      link: "/transcation",
    },
    {
      icon: <FaHeadphonesAlt />,
      text: "Support",
      link: "/support",
    },
  ];

  return (
    <Stack
      maxWidth={"25rem"}
      padding={"2rem 5rem 2rem 3rem"}
      height={"100vh"}
      bgcolor={"black"}
      display={{
        xs: "none",
        lg: "block",
      }}
    >
      <Typography
        varient="h1"
        padding={"1rem 1rem 1rem 0.5rem "}
        fontSize={"3.5rem"}
        color={"white"}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          {" "}
          VistaSphere{" "}
        </Link>
      </Typography>
      {navLinks.map((nav) => (
        <Box key={nav.text}>
          <Link to={nav.link} className="sidebar-links">
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
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default Sidebar;
