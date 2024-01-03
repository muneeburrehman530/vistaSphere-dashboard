import React from "react";
import loader from "./../assets/Loader.gif";
import { Box } from "@mui/material";
const Loader = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={30}
    >
      <img src={loader} alt="Loader" />
    </Box>
  );
};

export default Loader;
