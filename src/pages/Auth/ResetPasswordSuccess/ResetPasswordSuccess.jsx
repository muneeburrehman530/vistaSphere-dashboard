import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ResetPasswordSuccess = () => {
  return (
    <Box
      mt={"10%"}
      bgcolor={"#ededed"}
      width={"40%"}
      mx={"auto"}
      p={3}
      borderRadius={"2rem"}
      sx={{ boxShadow: 2 }}
    >
      <Box width={"100%"} margin={"auto"} textAlign={"center"}>
        <FaCircleCheck size={40} color="#059669" />

        <Typography
          variant="h3"
          color="#171717"
          py={2}
          fontSize={25}
          fontWeight={600}
        >
          Password Reset Done
        </Typography>
        <Typography color={"#797E82"} fontSize={18}>
          Now you can access you account.{" "}
        </Typography>
        <Link to={"/signin"}>
          <Button
            style={{
              fontSize: "1.4rem",
              backgroundColor: "#5F00D9",
              width: "100%",
              color: "#fff",
              marginTop: "1rem",
            }}
          >
            Sign In
          </Button>{" "}
        </Link>
      </Box>
    </Box>
  );
};

export default ResetPasswordSuccess;
