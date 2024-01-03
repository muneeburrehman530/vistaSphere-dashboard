import { Box, Typography } from "@mui/material";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const ForgotPasswordSent = () => {
  const { email } = useParams();

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
      <Box width={"100%"} margin={"auto"} textAlign={"center"} my={4}>
        <FaCircleCheck size={40} color="#059669" />
        <Typography
          variant="h3"
          color="#171717"
          fontSize={22}
          fontWeight={600}
          my={2}
        >
          Successfully Sent
        </Typography>
        <Typography variant="body1" color="#797E82" fontSize={16}>
          We have sent instructions on how to reset you password to {""}
          <strong style={{ color: "black" }}>
            {email} {""}
          </strong>
          {""}
          Please follow the instructions from email. We have sent you an email
          verification.
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPasswordSent;
