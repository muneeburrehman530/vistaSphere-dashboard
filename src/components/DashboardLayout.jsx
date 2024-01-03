import { Box, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import Topnav from "./Topnav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  return (
    <Box display={"flex"}>
      <Sidebar />
      {/* <SideDrawer /> */}
      <Box flexGrow={1}>
        <Topnav title={title} />
        <Container maxWidth={100}>{children}</Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
